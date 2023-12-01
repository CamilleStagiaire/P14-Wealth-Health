//import "./style.css";
import React, { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";

function Employees() {
  const { formData } = useContext(FormContext);

  const headers = Object.keys(formData);

  return (
    <main className="employees">
      <div className="container">
      <h1>Current Employees</h1>
      <table className="container-layout">
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header}>{header.charAt(0).toUpperCase() + header.slice(1)}</th> 
            ))}
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
      </div>
    </main>
  );
}

export default Employees;

