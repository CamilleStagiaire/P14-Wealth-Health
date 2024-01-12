import React, { useContext } from "react";
import { render, act, screen } from "@testing-library/react";
import { FormProvider, FormContext } from "../contexts/FormContext";

const TestComponent = () => {
  const { formData, updateFieldData } = useContext(FormContext);
  return (
    <div>
      <div data-testid="firstName">{formData.firstName}</div>
      <button onClick={() => updateFieldData("firstName", "John")}>
        Update First Name
      </button>
    </div>
  );
};

describe("FormProvider", () => {
  
  // vérfie que le FormProvider initialise correctement les données de formulaire
  test("initializes formData with correct values", () => {
    render(
      <FormProvider>
        <TestComponent />
      </FormProvider>
    );
    expect(screen.getByTestId("firstName").textContent).toBe("");
  });

  // vérifie que FormContext met à jour les données du formulaire comme prévu
  test("updates formData correctly", () => {
    render(
      <FormProvider>
        <TestComponent />
      </FormProvider>
    );
    act(() => {
      screen.getByText("Update First Name").click();
    });
    expect(screen.getByTestId("firstName").textContent).toBe("John");
  });
});


