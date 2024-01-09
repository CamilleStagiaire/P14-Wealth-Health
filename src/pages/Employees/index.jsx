import React, { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";
import { TablePlugin } from "table-plugin-openclassrooms";
import Employee from "../../models/Employee";

const primaryColor = "#5a6f08";

function Employees() {
  const { employees, states, dataMapping } = useContext(FormContext);

    const formattedEmployees = employees.map(emp => {
      const employeeInstance = new Employee(emp, states);
      return {
        ...emp,
        dateOfBirth: employeeInstance.getFormattedData("dateOfBirth"),
        startDate: employeeInstance.getFormattedData("startDate"),
        state: employeeInstance.getFormattedData("state"),
        street: employeeInstance.getFormattedData("street")
      };
    });

  return (
    <main className="employees">
      <div className="container">
        <h1>Current Employees</h1>
        <TablePlugin data={formattedEmployees} dataMapping={dataMapping}  primaryColor = {primaryColor}/>
      </div>
    </main>
  );
}

export default Employees;
