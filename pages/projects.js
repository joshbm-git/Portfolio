export default class ProjectsPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
        <section id="projects" class="page" target="_blank">
        <div class="book grid-container">
        <a href="https://joshbm-git.github.io/BoardGameFinder/">
        <article>
          <figure class="textOver">
            <img src="images/boardgamefinder.png" alt="" />
              <figcaption class="shadow">Boardgame Finder</figcaption>
          </figure>
        </article>     
        </a>



        <a href="https://joshbm-git.github.io/AeggetOgSkaegget/" target="_blank">
        <article >
          <figure class="textOver">
            <img src="images/aeggetogskaegget.png" alt="" />
              <figcaption class="shadow">Ægget og Skægget</figcaption>
          </figure>
        </article>       
        </a>
        
        
        
        <a href="https://joshbm-git.github.io/TeamPlayer/" target="_blank">        
        <article>
          <figure class="textOver">
            <img src="images/teamplayer.png" alt="" />
              <figcaption class="shadow">TeamPlayer</figcaption>
          </figure>
        </article>
        </a>

        <a href="https://joshbm-git.github.io/WebDoc/" target="_blank">
        <article>
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
