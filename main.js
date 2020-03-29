// import your components, pages and services
import TopBar from "./components/topbar.js";
import TabBar from "./components/tabbar.js";
import HomePage from "./pages/home.js";
import PersonsPage from "./pages/persons.js";
import ProjectsPage from "./pages/projects.js";
import spaService from "./services/spa.js";

// Declare and init
let topBar = new TopBar();
let tabBar = new TabBar();
let homePage = new HomePage();
let projectsPage = new ProjectsPage();
let personsPage = new PersonsPage();

// init services
spaService.init();

window.pageChange = () => spaService.pageChange();
