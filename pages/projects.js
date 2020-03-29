export default class ProjectsPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
        <section id="projects" class="page">
        <div class="book grid-container">
        <a href="https://joshbm-git.github.io/BoardGameFinder/">
        <article class="shadow-lg">
          <figure class="textOver">
            <img src="images/boardgamefinder.png" alt="" />
              <figcaption class="shadow">Boardgame Finder</figcaption>
          </figure>
        </article>     
        </a>



        <a href="https://joshbm-git.github.io/AeggetOgSkaegget/">
        <article class="shadow-lg">
          <figure class="textOver">
            <img src="images/aeggetogskaegget.png" alt="" />
              <figcaption class="shadow">Ægget og Skægget</figcaption>
          </figure>
        </article>       
        </a>
        
        
        
        <a href="https://joshbm-git.github.io/TeamPlayer/">        
        <article class="shadow-lg">
          <figure class="textOver">
            <img src="images/teamplayer.png" alt="" />
              <figcaption class="shadow">TeamPlayer</figcaption>
          </figure>
        </article>
        </a>

        <a href="https://joshbm-git.github.io/WebDoc/">
        <article class="shadow-lg">
          <figure class="textOver">
            <img src="images/webdoc.png" alt="" />
              <figcaption class="shadow">Webdoc</figcaption>
          </figure>
        </article>
        </a>
        
        </div>
        </section>
      `;
  }
}
