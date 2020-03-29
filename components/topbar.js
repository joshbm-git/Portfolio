export default class TopBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <nav class="topbar shadow d-flex justify-content-end">

      <a href="#projects" class="d-flex align-items-center justify-content-center">projects</a>
      <a href="#home" class="d-flex align-items-center justify-content-center">home</a>
  
    </nav>
      `;
  }
}
