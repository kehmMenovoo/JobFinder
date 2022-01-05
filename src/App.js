import { Switch, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./pages/Home/Header/Header";
import Home from "./pages/Home/Home";
import TypeMenu from './pages/Types/TypeMenu';
import Favorites from "./pages/Favorites/Favorites";
import Post from './pages/Post/Post';
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register/Register";
import SignIn from "./pages/Sign_In/SignIn";
import JobInfo from "./pages/JobInfo/JobInfo";
import NextPage from "./pages/Home/Body/NextPage";
import About from "./pages/About/About";
import Privacy from "./pages/Privacy/Privacy";
import TermOfUse from "./pages/TermOfUse/TermOfUse";
import Missing from "./pages/Error/Missing";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const API_URL = 'http://localhost:3500/data';

  useEffect(() => {
      const fetchItems = async () => {
          try{
              const response = await fetch(API_URL);
              const listItems = await response.json();
              if(!response.ok) throw Error('Lost All Data!');
              setData(listItems);
              setFetchError(null);
          }
          catch(err) {
              setFetchError(err.message);
          }
          finally {
              setIsLoading(false);
          }
        }

        fetchItems();
  }, []);

  return (
    <div className="App">
        <Header />
          <Switch>
            <Route exact path="/">
              <Home 
                data={data} setData={setData}
                isLoading={isLoading} setIsLoading={isLoading}
                fetchError={fetchError} setFetchError={setFetchError}

              />
            </Route>
            <Route path="/jobtype">
              <TypeMenu 
                data={data}
                isLoading={isLoading}
                fetchError={fetchError}
              />
            </Route>
            <Route path="/favorites">
              <Favorites fetchError={fetchError} isLoading={isLoading} />
            </Route>
            <Route path="/post" component={Post} />
            <Route path="/contact" component={Contact} />
            <Route path="/register" component={Register} />
            <Route path="/sign_in" component={SignIn} />
            <Route path="/job_info/:id" component={JobInfo} />
            <Route path="/nextpage" component={NextPage} />
            <Route path="/about" component={About} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/termofuse" component={TermOfUse} />
            <Route path="*" component={Missing} />
          </Switch>
    </div>
  );
}

export default App;
