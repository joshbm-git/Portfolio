class PersonService {
  constructor() {}

  async loadPersons() {
    try {
      let response = await fetch("https://randomuser.me/api/?results=9");
      let jsonData = await response.json();

      return jsonData.results;
    } catch (error) {
      console.log("Error getting persons:", error);
    }
  }
}

const personService = new PersonService();
export default personService;
