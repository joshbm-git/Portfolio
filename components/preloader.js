export default class Preloader {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
  
      <div class="loader-wrapper">
    <div class="loader"></div>
    
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
  </div>
        `;
  }
}

setTimeout(function () {
  $("body").addClass("loaded");
}, 1000);
