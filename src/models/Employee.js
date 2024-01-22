class Employee {
  /**
   * Crée une instance de Employee.
   * @param {Object} employeeData
   * @param {Object[]} states
   */
  constructor(employeeData, states) {
    this.data = employeeData;
    this.states = states;
    this.data = this.cleanData(employeeData);
  }

  /**
   * Formate les dates en format DD/MM/YYYY.
   * @param {string} dateStr
   * @returns {string}
   */
  formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formatDay = day < 10 ? `0${day}` : day;
    const formatMonth = month < 10 ? `0${month}` : month;
    const formattedDate = `${formatDay}/${formatMonth}/${year}`;
    return formattedDate;
  }

  /**
   * Récupère l'abréviation d'un état à partir de son nom.
   * @param {string} stateName
   * @returns {string}
   */
  getStateAbbreviation(stateName) {
    const state = this.states.find((d) => d.name === stateName);
    return state ? state.abbreviation : stateName;
  }

  /**
   * Supprime les virgules.
   * @param {Object} data
   * @returns {Object}
   */
  cleanData(data) {
    const cleanedData = {};
    Object.keys(data).forEach(key => {
      if (typeof data[key] === 'string') {
        cleanedData[key] = data[key].replace(/,/g, '');
      } else {
        cleanedData[key] = data[key];
      }
    });
    return cleanedData;
  }

  /**
   * Récupère les données formatées en fonction de la clé.
   * @param {string} key
   * @returns {string}
   */
  getFormattedData(key) {
    switch (key) {
      case "dateOfBirth":
      case "startDate":
        const formattedDate = this.formatDate(this.data[key]);
        return formattedDate;
      case "state":
        const stateAbbreviation = this.getStateAbbreviation(this.data[key]);
        return stateAbbreviation;
      default:
        return this.cleanData({[key]: this.data[key]})[key];
    }
  }
}

export default Employee;
