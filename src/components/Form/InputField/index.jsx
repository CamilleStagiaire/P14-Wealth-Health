import React, { useContext } from "react";
import { FormContext } from "../../../contexts/FormContext";

function InputField({ id, label, type = "text" }) {
  const { formData, updateFieldData, validationErrors } = useContext(FormContext);

  return (
    <div className={`form-group-label ${validationErrors[id] ? 'error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={formData[id]}
        onChange={(e) => updateFieldData(id, e.target.value)}
        placeholder={validationErrors[id] || ''}
      />
    </div>
  );
}

export default InputField;
