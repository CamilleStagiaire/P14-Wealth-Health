import React, { createContext, useState } from "react";
import data from "../data/data.json";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
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

  const updateFieldData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <FormContext.Provider value={{
      formData,
      updateFieldData,
      states: data.states,
      departments: data.departments
    }}>
      {children}
    </FormContext.Provider>
  );
};
