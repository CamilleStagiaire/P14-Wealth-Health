import Employee from "../models/Employee";

describe("Employee", () => {
  let employeeInstance;
  let mockEmployeeData;
  let mockStates;

  beforeEach(() => {
    mockEmployeeData = {};
    mockStates = [];
    employeeInstance = new Employee(mockEmployeeData, mockStates);
  });

  // vérifie que formDate formate correctement les dates
  test("should correctly format a date string", () => {
    const rawDate = "1990-04-25";
    const expectedFormattedDate = "25/04/1990";
    expect(employeeInstance.formatDate(rawDate)).toBe(expectedFormattedDate);
  });

  // vérifie que getStateAbbreviation renvoit l'abréviation correcte de l'État
  test("should return the correct state abbreviation", () => {
    const stateName = "California";
    const stateAbbreviation = "CA";
    mockStates = [{ name: "California", abbreviation: "CA" }];
    employeeInstance = new Employee(mockEmployeeData, mockStates);
    expect(employeeInstance.getStateAbbreviation(stateName)).toBe(
      stateAbbreviation
    );
  });

  // vérifie que cleanData supprimer les virgules
  test("should remove commas from string fields", () => {
    const dataWithCommas = { name: "John, Doe", salary: "1,000,000" };
    employeeInstance = new Employee(dataWithCommas, mockStates);
    const cleanedData = employeeInstance.cleanData(dataWithCommas);
    expect(cleanedData).toEqual({ name: "John Doe", salary: "1000000" });
  });

  //  vérifie que cleanData ne modifie pas les champs autres que les chaînes de caractères
  test("should not alter non-string fields", () => {
    const data = { age: 30, isActive: true };
    employeeInstance = new Employee(data, mockStates);
    const cleanedData = employeeInstance.cleanData(data);
    expect(cleanedData).toEqual(data);
  });

  // vérifie que getFormattedData renvoit une date formatée pour dateOfBirth
  test("should return formatted date for dateOfBirth", () => {
    const dateOfBirth = "1990-04-25";
    employeeInstance = new Employee({ dateOfBirth }, mockStates);
    expect(employeeInstance.getFormattedData("dateOfBirth")).toBe("25/04/1990");
  });

  // vérifie que getFormattedData renvoit l'abréviation de l'État
  test("should return state abbreviation for state", () => {
    const state = "California";
    mockStates = [{ name: "California", abbreviation: "CA" }];
    employeeInstance = new Employee({ state }, mockStates);
    expect(employeeInstance.getFormattedData("state")).toBe("CA");
  });

  // vérifie que getFormattedData renvoit la valeur originale pour les autres clefs
  test("should return original value for non-special keys", () => {
    const name = "John Doe";
    employeeInstance = new Employee({ name }, mockStates);
    expect(employeeInstance.getFormattedData("name")).toBe(name);
  });
});
