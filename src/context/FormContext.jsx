import { createContext, useContext, useState } from 'react';
import { useLoading } from './LoadingContext';

const FormContext = createContext({
  isSubmitting: false,
  formErrors: {},
  submitForm: () => Promise.resolve(),
  setFormErrors: () => {},
  clearFormErrors: () => {}
});

export const FormProvider = ({ children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const { setLoading, setProgress, setMessage } = useLoading();

  const submitForm = async (formData, submitFunction, options = {}) => {
    const {
      successMessage = 'Form submitted successfully!',
      errorMessage = 'An error occurred while submitting the form.',
      validateForm = () => ({ isValid: true, errors: {} })
    } = options;

    try {
      setIsSubmitting(true);
      setLoading(true);
      setMessage('Submitting form...');
      
      // Validate form
      const { isValid, errors } = validateForm(formData);
      if (!isValid) {
        setFormErrors(errors);
        throw new Error('Form validation failed');
      }

      // Show progress animation
      for (let i = 0; i <= 100; i += 20) {
        setProgress(i);
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      // Submit form
      const result = await submitFunction(formData);
      
      setMessage(successMessage);
      setProgress(100);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return result;
    } catch (error) {
      setFormErrors(prev => ({
        ...prev,
        submit: error.message || errorMessage
      }));
      throw error;
    } finally {
      setIsSubmitting(false);
      setLoading(false);
      setProgress(0);
      setMessage('');
    }
  };

  const clearFormErrors = () => {
    setFormErrors({});
  };

  return (
    <FormContext.Provider
      value={{
        isSubmitting,
        formErrors,
        submitForm,
        setFormErrors,
        clearFormErrors
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);

// Form validation utilities
export const validateRequired = (value, fieldName) => {
  if (!value || (typeof value === 'string' && !value.trim())) {
    return `${fieldName} is required`;
  }
  return '';
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return 'Email is required';
  }
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }
  return '';
};

export const validatePhone = (phone) => {
  const phoneRegex = /^\+?[\d\s-]{10,}$/;
  if (!phone) {
    return 'Phone number is required';
  }
  if (!phoneRegex.test(phone)) {
    return 'Please enter a valid phone number';
  }
  return '';
};

export const validateLength = (value, fieldName, { min, max }) => {
  if (min && value.length < min) {
    return `${fieldName} must be at least ${min} characters`;
  }
  if (max && value.length > max) {
    return `${fieldName} must be no more than ${max} characters`;
  }
  return '';
};

// Form error component
export const FormError = ({ error }) => {
  if (!error) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="text-red-500 text-sm mt-1"
    >
      {error}
    </motion.div>
  );
}; 