import React, { useContext, useState } from "react";
import { FormContext } from "../../contexts/FormContext";
import SelectField from "../../components/Form/SelectField";
import InputField from "../../components/Form/InputField";
import Modal from "../../components/Modal";

function Home() {
  const { formData, updateFieldData } = useContext(FormContext);
  const [validationErrors, setValidationErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validateForm = () => {
    const errors = {};
    for (const key in formData) {
      if (!formData[key].trim()) {
        errors[key] = `${key.charAt(0).toUpperCase()}${key.slice(
          1
        )} is required`;
      }
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

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
