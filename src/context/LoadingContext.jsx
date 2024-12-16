import { createContext, useContext, useState } from 'react';

const LoadingContext = createContext({
  isLoading: false,
  progress: 0,
  message: '',
  setLoading: () => {},
  setProgress: () => {},
  setMessage: () => {}
});

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');

  const setLoading = (loading) => {
    setIsLoading(loading);
    if (!loading) {
      setProgress(0);
      setMessage('');
    }
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        progress,
        message,
        setLoading,
        setProgress,
        setMessage
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext); 