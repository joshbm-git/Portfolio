export default class HomePage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="home" class="page">
      <div class="article-wrapper d-flex">       
      <article>
       <h1>Joshua Bacurio Mercado</h1>
       <p>Multimedia design student</p>
       <button type="button" class=" btn-right"><a href="">Check out my projects!</a></button>
       </article>
       </div>

      </section>
    `;
  }
}
