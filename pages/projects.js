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
        data-caption="<p>This project uses API to fetch data.</p> <p>Functions: Search, Add to favorites in Firebase, Filter, and Specific page according to ID</p>"
        data-img="<img src='images/boardgamefinder.png'/>">
        <img src="images/boardgamefinder.png" alt="" />
        </figure>
        
        <figure class="outer-figure" data-toggle="modal" data-target="#exampleModal" 
        data-title="AeggetOgSkaegget" 
        data-caption="
        <p>This project is a design for a webshop.</p>
        <p>Functions: Burger Menu</p>"
        data-img='<img src="images/aeggetogskaegget.png" alt="" />'>
        <img src="images/aeggetogskaegget.png" alt="" />
        </figure>


        <figure class="outer-figure"  data-toggle="modal" data-target="#exampleModal" 
        data-title="Thise" 
        data-caption="
        <p>This project is a design for a product.</p>
        <p>Functions: Burger Menu</p>"
        data-img='<img src="images/thise.png" alt="" />'>
        <img src="images/thise.png" alt="" />
        </figure>
        
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <article>
                <figure class="inner-figure"></figure>
                <figcaption></figcaption>
                </article>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn" data-dismiss="modal">Close</button>
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
    var img = button.data("img"); // Extract info from data-* attributes

    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find(".modal-title").text(title);
    modal.find(".modal-body article figure").html(img);
    modal.find(".modal-body article figcaption").html(caption);
  });
});
