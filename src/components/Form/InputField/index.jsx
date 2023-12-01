function InputField({ id, label, type = "text", value, onChange, error }) {

  const showError = error && !value.trim();

  return (
    <div className={`form-group-label ${showError ? 'error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={error || ''}
      />
    </div>
  );
}

export default InputField;
