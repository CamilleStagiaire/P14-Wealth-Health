import React, { createContext, useState, useEffect } from "react";
import data from "../data/data.json";

export const FormContext = createContext();

const initialFormData = {
  firstName: "",
  lastName: "",
  startDate: "",
  department: data.departments[0].name,
  dateOfBirth: "",
  street: "",
  city: "",
  state: data.states[0].name,
  zipCode: "",
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [employees, setEmployees] = useState([]);
  console.log(employees);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    if (storedEmployees) {
      setEmployees(storedEmployees);
    }
  }, []);

  const dataMapping = {
    firstName: "First Name",
    lastName: "Last Name",
    dateOfBirth: "Date of Birth",
    startDate: "Start Date",
    street: "Street",
    city: "City",
    state: "State",
    zipCode: "Zip Code",
    department: "Department",
  };

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
    <FormContext.Provider value={{
      formData,
      dataMapping,
      initialFormData,
      updateFieldData,
      resetFormData,
      addEmployee,
      employees,
      states: data.states,
      departments: data.departments,
    }}>
      {children}
    </FormContext.Provider>
  );
};
