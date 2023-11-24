function SelectField({ id, label, options }) {
  return (
    <div className="form-group-label">
      <label htmlFor={id}>{label}</label>
      <select id={id}>
        {options.map(option => (
          <option key={option.abbreviation} value={option.name}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
