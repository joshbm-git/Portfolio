export default class AboutPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
        <section id="home" class="page shadow">
          <figure id="banner" class="shadow-sm">
            <img src="images/banner.png" alt="" />
            <figcaption>
              <h1 class="display-4">Hi,</h1>
              <h1 class="display-4">I'm Joshua</h1>
              <p>I'm a front-end developer</p>
            </figcaption>
          </figure>
          <div id="exp" class="grid-container">
            <div id="expTop" class="shadow expInner">
              <i class="fas fa-user shadow-lg"></i>
              <div>
                <h2>About me</h2>
                <p>I love coding and creating websites. I have a firm knowledge of  HTML, CSS, and JS. I am a quick learner and love learning new things when it comes to coding. I am independent but also team oriented and easily get along with others in a team setting.</p>
               
              </div>
            </div>
            <div id="expLeft" class="shadow expInner">
              <i class="fas fa-cog shadow-lg"></i>
              <div>
                <h2>Technologies that I know</h2>
                <ul>
                  <li>HTML, CSS, Vanilla JS</li>
                  <li>ES6</li>
                  <li>Github</li>
                  <li>Bootstrap</li>
                  <li>Single Page Applications</li>
                  <li>API</li>
                  <li>Wordpress</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </div>
            <div id="expRight" class="shadow expInner">
              <i class="fas fa-file shadow-lg"></i>
              <div>
                <h2>Programs that I can use</h2>
                <ul>
                  <li>Visual Studio Code</li>
                  <li>Adobe XD</li>
                  <li>Photoshop</li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      `;
  }
}
