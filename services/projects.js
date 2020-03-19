class PersonService {
    constructor() {}

    async loadPersons() {
        try {
            let response = await fetch('../json/projects.json', {
                mode: 'no-cors'
            });
            let jsonData = await response.json();
            loaderService.show(false);
            return jsonData.results;
        } catch (error) {
            console.log('Error getting persons:', error);
            loaderService.show(false);
        }
    }
}

const personService = new PersonService();
export default personService;