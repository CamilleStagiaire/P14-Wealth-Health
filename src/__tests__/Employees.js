import React from "react";
import { render, screen } from "@testing-library/react";
import Employees from "../pages/Employees";
import { FormContext } from "../contexts/FormContext";
import Employee from "../models/Employee";
import { BrowserRouter } from "react-router-dom";

jest.mock("../models/Employee");

describe("Employees page", () => {
  
  // vérifie que les données des employés sont affichées et formatées correctement
  test("should display formatted employee data", () => {
    const fakeEmployees = [
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        startDate: "2021-08-10",
        dateOfBirth: "1990-04-25",
        state: "CA",
      },
    ];

    const fakeStates = [{ name: "California", abbreviation: "CA" }];

    const fakeDataMapping = {
      firstName: "First Name",
      lastName: "Last Name",
      startDate: "Start Date",
      department: "Department",
      dateOfBirth: "Date of Birth",
      street: "Street",
      city: "City",
      state: "State",
      zipCode: "Zip Code",
    };

    Employee.mockImplementation(() => {
      return {
        getFormattedData: jest.fn((key) => {
          switch (key) {
            case "startDate":
            case "dateOfBirth":
              return "01/01/1990";
            case "state":
              return "CA";
            default:
              return "Unknown";
          }
        }),
      };
    });

    render(
      <BrowserRouter>
        <FormContext.Provider
          value={{
            employees: fakeEmployees,
            states: fakeStates,
            dataMapping: fakeDataMapping,
          }}
        >
          <Employees />
        </FormContext.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText("CA")).toBeInTheDocument();
  });
});
