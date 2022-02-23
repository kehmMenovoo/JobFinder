import JOBFINDER from '../../../images/JOBFINDER.png';
import { Link } from "react-router-dom";

const Header = ({valueSearch, setValueSearch, splitLocation, handleSearch, 
    // pageAddress
    }) => {

    const navLink = "nav-link";
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="search-item align-items-center">
                            <div className="logo">
                                <a className="navbar-brand text-success" href="/">
                                    <img src={JOBFINDER} alt="JobFinder" />
                                </a>
                            </div>
                            <div className="search">
                                    <form className="d-flex align-items-center" autoComplete="off" onSubmit={e => handleSearch(e)} >
                                        <label className="search-icon">
                                            <span class="iconify" data-icon="bx:bx-search-alt-2"></span>
                                        </label>
                                        <input 
                                            className="form-control me-2" 
                                            id="Search-job" 
                                            type="search-input" 
                                            placeholder="Search..." 
                                            aria-label="Search" 
                                            value={valueSearch}
                                            onChange={(e) => setValueSearch(e.target.value)}
                                        />
                                    </form>
                            </div>
                        </div>

                        <div className="menu-item">
                            
                            <ul className="navbar-nav" id='navbar-menu'>
                                <li className="nav-item">
                                    <div>
                                        <Link className={splitLocation[1] === "" ? `${navLink} active` : navLink} to="/">
                                            <span class="iconify" data-icon="ant-design:home-outlined"></span>
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="tooltips">Home</p>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div>
                                        <Link className={splitLocation[1] === "jobtype" ? `${navLink} active` : navLink} to={`/jobtype`}>
                                            <span className="iconify" data-icon="bx:bx-briefcase"></span>
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="tooltips">Job Types</p>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div>
                                        <Link className={splitLocation[1] === "post" ? `${navLink} active` : navLink} to="/post">
                                            <span className="iconify" data-icon="akar-icons:cloud-upload"></span>
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="tooltips">Upload</p>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div>
                                        <Link className={splitLocation[1] === "favorites" ? `${navLink} active` : navLink} to="/favorites">
                                            <span className="iconify" data-icon="ant-design:heart-outlined"></span>
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="tooltips">Favorites</p>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div>
                                        <Link className={splitLocation[1] === "contact" ? `${navLink} active` : navLink} to="/contact">
                                            <span className="iconify" data-icon="bx:bx-phone"></span>
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="tooltips">Contact</p>
                                    </div>
                                </li>
                            </ul>   
                        </div>

                        <div className="sign-in">
                            <Link to="/register">
                                <button id="register">Regiter</button>
                            </Link>
                            <Link to="/sign_in">
                                <button id="sign-in">Sign in</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mb-menu">
                    <nav className="nav justify-content-center" id='navbar-menu'>
                        <Link className={splitLocation[1] === "" ? `${navLink} active` : navLink} aria-current="page" to="/" >
                            <span class="iconify" data-icon="ant-design:home-outlined"></span>
                        </Link>
                        <Link className={splitLocation[1] === "jobtype" ? `${navLink} active` : navLink} to={`/jobtype`} >
                            <span className="iconify" data-icon="bx:bx-briefcase"></span>
                        </Link>
                        <Link className={splitLocation[1] === "post" ? `${navLink} active` : navLink} to="/post">
                            <span className="iconify" data-icon="akar-icons:cloud-upload"></span>
                        </Link>
                        <Link className="nav-link" to="/favorites">
                            <span className="iconify" data-icon="ant-design:heart-outlined"></span>
                        </Link>
                        <Link className={splitLocation[1] === "contact" ? `${navLink} active` : navLink} to="/contact">
                            <span className="iconify" data-icon="bx:bx-phone"></span>
                        </Link>
                    </nav>
                </div>
            </nav>
        </>
    )
}

export default Header
