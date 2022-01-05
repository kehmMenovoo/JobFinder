import { Switch, Route } from "react-router-dom";
import { DataProvider } from './Context/DataContext';
import Header from "./pages/Home/Header/Header";
import Home from "./pages/Home/Home";
import TypeMenu from './pages/Types/TypeMenu';
import seniorityMenu from "./pages/Seniority/seniorityMenu";
import Favorites from "./pages/Favorites/Favorites";
import Post from './pages/Post/Post';
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register/Register";
import SignIn from "./pages/Sign_In/SignIn";
import Missing from "./pages/Error/Missing";

function App() {
  return (
    <div className="App">
       <DataProvider>
        <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/jobtype" component={TypeMenu} />
            <Route path="/seniority" component={seniorityMenu} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/post" component={Post} />
            <Route path="/contact" component={Contact} />
            <Route path="/register" component={Register} />
            <Route path="/sign_in" component={SignIn} />
            <Route path="*" component={Missing} />
          </Switch>
        </DataProvider>
    </div>
  );
}

export default App;
