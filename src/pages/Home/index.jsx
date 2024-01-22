import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../contexts/FormContext";
import SelectField from "../../components/Form/SelectField";
import InputField from "../../components/Form/InputField";
import Modal from "../../components/Modal";

/**
 * Composant page d'accueil
 * @returns {React.Element}
 */
function Home() {
  const { formData, updateFieldData, addEmployee, resetFormData, dataMapping } =
    useContext(FormContext);
  const [validationErrors, setValidationErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  /**
   * Valide le formulaire et définit les erreurs de validation.
   * @returns {boolean}
   */
  const validateForm = () => {
    const errors = {};
    for (const key in formData) {
      if (!formData[key].trim()) {
        const fieldName = dataMapping[key] || key;
        errors[key] = `${fieldName} is required`;
      }
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  /**
   * Gère la soumission du formulaire.
   * @param {Event} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      addEmployee(formData);
      setShowModal(true);
    }
  };

  //Gère la fermeture de la modale et réinitialise le formulaire
  const handleCloseModal = () => {
    setShowModal(false);
    resetFormData();
    navigate("/employees");
  };

  return (
    <main>
      <div className="container">
        <h1>Create Employee</h1>
        <form className="container-layout" id="create-employee">
          <div className="form-group">
            <InputField
              id="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={(e) => updateFieldData("firstName", e.target.value)}
              error={validationErrors.firstName}
            />
            <InputField
              id="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={(e) => updateFieldData("lastName", e.target.value)}
              error={validationErrors.lastName}
            />
          </div>

          <div className="form-group">
            <InputField
              id="dateOfBirth"
              label="Date of Birth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => updateFieldData("dateOfBirth", e.target.value)}
              error={validationErrors.dateOfBirth}
            />
            <InputField
              id="startDate"
              label="Start Date"
              type="date"
              value={formData.startDate}
              onChange={(e) => updateFieldData("startDate", e.target.value)}
              error={validationErrors.startDate}
            />
          </div>

          <div className="form-group">
            <fieldset className="form-group-label address">
              <legend>Address</legend>
              <div className="address-fields">
                <InputField
                  id="street"
                  label="Street"
                  value={formData.street}
                  onChange={(e) => updateFieldData("street", e.target.value)}
                  error={validationErrors.street}
                />
                <InputField
                  id="city"
                  label="City"
                  value={formData.city}
                  onChange={(e) => updateFieldData("city", e.target.value)}
                  error={validationErrors.city}
                />
                <SelectField id="state" label="State" />
                <InputField
                  id="zipCode"
                  label="Zip Code"
                  type="number"
                  value={formData.zipCode}
                  onChange={(e) => updateFieldData("zipCode", e.target.value)}
                  error={validationErrors.zipCode}
                />
              </div>
            </fieldset>
            <SelectField id="department" label="Department" />
          </div>
        </form>

        <button className="save" onClick={handleSubmit}>
          Save
        </button>
        {showModal && <Modal onClose={handleCloseModal} />}
      </div>
    </main>
  );
}

export default Home;
