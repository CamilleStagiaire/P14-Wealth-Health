import React, { useContext } from "react";
import { FormContext } from "../../../contexts/FormContext";

/**
 * Composant SelectField pour les champs de selection
 * @param {string} id
 * @param {string} label
 */
function SelectField({ id, label }) {
  const { formData, updateFieldData, states, departments } = useContext(FormContext);
  const options = id === "state" ? states : departments;

  return (
    <div className="form-group-label">
      <label htmlFor={id}>{label}</label>
      <select className="inputSelect" id={id} value={formData[id]} onChange={(e) => updateFieldData(id, e.target.value)}>
        {options.map(option => (
          <option key={option.abbreviation} value={option.name}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
