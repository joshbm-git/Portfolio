export default class ProjectsPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
        <section id="projects" class="page">

    
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
        <h5>Third Semester</h5>
        <p class='note'>Note: This was designed as a mobile app.</p>"
        data-img="images/boardgamefinder.png"
        data-link="https://joshbm.dk/projects/boardgamefinder/">
        <img src="images/boardgamefinder.png" alt="BoardGameFinder thumbnail" />
        </figure>
        
        <figure class="outer-figure" data-toggle="modal" data-target="#exampleModal" 
        data-title="Aegget & Skaegget" 
        data-caption="
        <p>Do you want to eat good food that will make you full without having to make it?</p>"
        data-img="images/aeggetogskaegget.png"
        data-caption-extra="
        <h2>Aegget & Skaegget</h2>
        <p>Do you want to eat good food that will make you full without having to make it?</p>
        <p>Order at AeggetOgSkaegget. There a lot of food to choose from.</p>
        <p>The best part is, everything is 55,-</p>
        <ul>
        <h3>Tools:</h3>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JS</li>
        </ul>
        <h5>Second Semester</h5>
        <p class='note'>Note: This was designed as a mobile app.</p"
        data-img="images/aeggetogskaegget.png"
        data-link="https://joshbm.dk/projects/aeggetogskaegget/">
        <img src="images/aeggetogskaegget.png" alt="" />
        </figure>

        <figure class="outer-figure"  data-toggle="modal" data-target="#exampleModal" 
        data-title="Ceres TeamPlayer" 
        data-caption="
        <p>Are you looking for an interesting fantasy football manager?</p>"
        data-caption-extra="
        <h2>TeamPlayer</h2>
        <p>Are you looking for an interesting fantasy football manager?</p>
        <p>TeamPlayer is a fantasy football manager app. Whenever you go to a football game, you can make a team consisting of the players from the 2 teams that are playing.</p>
        <p>Every player gets points depening on their performance during that game. Your objective is to get the most points using who you think will make the most impact from both teams.</p>
        <ul>
        <h3>Tools:</h3>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JS</li>
        </ul>
        <h5>Second Semester</h5>
        <p class='note'>Note: This was designed as a mobile app.</p>"
        data-img="images/teamplayer.png"
        data-link="https://joshbm.dk/projects/teamplayer/">
        <img src="images/teamplayer.png" alt="" />
        </figure>


        <figure class="outer-figure"  data-toggle="modal" data-target="#exampleModal" 
        data-title="GastroFun" 
        data-caption="
        <p>Are you looking for an interesting fantasy football manager?</p>"
        data-caption-extra="
        <h2>TeamPlayer</h2>
        <p>Are you looking for an interesting fantasy football manager?</p>
        <p>TeamPlayer is a fantasy football manager app. Whenever you go to a football game, you can make a team consisting of the players from the 2 teams that are playing.</p>
        <p>Every player gets points depening on their performance during that game. Your objective is to get the most points using who you think will make the most impact from both teams.</p>
        <ul>
        <h3>Tools:</h3>
        <li>Wordpress</li>
        <li>Bootstrap</li>
        </ul>
        <h5>Second Semester</h5>
        <p class='note'>Note: This was designed as a mobile app.</p>"
        data-img="images/teamplayer.png"
        data-link="https://joshbm.dk/projects/BoardGameFinder/">
        <img src="images/teamplayer.png" alt="" />
        </figure>

        <figure class="outer-figure"  data-toggle="modal" data-target="#exampleModal" 
        data-title="Eriksminde Efterskole" 
        data-caption="
        <p>Are you having a tough time choosing an efterskole?</p>"
        data-caption-extra="
        <h2>Eriksminde Efterskole</h2>
        <p>Eriksminde Efterskole is a place where we, with an artistic, democratic, professional and philosophical basis, make a school where people meet equally, safely and confidently.</p>
        <p>We place the freedom, the appetite and the ability to be amazed and engrossed in the subjects, of life and of each other in the highest priority. We do our utmost to do everything we do, because it deserves life. And we do it together with a glance for the individual.</p>
        <ul>
        <h3>Tools:</h3>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JS</li>
        </ul>
        <h5>Second Semester</h5>"
        data-img="images/webdoc.png"
        data-link="https://joshbm.dk/projects/webdoc/">
        <img src="images/webdoc.png" alt="" />
        </figure>
  

        <figure class="outer-figure"  data-toggle="modal" data-target="#exampleModal" 
        data-title="Thise Light Greek Yoghurt" 
        data-caption="<p>Are you looking to lose weight without compromising the taste?</p>"
        data-caption-extra="
        <h2>Thise Light Greek Yoghurt</h2>
        <p>Are you looking to lose weight without compromising the taste?</p>
        <p>Thise is releasing a new greek yoghurt that has less fat, meaning less calories. It comes in different flavors.</p>
        <p>You can also find recipes of your favorite food using this new greek yoghurt.</p>
        <ul>
        <h3>Tools:</h3>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JS</li>
        </ul>
        <h5>First Semester</h5>"
        data-img="images/thise.png"
        data-link="https://joshbm.dk/projects/thise/">
        <img src="images/thise.png" alt="" />
        </figure>

        <figure class="outer-figure"  data-toggle="modal" data-target="#exampleModal" 
        data-title="BJ Trading" 
        data-caption="
        <p>Are you itching to buy the newest electronics but don't have the dough?</p>"
        data-caption-extra="
        <h2>BJ Trading</h2>
        <p>Are you itching to buy the newest electronics but don't have the dough?</p>
        <p>BJ Trading has all the newest gadgets on the market, for the cheapest prices.</p>
        <p>It's almost too good to be true!</p>
        <ul>
        <h3>Tools:</h3>
        <li>HTML5</li>
        <li>CSS3</li>
        </ul>
        <h5>First Semester</h5>
        <p class='note'>Note: This was only a product page.</p>"
        data-img="images/bjtrading.png"
        data-link="https://joshbm.dk/projects/bjtrading/">
        <img src="images/bjtrading.png" alt="" />
        </figure>

        
        <figure class="outer-figure"  data-toggle="modal" data-target="#exampleModal" 
        data-title="Travel Magazine" 
        data-caption="
        <p>Do you want to travel but don't know where to go and what to do?</p>"

        data-caption-extra="
        <p>Do you want to travel but don't know where to go and what to do?</p>
        <p>This travel magazine provides guides to the most popular places to go in Asia. There are helpful tips such as how to plan your trip and what to do when arriving.</p>
        <h5>First Semester</h5>"
        data-img="images/travelmagazine.png"
        data-link="https://joshbm.dk/projects/travelmagazine/">
        <img src="images/travelmagazine.png" alt="" />
        </figure>

        <figure class="outer-figure"  data-toggle="modal" data-target="#exampleModal" 
        data-title="Havnebadet" 
        data-caption="<p>Are you looking for a perfect winter bathing spot?</p>"
        data-caption-extra="
        <h2>Havnebadet</h2>
        <p>Are you looking for a perfect winter bathing spot?</p>
        <p>Pack your swimming clothes, and jump in the water in 'Havnebadet' or The Harbour Bath. In the winter you can enjoy water, and get heated up in the saunas afterwards every saturday and sunday from 10-12.
        <ul>
        <h3>Tools:</h3>
        <li>HTML5</li>
        <li>CSS3</li>
        </ul>
        <h5>First Semester</h5>"
        data-img="images/havnebadet.png"
        data-link="https://joshbm.dk/projects/havnebadet/">
        <img src="images/havnebadet.png" alt="" />
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
