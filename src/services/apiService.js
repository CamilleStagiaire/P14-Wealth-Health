const API_BASE_URL = 'http://localhost:5000/api/employees'

/* istanbul ignore next */
const fetchEmployees = () => {
  return fetch(API_BASE_URL)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok.');
      return response.json();
    });
};

/* istanbul ignore next */
const addEmployee = (employeeData) => {
  return fetch(API_BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(employeeData)
  })
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok.');
      return response.json();
    });
};

export const apiService = {
  fetchEmployees,
  addEmployee,
};
