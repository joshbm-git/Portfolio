export default class ProjectsPage {
  constructor() {
    this.template();

  }



  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
       

    <section id="projects" class="page">

     <div class="card" style="width: 18rem; border:solid">
      <img src="../images/teamplayer.png" class="card-img-top">
        <div class="card-body">
         <p class="card-text">TeamPlayer</p>
        </div>
      </div>

      <div class="card" style="width: 18rem; border:solid">
      <img src="../images/teamplayer.png" class="card-img-top">
        <div class="card-body">
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      <div class="card" style="width: 18rem; border:solid">
      <img src="../images/teamplayer.png" class="card-img-top">
        <div class="card-body">
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      <div class="card" style="width: 18rem; border:solid">
      <img src="../images/teamplayer.png" class="card-img-top">
        <div class="card-body">
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
        </section>



      `;
  }


  // carousel
  // async initData() {
  //   let projects = await projectService.loadProjects();
  //   this.appendProjects(projects);
  // }

  // appendProjects(projects) {
  //   let template = "";
  //   for (let project of projects) {
  //     template += /*html*/ `


  //       `;
  //   }
  //   document.querySelector("#projects").innerHTML = template;
  // }
  //  <figure>
  //<img src="${project.img}">
  //<figcaption>${project.title}</figcaption>
  //</figure>
  // template() {
  //   document.querySelector("#app").innerHTML += /*html*/ `
  //       <section id="projects" class="page">
  //       <div id="carouselExampleIndicators" class="carousel slide vert" data-ride="carousel">

  //       <ol class="carousel-indicators">
  //         <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
  //         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  //         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  //         <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  //         </ol>

  //       <div class="carousel-inner" id="project">
  //       </div>

  //     </div>

  //       </section>
  //     `;
  // }

  // appendProjects(projects) {
  //   let template = "";
  //   for (let project of projects) {
  //     template += /*html*/ `

  //     <div class="carousel-item">
  //     <figure>
  //     <img src="${project.img}" class="d-block w-100">
  //         <figcaption>${project.title}</figcaption>
  //         </figure>
  //   </div>
  //       `;
  //   }
  //   document.querySelector("#project").innerHTML = template;
  //   document.querySelector(".carousel-item").classList.add("active");
  // }
}