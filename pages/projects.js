export default class ProjectsPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
        <section id="projects" class="page">

        <h2 class="year">2020</h2>

        <div class="book grid-container">

        <figure class="outer-figure"  data-toggle="modal" data-target="#exampleModal" 
        data-title="BoardgameFinder" 
        data-caption="<p>Ever get stuck trying to figure out what boardgame you want to play?<p> <p>Functions: Search, Add to favorites in Firebase, Filter, and Specific page according to ID</p>"
        data-caption-extra="
        <h2>Board Game Finder</h2>
        <p>Ever get stuck trying to figure out what boardgame you want to play? Let me help!</p>
        <p>You can search boardgames from the most popular. You can filter out boardgames after different specifications. You can go in to specific boardgames and read what they are about.</p>
        <p>And lastly, you can add boardgames to your favorites.</p>
        <ul>
        <h3>Tools:</h3>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>SPA</li>
        <li>API</li>
        <li>ES6</li>
        <li>Firebase</li>
        </ul>
        <p class='note'>Note: This was designed as a mobile app.</p>"
        data-img="images/boardgamefinder.png"
        data-link="https://joshbm.dk/projects/BoardGameFinder/">
        <img src="images/boardgamefinder.png" alt="" />
        </figure>
        
        <figure class="outer-figure" data-toggle="modal" data-target="#exampleModal" 
        data-title="AeggetOgSkaegget" 
        data-caption="
        <h2>AeggetOgSkaegget</h2>
        <p>Do you want to eat good food that will make you full without having to make it?</p>
        <p>Order at AeggetOgSkaegget. There a lot of food to choose from.</p>
        <p>The best part is, everything is 55,-</p>
        <ul>
        <h3>Tools:</h3>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>SPA</li>
        <li>API</li>
        <li>ES6</li>
        <li>Firebase</li>
        </ul>
        <p class='note'>Note: This was designed as a mobile app.</p"
        data-img="images/aeggetogskaegget.png"
        data-caption-extra="
        <h2>AeggetOgSkaegget</h2>
        <p>Do you want to eat good food that will make you full without having to make it?</p>
        <p>Order at AeggetOgSkaegget. There a lot of food to choose from.</p>
        <p>The best part is, everything is 55,-</p>
        <ul>
        <h3>Tools:</h3>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>SPA</li>
        <li>API</li>
        <li>ES6</li>
        <li>Firebase</li>
        </ul>
        <p class='note'>Note: This was designed as a mobile app.</p"
        data-img="images/aeggetogskaegget.png">
        <img src="images/aeggetogskaegget.png" alt="" />
        </figure>

        <figure class="outer-figure"  data-toggle="modal" data-target="#exampleModal" 
        data-title="TeamPlayer" 
        data-caption="
        <p>This project is a design for a football manager.</p>
        <p>Functions: Burger Menu</p>"
        data-img="images/thise.png">
        <img src="images/thise.png" alt="" />
        </figure>


        <figure class="outer-figure"  data-toggle="modal" data-target="#exampleModal" 
        data-title="Thise" 
        data-caption="
        <p>This project is a design for a product.</p>
        <p>Functions: Burger Menu</p>"
        data-img="images/thise.png">
        <img src="images/thise.png" alt="" />
        </figure>

        <figure class="outer-figure"  data-toggle="modal" data-target="#exampleModal" 
        data-title="BJ Trading" 
        data-caption="
        <p>This project is a design for a webshop, with a product page as the focus.</p>
        <p>Functions: Burger Menu</p>"
        data-img="images/thise.png" />'>
        <img src="images/thise.png" alt="" />
        </figure>

        <figure class="outer-figure"  data-toggle="modal" data-target="#exampleModal" 
        data-title="Havnebadet" 
        data-caption="
        <p>This project is a design for an info page for a location.</p>
        <p>Functions: Burger Menu</p>"
        data-img="images/thise.png">
        <img src="images/thise.png" alt="" />
        </figure>

        <figure class="outer-figure"  data-toggle="modal" data-target="#exampleModal" 
        data-title="Online Magazine" 
        data-caption="
        <p>This project is a design for an online magazine/blog.</p>
        <p>Functions: Burger Menu</p>"
        data-img="images/thise.png">
        <img src="images/thise.png" alt="" />
        </figure>
        
        
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
              <a href="" target="_blank">
                <h5 class="modal-title" id="exampleModalLabel">Title</h5>
                </a>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <a href="" target="_blank">
              <div class="modal-body">
                <article>
                <figure class="inner-figure"><img src=""></figure>
                <figcaption class="caption-short"></figcaption>
                <figcaption class="caption-extra">
                <div class="caption-extra-inner"></div>
                <div class="btn-wrapper">
                <button type="button" class="btn btn-primary btn-inner">Check it out!</button>
                </div>
                </figcaption>
                </article>
              </div>
              </a>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Check it out!</button>
              </div>
            </div>
          </div>
        </div>
  </section>

 
      `;
  }
}

$(document).ready(function () {
  $("#exampleModal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var title = button.data("title"); // Extract info from data-* attributes
    var caption = button.data("caption"); // Extract info from data-* attributes
    var caption_extra = button.data("caption-extra"); // Extract info from data-* attributes
    var img = button.data("img"); // Extract info from data-* attributes
    var link = button.data("link"); // Extract info from data-* attributes

    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find(".modal-title").text(title);
    modal.find(".modal-header a").attr("href", link);
    modal.find(".modal-content a").attr("href", link);
    modal.find(".modal-body article figure img").attr("src", img);
    modal.find(".modal-body article figcaption.caption-short").html(caption);
    modal
      .find(
        ".modal-body article figcaption.caption-extra div.caption-extra-inner"
      )
      .html(caption_extra);
  });
});
