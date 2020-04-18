export default class TabBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <nav id="socials" class="tabbar d-flex justify-content-between align-items-center shadow-lg">
      <a href="#home" class="d-flex align-items-center justify-content-center">home</a>
      <a href="#projects" class="d-flex align-items-center justify-content-center">projects</a>
      <a href="#about" class="d-flex align-items-center justify-content-center">about</a>
      <a href="#contact" class="d-flex align-items-center justify-content-center">contact</a>
    </nav>
    `;
  }
}
