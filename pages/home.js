export default class HomePage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="home" class="page">
        <header id="banner">
        <h2>Hi, I'm Joshua </h2>
        <p>Front-end developer</p>
        
        </header>

      </section>
    `;
  }
}
