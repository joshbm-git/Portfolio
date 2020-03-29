export default class TabBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <nav class="tabbar d-flex align-items-center">
      <div id="socials">
      <a href="https://github.com/joshbm-git"
        ><i class="fab fa-github"></i
      ></a>
      <a href="https://www.linkedin.com/in/joshua-mercado-854767179/"
        ><i class="fab fa-linkedin-in"></i
      ></a>
      <a href="mailto:joshuabacuriomercado@gmail.com"
        ><i class="fas fa-envelope"></i
      ></a>
      </div>
    </nav>
    `;
  }
}
