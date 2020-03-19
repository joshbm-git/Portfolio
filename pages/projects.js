import projectService from "../services/projects.js";
export default class ProjectsPage {
  constructor() {
    this.template();
    this.initData();
  }

  async initData() {
    let projects = await projectService.loadProjects();
    this.appendProjects(projects);
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
        <section id="projects" class="page">
        <div id="carouselExampleIndicators" class="carousel slide vert" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner" id="project">
        </div>
        
      </div>
        </section>
      `;
  }

  appendProjects(projects) {
    let template = "";
    for (let project of projects) {
      template += /*html*/ `

      <div class="carousel-item">
      <figure>
      <img src="${project.img}" class="d-block w-100">
          <figcaption>${project.title}</figcaption>
          </figure>
    </div>
        `;
    }
    document.querySelector("#project").innerHTML = template;
    document.querySelector(".carousel-item").classList.add("active");
  }
}
