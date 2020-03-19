class ProjectService {
  constructor() {}

  async loadProjects() {
    try {
      let response = await fetch("../json/projects.json", {
        mode: "no-cors"
      });
      let jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.log("Error getting persons:", error);
    }
  }
}

const projectService = new ProjectService();
export default projectService;
