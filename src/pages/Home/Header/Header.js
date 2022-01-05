import JOBFINDER from '../../../images/JOBFINDER.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="search-item align-items-center">
                            <div className="logo">
                                <Link className="navbar-brand text-success" to="/">
                                    <img src={JOBFINDER} />
                                </Link>
                            </div>
                            <div className="search">
                                    <form className="d-flex align-items-center">
                                        <label>
                                            <i className="bi bi-search"></i>
                                        </label>
                                        <input className="form-control me-2" type="search-input" placeholder="Search..." aria-label="Search" />
                                    </form>
                            </div>
                        </div>

                        <div className="menu-item">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link active" to="/">
                                        <span className="iconify" data-icon="fa-solid:home"></span>
                                    </Link>
                                    <p className="tooltips">Home</p>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="jobtype">
                                        <span className="iconify" data-icon="bx:bx-briefcase"></span>
                                    </Link>
                                    <p className="tooltips">Job Types</p>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/seniority">
                                        <span className="iconify" data-icon="icon-park-outline:ranking"></span>
                                    </Link>
                                    <p className="tooltips">Seniority</p>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/favorites">
                                        <span className="iconify" data-icon="ant-design:heart-outlined"></span>
                                    </Link>
                                    <p className="tooltips">Favorites</p>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/post">
                                        <span className="iconify" data-icon="akar-icons:cloud-upload"></span>
                                    </Link>
                                    <p className="tooltips">Upload</p>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">
                                        <span className="iconify" data-icon="bx:bx-phone"></span>
                                    </Link>
                                    <p className="tooltips">Contact</p>
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
                    <nav className="nav justify-content-center">
                        <Link className="nav-link active" aria-current="page" to="/">
                            <span className="iconify" data-icon="fa-solid:home"></span>
                        </Link>
                        <Link className="nav-link" to="/jobtype"><span className="iconify" data-icon="bx:bx-briefcase"></span></Link>
                        <Link className="nav-link" to="/seniority">
                            <span className="iconify" data-icon="icon-park-outline:ranking"></span>
                        </Link>
                        <Link className="nav-link" to="/favorites">
                            <span className="iconify" data-icon="ant-design:heart-outlined"></span>
                        </Link>
                        <Link className="nav-link" to="/post">
                            <span className="iconify" data-icon="akar-icons:cloud-upload"></span>
                        </Link>
                        <Link className="nav-link" to="/contact">
                            <span className="iconify" data-icon="bx:bx-phone"></span>
                        </Link>
                    </nav>
                </div>
            </nav>
        </>
    )
}

export default Header
