import React, { useContext, useState } from "react";
import { FormContext } from "../../contexts/FormContext";
import "./style.css";
import SelectField from "../../components/Form/SelectField";
import InputField from "../../components/Form/InputField";
import Modal from "../../components/Modal";

function Home() {
  const { saveEmployee } = useContext(FormContext);
  
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (saveEmployee()) {
      setShowModal(true);
    }
  };

  return (
    <main>
      <div className="container">
        <h1>Create Employee</h1>
        <form id="create-employee">
          <div className="form-group">
            <InputField id="firstName" label="First Name" />
            <InputField id="lastName" label="Last Name" />
          </div>

          <div className="form-group">
            <InputField id="dateOfBirth" label="Date of Birth" type="date" />
            <InputField id="startDate" label="Start Date" type="date" />
          </div>

          <div className="form-group">
            <fieldset className="form-group-label address">
              <legend>Address</legend>
              <div className="address-fields">
                <InputField id="street" label="Street" />
                <InputField id="city" label="City" />
                <SelectField id="state" label="State" />
                <InputField id="zipCode" label="Zip Code" type="number" />
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
