export default class TopBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <nav class="topbar shadow d-flex justify-content-end">

    </nav>
      `;
  }
}
