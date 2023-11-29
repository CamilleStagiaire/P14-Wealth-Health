import React, { useState } from 'react';
import "./style.css";
import data from "../../data/data.json";
import SelectField from "../../components/Form/SelectField";
import InputField from "../../components/Form/InputField";
import Modal from "../../components/Modal";

  function Home() {
    const [showModal, setShowModal] = useState(false);
  
    const saveEmployee = (event) => {
      event.preventDefault();
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };

  return (
    <main>
      <div className="container">
        <h1>Create Employee</h1>
        <form id="create-employee">
          <div className="form-group">
            <InputField id="first-name" label="First Name" />
            <InputField id="last-name" label="Last Name" />
          </div>

          <div className="form-group">
            <InputField id="date-of-birth" label="Date of Birth" type="date" />
            <InputField id="start-date" label="Start Date" type="date" />
          </div>

          <div className="form-group">
            <fieldset className="form-group-label address">
              <legend>Address</legend>
              <div className="address-fields">
                <InputField id="street" label="Street" />
                <InputField id="city" label="City" />
                <SelectField id="state" label="State" options={data.states} />
                <InputField id="zip-code" label="Zip Code" type="number" />
              </div>
            </fieldset>
            <SelectField
              id="department"
              label="Department"
              options={data.departments}
            />
          </div>
        </form>

        <button className="save" onClick={saveEmployee}>
        Save
      </button>
      {showModal && <Modal onClose={handleCloseModal} />}
      </div>
    </main>
  );
}

export default Home;
