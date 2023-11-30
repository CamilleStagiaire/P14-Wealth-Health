import React, { createContext, useState } from "react";
import data from "../data/data.json";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [states] = useState(data.states);
  const [departments] = useState(data.departments);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: data.states[0].name,
    zipCode: "",
    department: data.departments[0].name,
  });

  const [validationErrors, setValidationErrors] = useState({});

  const updateFieldData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const validateForm = () => {
    const errors = {};
  
    for (const key in formData) {
      if (!formData[key].trim()) {
        errors[key] = `${key.charAt(0).toUpperCase()}${key.slice(1)} is required`;
      }
    }
  
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const saveEmployee = () => {
    if (validateForm()) {
      console.log("Form Data:", formData);
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        validationErrors,
        updateFieldData,
        setValidationErrors,
        saveEmployee,
        states,
        departments,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
