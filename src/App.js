import { Switch, Route, useLocation, useHistory} from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./pages/Home/Header/Header";
import Home from "./pages/Home/Home";
import TypeMenu from './pages/Types/TypeMenu';
import Favorite from "./pages/Favorites/Favorite";
import Post from './pages/Post/Post';
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register/Register";
import SignIn from "./pages/Sign_In/SignIn";
import BrowseFreelancer from "./pages/Post/BrowseFreelancer";
import PostProject from "./pages/Post/PostProject";
import About from "./pages/About/About";
import Privacy from "./pages/Privacy/Privacy";
import TermOfUse from "./pages/TermOfUse/TermOfUse";
import Missing from "./pages/Error/Missing";
import SearchJobs from "./pages/Search/SearchJobs";
import JobInfo from "./pages/Info_Job/Job_info";

function App() {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [search, setSearch] = useState('');
  const [valueSearch, setValueSearch] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobTime, setJobTime] = useState('');
  const [jobLevel, setJobLevel] = useState('');
  const [pageCount, setpageCount] = useState(0);

  const API_URL_All = 'http://localhost:3500/data';

  let limit = 12;

  document.getElementById("web_icon").href = "./images/JOBFINDER.png";

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  useEffect(() => {
    const fetchItems = async () => {
        try{
          // page data
          const response = await fetch(`${API_URL_All}?_page=1&_limit=${limit}`);
          const listItems = await response.json();
          if(!response.ok) throw Error('Cannot Find Data!');
          setData(listItems);
          const total = response.headers.get("x-total-count");
          setpageCount(Math.ceil(total/limit));

          //All Data
          const res = await fetch(API_URL_All);
          const item = await res.json();
          if(!res.ok) throw Error('Cannot Find Data!');
          setAllData(item);

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
  }, [limit]);

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
  const history = useHistory();

  const indicateData = async (currentPage) => {
    const res = await fetch(`${API_URL_All}?_page=${currentPage}&_limit=${limit}`);
    const data = await res.json();
    return data;
  };
  const handleSearch = e => {
    e.preventDefault();
    if(valueSearch) setSearch(valueSearch);
    history.push('/search');
  }
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const jobCard = await indicateData(currentPage);
    setData(jobCard);
    window.scrollTo(0, 0)
  };
  
  let dataItem = allData.filter(i => (i.company).toLowerCase().includes(search.toLowerCase()) || (i.position).toLowerCase().includes(search.toLowerCase()));
  let dataCustomize = (jobLevel || jobType || jobTime ? allData : data).filter(item => item.entryLevel.toLowerCase().includes(jobLevel.toLowerCase()) 
  && item.typeJob.toLowerCase().includes(jobType.toLowerCase()) 
  && item.durationType.toLowerCase().includes(jobTime.toLowerCase()));
  return (
    <div className="App">
        {splitLocation[1] === "register" || splitLocation[1] === "sign_in" ? null : 
          <Header valueSearch={valueSearch} setValueSearch={setValueSearch} splitLocation={splitLocation} handleSearch={handleSearch} />
        }
          <Switch>
            <Route exact path="/search">
              <SearchJobs data={dataItem} isLoading={isLoading} fetchError={fetchError} search={search} splitLocation={splitLocation} />
            </Route>
            <Route exact path="/">
              <Home data={allData.filter(item => item.boost ? item : null)} isLoading={isLoading} fetchError={fetchError} search={search} splitLocation={splitLocation} pageCount={Math.ceil(allData.filter(i => i.boost ? i:null).length/limit)} handlePageClick={handlePageClick}/>
            </Route>
            <Route path="/jobtype">
              <TypeMenu data={dataCustomize} 
                isLoading={isLoading} fetchError={fetchError} search={search} splitLocation={splitLocation} 
                jobType={jobType} setJobType={setJobType} jobTime={jobTime} setJobTime={setJobTime} jobLevel={jobLevel} setJobLevel={setJobLevel}
                pageCount={!(jobLevel || jobType || jobTime) ? pageCount : Math.ceil(dataCustomize.length/limit)} handlePageClick={handlePageClick}
              />
            </Route>
            <Route path="/favorites">
              <Favorite fetchError={fetchError} isLoading={isLoading} />
            </Route>
            <Route path="/post">
              <Post fetchError={fetchError} isLoading={isLoading} />
            </Route>
            <Route path="/contact">
              <Contact fetchError={fetchError} isLoading={isLoading} />
            </Route>
            <Route path="/register" component={Register} />
            <Route path="/sign_in" component={SignIn} />
            <Route path="/jobinfo/:id">
              <JobInfo isLoading={isLoading} fetchError={fetchError} allData={data} />
            </Route>
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
