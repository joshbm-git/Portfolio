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
          <figure>
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

/* #projects .year {
  text-align: center;
  margin-bottom: 1em;
}

.book {
  text-align: center;
}

.book a {
  display: block;
}

.book article {
  width: 100%;
  margin-bottom: 7.5em;
  border-bottom: solid 1px black;
  padding-bottom: 2em;
}

.textOver {
  position: relative;
  margin: 0 auto;
  width: 90%;
  border: solid var(--orange) 10px;
}

.textOver img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: 50% 0;
  filter: brightness(75%);
}

.book article figcaption {
  text-align: center;
  font-size: 1em;
  width: 90%;
  margin: 0 auto;
  color: var(--text-color-dark);
}

.book article figcaption h2 {
  padding-top: 1em;
  color: var(--text-color-dark);
}
 

@media (min-width: 768px) {
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3em;
  }

  .book article {
    min-height: 700px;
    margin-bottom: 5em;
  }

  .book figure {
    width: 100%;
  }

  .book figcaption {
    height: 100%;
  }

  .textOver img {
    width: 100%;
    height: 450px;
  }
}

@media (min-width: 1024px) {
  .book a:hover {
    text-decoration: none;
  }

  .book a:hover img {
    filter: brightness(100%);
  }

  .book article {
    width: 100%;
    min-height: 800px;
  }

  .textOver img {
    height: 500px;
  }
}

@media (min-width: 1440px) {
  .grid-container {
    grid-gap: 5em;
  }

  .book article {
    min-height: 1100px;
    margin: 0 auto;
  }

  .textOver img {
    height: 900px;
  }
} */
