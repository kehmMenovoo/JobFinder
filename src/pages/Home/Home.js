import Slider from "./Header/Slider";
import Contents from "./Body/Contents";
import DataContext from "../../contexts/DataContext";
import FooterMenu from "./Footer/FooterMenu";
import Copyright from "./Footer/Copyright";
import { Link } from "react-router-dom";
import React, { useContext} from "react";
import PageLoading from "../../layout/PageLoading";

const Home = () => {

    const {totalData, isLoading, fetchError, limit} = useContext(DataContext);
    const toTop = () => {
        window.scrollTo(0, 0);
    }
    
    return (
        <div className="home">
            <PageLoading />
            {!fetchError && !isLoading && 
                <>
                    <Slider />
                    <div style={{backgroundColor: "#e0e0e0"}}>
                        <Contents 
                            data={totalData} 
                            pageCount={Math.ceil(totalData.length/limit)}
                        />
                        <div className="browse-bottom">
                            <div className="move-down">
                                <a href="#browse">
                                    <span>Back to Top &nbsp;</span>
                                    <span class="iconify" data-icon="bi:arrow-up-circle" data-width="28"></span>
                                </a>
                            </div>
                            <div className="move-down">
                                <Link to="jobtype" onClick={toTop}>
                                    <span>Explore More &nbsp;</span>
                                    <span class="iconify" data-icon="ic:outline-explore" data-width="28"></span>
                                </Link>
                            </div>
                        </div>
                        <FooterMenu />
                        <Copyright />
                    </div>
                </>
            }
        </div>
    )
}

export default Home
