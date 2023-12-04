import React, { createContext, useState } from "react";
import data from "../data/data.json";

export const FormContext = createContext();

const initialFormData = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  startDate: "",
  street: "",
  city: "",
  state: data.states[0].name,
  zipCode: "",
  department: data.departments[0].name,
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [employees, setEmployees] = useState([]);

  const addEmployee = (newEmployee) => {
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  const updateFieldData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const resetFormData = () => {
    setFormData(initialFormData);
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFieldData,
        resetFormData,
        addEmployee,
        states: data.states,
        departments: data.departments,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
