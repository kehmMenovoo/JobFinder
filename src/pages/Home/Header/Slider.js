import { Link } from "react-router-dom";
import React, { useContext } from "react";
import DataContext from "../../../contexts/DataContext";

const Slider = () => {
    const {allData} = useContext(DataContext);
    const toTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <>
            <header>
                <div className="slider">
                    <div className="slider-img">
                        {/* <img src={JobSlider} />
                        <div className="color-img"></div> */}
                    </div>
                    <div className="slider-content">
                        <div className="welcome">
                            <h1>Welcome to <span style={{color: "#2b95ff"}} ><a href="/" style={{textDecoration: "none"}}>Khom Rok</a></span> site</h1>
                            <p>Discover your next career move, freelance gig, or internship</p>
                        </div>

                        <div className="browse">
                            <div className="move-down">
                                <a href="#browse">
                                    Discover Top Careers &nbsp;
                                    <span className="iconify" data-icon="bi:arrow-down-circle"></span>
                                </a>
                            </div>
                            <div className="move-down">
                                <Link to="jobtype" onClick={toTop}>
                                    Other {allData.length} Careers &nbsp;
                                    <span class="iconify" data-icon="ic:outline-explore" data-width="28"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="browse"></div>
            </header>
        </>
    )
}

export default Slider
