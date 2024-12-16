import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactModal = ({ isOpen, setIsOpen }) => {
 
  const [formData, setFormData] = useState({
    purpose: "",
    fullName: "",
    business: "",
    email: "",
    linkedin: "",
    message: "",
  });

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form successfully submitted!");
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center bg-[#f9f4e8]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#f9f4e8] rounded-lg shadow-lg p-4 sm:p-10 w-full max-w-[90%] sm:max-w-[45rem] overflow-auto"
              onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block uppercase text-[#1f1f1f] mb-2 text-sm sm:text-base">
                    MEN BOG'LANMOQCHIMAN:
                  </label>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4 text-[#1f1f1f] font-medium">
                    <label className="flex items-center text-sm sm:text-base">
                      <input
                        type="radio"
                        name="purpose"
                        value="Ishga qabul qilish"
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Ishga qabul qilish
                    </label>
                    <label className="flex items-center text-sm sm:text-base">
                      <input
                        type="radio"
                        name="purpose"
                        value="Ish toping"
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Ish toping
                    </label>
                    <label className="flex items-center text-sm sm:text-base">
                      <input
                        type="radio"
                        name="purpose"
                        value="O'z tuzilmalaringizga qo'shiling"
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      O'z tuzilmalaringizga qo'shiling
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[#1f1f1f] mb-1 text-sm sm:text-base">
                      Ismi va familiyasi
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      placeholder="Nodirbek Negmatov"
                      onChange={handleInputChange}
                      className="w-full bg-inherit border-b border-[#1f1f1f] placeholder:text-xs sm:placeholder:text-sm text-xs sm:text-sm pl-2 placeholder:text-[#1f1f1f] text-[#1f1f1f] font-light py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#1f1f1f] mb-1 text-sm sm:text-base">Biznes</label>
                    <input
                      type="text"
                      name="business"
                      value={formData.business}
                      placeholder="OpenAi"
                      onChange={handleInputChange}
                      className="w-full bg-inherit border-b border-[#1f1f1f] placeholder:text-xs sm:placeholder:text-sm text-xs sm:text-sm pl-2 placeholder:text-[#1f1f1f] text-[#1f1f1f] font-light py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#1f1f1f] mb-1 text-sm sm:text-base">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      placeholder="apex@openai.com"
                      onChange={handleInputChange}
                      className="w-full bg-inherit border-b border-[#1f1f1f] placeholder:text-xs sm:placeholder:text-sm text-xs sm:text-sm pl-2 placeholder:text-[#1f1f1f] text-[#1f1f1f] font-light py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#1f1f1f] mb-1 text-sm sm:text-base">
                      LinkedIn profili
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      placeholder="linkedin.com/company/apexbart"
                      onChange={handleInputChange}
                      className="w-full bg-inherit border-b border-[#1f1f1f] placeholder:text-xs sm:placeholder:text-sm text-xs sm:text-sm pl-2 placeholder:text-[#1f1f1f] text-[#1f1f1f] font-light py-2"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#1f1f1f] mb-1 text-sm sm:text-base">Xabar</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    placeholder="Salom Flaire, men OpenAIga qo'shilish uchun AI bo'yicha katta muhandisni qidiryapman"
                    onChange={handleInputChange}
                    className="w-full bg-inherit border-b h-24 border-[#1f1f1f] placeholder:text-xs sm:placeholder:text-sm text-xs sm:text-sm pl-2 placeholder:text-[#1f1f1f] text-[#1f1f1f] font-light py-2"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#1f1f1f] text-white px-4 py-2 text-xs sm:text-sm rounded-md hover:bg-opacity-80"
                  >
                    Yuborish
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactModal;
