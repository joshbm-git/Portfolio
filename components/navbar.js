export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <nav class="tabbar">
        <a href="#home">About</a><a href="#projects">Projects</a>

      </nav>
    `;
  }
}
