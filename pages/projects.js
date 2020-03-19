export default class ProjectsPage {
  constructor() {
    this.template();
    this.initData();
  }

  async initData() {
    let persons = await personService.loadPersons();
    this.appendPersons(persons);
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
        <section id="projects" class="page">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
        </section>
      `;
  }


  appendPersons(persons) {
    let template = "";
    for (let person of persons) {
      template += /*html*/ `
        <article>
          <img src="${person.picture.large}">
          <h4>${person.name.first} ${person.name.last}</h4>
          <p><a href="mailto:${person.email}">${person.email}</a></p>
        </article>
        `;
    }
    document.querySelector("#grid-persons").innerHTML = template;
  }
}