export default class TopBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
    <div class="topbar-wrapper shadow">
      <nav class="topbar">
        <div class="logo">J</div>
      </nav>
    </div>
      `;
  }
}
