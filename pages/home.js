export default class HomePage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="home" class="page">
       <article>
       <h1>Joshua Bacurio Mercado</h1>
       <p>Multimedia design student</p>
       <button>Check out my projects!</button>
       </article>
      </section>
    `;
  }
}
