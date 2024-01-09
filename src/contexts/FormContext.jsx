import React, { createContext, useState, useEffect } from "react";
import data from "../data/data.json";
import { apiService } from "../services/apiService";

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

  useEffect(() => {
    apiService.fetchEmployees()
      .then(data => setEmployees(data))
      .catch(error => console.error('Fetching employees failed', error));
  }, []);
  
  const dataMapping = {
    firstName: "First Name",
    lastName: "Last Name",
    startDate: "Start Date",
    department: "Department",
    dateOfBirth: "Date of Birth",
    street: "Street",
    city: "City",
    state: "State",
    zipCode: "Zip Code",
  };

  const addEmployee = (newEmployee) => {
    apiService.addEmployee(newEmployee)
      .then(addedEmployee => {
        setEmployees(prevEmployees => [...prevEmployees, addedEmployee]);
      })
      .catch(error => {
        console.error('Adding employee failed', error);
      });
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
