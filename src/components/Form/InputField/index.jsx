/**
 * Composant InputField pour les champs de saisie
 * @param {string} id 
 * @param {string} label
 * @param {string} [type="text"] - Le type du champ.
 * @param {string} value
 * @param {Function} onChange
 * @param {string} [error]
 */
function InputField({ id, label, type = "text", value, onChange, error }) {
  const showError = error && !value.trim();

  return (
    <div className={`form-group-label ${showError ? "error" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input
        className="inputSelect"
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={error || ""}
      />
    </div>
  );
}

export default InputField;
