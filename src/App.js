import About from "./pages/About/About";
import BrowseFreelancer from "./pages/Post/BrowseFreelancer";
import Contact from "./pages/Contact/Contact";
import DataContext from "./contexts/DataContext";
import Favorite from "./pages/Favorites/Favorite";
import Header from "./pages/Home/Header/Header";
import Home from "./pages/Home/Home";
import JobInfo from "./pages/Info_Job/Job_info";
import Missing from "./pages/Error/Missing";
import Post from './pages/Post/Post';
import PostProject from "./pages/Post/PostProject";
import Privacy from "./pages/Privacy/Privacy";
import Register from "./pages/Register/Register";
import { Route, Switch} from "react-router-dom";
import SignIn from "./pages/Sign_In/SignIn";
import SearchJobs from "./pages/Search/SearchJobs";
import TypeMenu from './pages/Types/TypeMenu';
import TermOfUse from "./pages/TermOfUse/TermOfUse";
import { useContext } from "react";

function App() {

  const {splitLocation, search, } = useContext(DataContext);
  
  const title=["Search", "Home", "Job Types", "Favorites", "Post", "Contact Us", "Job Information", "Register", 
    "Sign in", "Browse Freelancer", "Post Project", "About", "Privacy", "Term of Use", "Page Not Found"];
  const main = " | Khom Rok";
  const titleName = document.querySelector("title");

  switch(splitLocation[1]) {
    case "search": titleName.innerHTML = title[0] + " for - " + search + main; break;
    case "": titleName.innerHTML = title[1] + main; break;
    case "jobtype": titleName.innerHTML = title[2] + main; break;
    case "favorites": titleName.innerHTML = title[3] + main; break;
    case "post": titleName.innerHTML = title[4] + main; break;
    case "contact": titleName.innerHTML = title[5] + main; break;
    case "jobinfo": titleName.innerHTML = title[6] + main; break;
    case "register": titleName.innerHTML = title[7] + main; break;
    case "sign_in": titleName.innerHTML = title[8] + main; break;
    case "browsefreelancer": titleName.innerHTML = title[9] + main; break;
    case "postproject": titleName.innerHTML = title[10] + main; break;
    case "about": titleName.innerHTML = title[11] + main; break;
    case "privacy": titleName.innerHTML = title[12] + main; break;
    case "termofuse": titleName.innerHTML = title[13] + main; break;
    default: titleName.innerHTML = title[14] + main;
  }

  return (
    <div className="App">
        {splitLocation[1] === "register" || splitLocation[1] === "sign_in" ? null : 
          <Header />
        }
          <Switch>
            <Route exact path="/search" component={SearchJobs} />
            <Route exact path="/" component={Home} />
            <Route path="/jobtype" component={TypeMenu} />
            <Route path="/favorites" component={Favorite} />
            <Route path="/post" component={Post} />
            <Route path="/contact" component={Contact} />
            <Route path="/register" component={Register} />
            <Route path="/sign_in" component={SignIn} />
            <Route path="/jobinfo/:id" component={JobInfo} />
            <Route path="/browsefreelancer" component={BrowseFreelancer} />
            <Route path="/postproject" component={PostProject} />
            <Route path="/about" component={About} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/termofuse" component={TermOfUse} />
            <Route path="*" component={Missing} />
          </Switch>
    </div>
  );
}

export default App;
