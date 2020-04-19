export default class TabBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
    <div class="tabbar-wrapper">
      
      <nav class="tabbar nav-links">
        
        <div class="logo">J</div>

        <div class="links">

  
           <a href="#home">  
            <i class="fas fa-home"></i>
            <p>home</p>
           </a>
     

    
            <a href="#projects">  
              <i class="fas fa-fire-alt"></i>
              <p>projects</p> 
            </a> 


  
            <a href="#about">  
              <i class="fas fa-user"></i>
              <p>about</p>
            </a>

          

            
        </div>
      
      </nav>
    
    </div>
    `;
  }
}
