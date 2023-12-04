import React, { useState, useEffect } from "react";

function Employees() {
  const [localEmployees, setLocalEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    if (storedEmployees) {
      setLocalEmployees(storedEmployees);
      console.log(localStorage.getItem('employees'));
    }
  }, []);

  const headers = localEmployees.length > 0 ? Object.keys(localEmployees[0]) : [];

  return (
    <main className="employees">
      <div className="container">
        <h1>Current Employees</h1>
        <table className="container-layout">
          <thead>
            <tr className="list-header">
              {headers.map(header => (
                <th key={header}>{header.charAt(0).toUpperCase() + header.slice(1)}</th> 
              ))}
            </tr>
          </thead>
          <tbody>
            {localEmployees.map((employee, index) => (
              <tr key={index} className="list-header">
                {headers.map(header => (
                  <td key={header}>{employee[header]}</td>
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
