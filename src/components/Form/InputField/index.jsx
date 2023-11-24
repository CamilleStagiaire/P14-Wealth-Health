function InputField({ id, label, type = "text" }) {
    return (
      <div className="form-group-label">
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} />
      </div>
    );
  }
  
  export default InputField;
  