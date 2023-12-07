import React, { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";

function Employees() {
  const { employees, initialFormData } = useContext(FormContext);

  const data = Object.keys(initialFormData);

  return (
    <main className="employees">
      <div className="container">
        <h1>Current Employees</h1>
        <table className="container-layout">
          <thead>
            <tr className="list-header">
              {data.map(data => (
                <th key={data}>{data.charAt(0).toUpperCase() + data.slice(1)}</th> 
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index} className="list-body">
                {data.map(data => (
                  <td key={data}>{employee[data]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Employees;
