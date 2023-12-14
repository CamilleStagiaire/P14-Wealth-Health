import React, { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";

function Employees() {
  const { employees, initialFormData, states, dataMapping } = useContext(FormContext);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
  
    const formatDay = day < 10 ? `0${day}` : day;
    const formatMonth = month < 10 ? `0${month}` : month;
  
    return `${formatDay}/${formatMonth}/${year}`;
  };

  const getStateAbbreviation = (stateName) => {
    const state = states.find(d => d.name === stateName);
    return state ? state.abbreviation : stateName;
  };

  const dataKeys = Object.keys(initialFormData);

  return (
    <main className="employees">
      <div className="container">
        <h1>Current Employees</h1>
        <table className="container-layout table">
          <thead>
            <tr className="list-header">
              {dataKeys.map(key => (
                <th key={key}>{dataMapping[key]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index} className="list-body"  >
                {dataKeys.map(key => (
                  <td key={key}>
                    {key === "dateOfBirth" || key === "startDate"
                      ? formatDate(employee[key])
                      : key === "state"
                      ? getStateAbbreviation(employee[key])
                      : employee[key]}
                  </td>
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
