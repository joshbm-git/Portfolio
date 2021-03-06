export default class AboutPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
        <section id="about" class="page">
          <div id="exp">
            <div id="expTop" class="shadow exp-outer">
              <div class="exp-inner expTop-tablet">
              <article>
                <h3 class="display-4">Hi, I'm Joshua</h3>


                <p>I'm a Multimedia design student with ambitions of becoming a front-end developer.</p>
                <p>I love coding and creating websites. I focus on making a responsive web design. I like playing with colors to make the design pop out.</p>
                <p> I am a quick learner and love learning new things when it comes to coding. I can work independently but I am also team oriented and easily get along with others in a team setting.</p>
                </article>            
                  </div>

              <figure id="banner">
         
              <article>
  
              <img src="images/portrait.jpg" alt="" />
         
              <nav class="contact">
                    <a href="https://github.com/joshbm-git" target="_blank"
                    ><i class="fab fa-github"></i
                  ></a>
                  <a href="https://www.linkedin.com/in/joshua-mercado-854767179/" target="_blank"
                    ><i class="fab fa-linkedin-in"></i
                  ></a>                
                    </nav>
                    </article> 
              </figure> 

              <div class="exp-inner expTop-mobile">
              <h3 class="display-4">Hi, I'm Joshua</h3>


              <p>I'm a Multimedia design student with ambitions of becoming a front-end developer.</p>
              <p>I love coding and creating websites. I focus on making a responsive web design. I like playing with colors to make the design pop out.</p>
              <p> I am a quick learner and love learning new things when it comes to coding. I can work independently but I am also team oriented and easily get along with others in a team setting.</p>
             
            </div>
            </div>
            <div id="expBottom">
            <div id="expLeft" class="shadow exp-outer">
              <i class="fas fa-cog inner-icon"></i>
              <div class="exp-inner">
                <h2>Skills</h2>
                <div class="list-wrapper">
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Vanilla JS</li>
                  <li>Basic ES6</li>
                  <li>SPA</li>
                  <li>API</li>
                </ul>
                <ul>
                <li>Bootstrap</li>

                <li>Wordpress</li>
                <li>Github</li>
                <li>Firebase</li>
                <li>Adobe XD</li>
                <li>Photoshop</li>
                </ul>
              </div>
            </div>
            </div>
            <div id="expRight" class="shadow exp-outer">
              <i class="fas fa-file inner-icon"></i>
              <div class="exp-inner">
                <h2>CV</h2>
                <h3>
                <a href="../Joshua_Bacurio_Mercado_CV.pdf" download>Download my CV here</a>
                </h3>
                <h4>Contact info:</h4>
                <a href = "mailto: joshuabacuriomercado@gmail.com">joshuabacuriomercado@gmail.com</a>
                <p>+45 28 57 50 09</p>

                
              </div>
              </div>
            </div>
          </div>
        </section>
      `;
  }
}
