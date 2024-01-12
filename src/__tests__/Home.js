import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../pages/Home";
import { FormProvider } from "../contexts/FormContext";
import { BrowserRouter } from "react-router-dom";

/* eslint-disable testing-library/no-render-in-setup */
describe("Home Component", () => {
  let firstNameInput,
    lastNameInput,
    dateOfBirthInput,
    startDateInput,
    streetInput,
    cityInput,
    stateSelect,
    zipCodeInput,
    departmentSelect,
    submitButton;

  beforeEach(() => {
    render(
      <BrowserRouter>
        <FormProvider>
          <Home />
        </FormProvider>
      </BrowserRouter>
    );

    firstNameInput = screen.getByLabelText(/First Name/i);
    lastNameInput = screen.getByLabelText(/Last Name/i);
    dateOfBirthInput = screen.getByLabelText(/Date of Birth/i);
    startDateInput = screen.getByLabelText(/Start Date/i);
    streetInput = screen.getByLabelText(/Street/i);
    cityInput = screen.getByLabelText(/City/i);
    stateSelect = screen.getByLabelText(/State/i);
    zipCodeInput = screen.getByLabelText(/Zip Code/i);
    departmentSelect = screen.getByLabelText(/Department/i);
    submitButton = screen.getByRole("button", { name: /save/i });
  });

  // verifie que le composant "Home" s'affiche correctement
  test("renders Home component", () => {
    expect(screen.getByText("Create Employee")).toBeInTheDocument();
  });

  // verifie si le formulaire de la page "Home" peut être soumis avec des entrées valides
  test("submits form data with valid inputs", () => {
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(dateOfBirthInput, { target: { value: "1990-01-01" } });
    fireEvent.change(startDateInput, { target: { value: "2020-01-01" } });
    fireEvent.change(streetInput, { target: { value: "123 Main St" } });
    fireEvent.change(cityInput, { target: { value: "Anytown" } });
    fireEvent.change(zipCodeInput, { target: { value: "12345" } });
    fireEvent.change(stateSelect, { target: { value: "California" } });
    fireEvent.change(departmentSelect, { target: { value: "Engineering" } });

    fireEvent.click(submitButton);

    expect(screen.getByText("Employee Created!")).toBeInTheDocument();
    
    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);
    expect(firstNameInput.value).toBe("");
  });

  // vérifie si le formulaire affiche des messages d'erreur de validation lorsque les champs sont laissés vides
  test('shows validation errors when input fields are empty', () => {
    fireEvent.click(submitButton);

    expect(firstNameInput).toHaveAttribute('placeholder', 'First Name is required');
    expect(lastNameInput).toHaveAttribute('placeholder', 'Last Name is required');
    expect(streetInput).toHaveAttribute('placeholder', 'Street is required');
    expect(cityInput).toHaveAttribute('placeholder', 'City is required');
    expect(zipCodeInput).toHaveAttribute('placeholder', 'Zip Code is required');
  });
  
  
});
