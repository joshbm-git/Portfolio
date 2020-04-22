export default class TabBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
    <div class="tabbar-wrapper">
      
      <nav class="tabbar nav-links">
        
        <div class="logo">
        <a href="#home">J</a>
        </div>

        <div class="links">

  
           <a href="#home">  
            <i class="fas fa-home"></i>
            <p>home</p>
           </a>
     

    
            <a href="#projects">  
            <i class="fas fa-folder-open"></i>
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
