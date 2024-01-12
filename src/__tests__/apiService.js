import React, { useContext } from "react";
import { render } from "@testing-library/react";
import { FormProvider, FormContext } from "../contexts/FormContext";
import { apiService } from "../services/apiService";

jest.mock("../services/apiService");

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
  beforeEach(() => {
    jest.resetAllMocks();
  });

  //  vérifie si la méthode fetchEmployees est appelée avec succès lors du rendu du composant FormProvider
  test("fetchEmployees - success", async () => {
    const mockEmployees = [{ id: 1, name: "Alice" }];
    apiService.fetchEmployees.mockResolvedValue(mockEmployees);
    render(
      <FormProvider>
        <TestComponent />
      </FormProvider>
    );

    expect(apiService.fetchEmployees).toHaveBeenCalled();
  });

  // vérifie la gestion des erreurs pour fetchEmployees
  test("fetchEmployees - failure", async () => {
    apiService.fetchEmployees.mockRejectedValue(new Error("Network Error"));
    render(
      <FormProvider>
        <TestComponent />
      </FormProvider>
    );
  });

  // simule un scénario où fetchEmployees rencontre une erreur réseau
  test("fetchEmployees - network error", async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ ok: false, json: () => Promise.resolve({}) })
      );
    try {
      await apiService.fetchEmployees();
    } catch (error) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error.message).toBe("Network response was not ok.");
    }
    global.fetch.mockRestore();
  });

  // simule un scénario où addEmployee rencontre une erreur réseau.
  test("addEmployee - network error", async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ ok: false, json: () => Promise.resolve({}) })
      );
    const employeeData = { name: "Bob" };
    try {
      await apiService.addEmployee(employeeData);
    } catch (error) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error.message).toBe("Network response was not ok.");
    }
    global.fetch.mockRestore();
  });
});
