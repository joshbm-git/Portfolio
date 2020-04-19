export default class ProjectsPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
        <section id="projects" class="page" target="_blank">

        <h2 class="year">2020</h2>

        <div class="book grid-container">

  
        
        <a href="https://joshbm-git.github.io/BoardGameFinder/">
        <article>
          <figure class="textOver">
            <img src="images/boardgamefinder.png" alt="" />

          </figure>

          <figcaption>
          <h2>BoardGame Finder</h2>
          <p>This project uses API to fetch data.</p>
          <p>Functions: Search, Add to favorites in Firebase, Filter, and Specific page according to ID</p>

          </figcaption>
        </article>     
        </a>



        <a href="https://joshbm-git.github.io/AeggetOgSkaegget/" target="_blank">
        <article >
          <figure class="textOver">
            <img src="images/aeggetogskaegget.png" alt="" />
          </figure>

          <figcaption>
          <h2>Ægget og Skægget</h2>
          <p>This project is a design for a webshop.</p>
          <p>Functions: Burger Menu</p>

          </figcaption>
        </article>       
        </a>
        
        </div>
  

        <h2 class="year">2019</h2>

        <div class="book grid-container">

        <a href="https://joshbm-git.github.io/TeamPlayer/" target="_blank">        
        <article>
          <figure class="textOver">
            <img src="images/teamplayer.png" alt="" />
       
          </figure>

          <figcaption>
          <h2>TeamPlayer</h2>
          <p>This project is a design for a football manager app.</p>
          <p>Functions: Burger Menu</p>

          </figcaption>
        </article>
        </a>

        <a href="https://joshbm-git.github.io/WebDoc/" target="_blank">
        <article>
          <figure class="textOver">
            <img src="images/webdoc.png" alt="" />
            
          </figure>

          <figcaption>
          <h2>WebDoc</h2>
          <p>This project is a webdocumentary of an efterskole.</p>
          <p>Functions: Parallax, autoplay on scroll</p>

          </figcaption>
        </article>
        </a>
        
        </div>
        </section>


      `;
  }
}
