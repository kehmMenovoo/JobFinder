import DataContext from "../../contexts/DataContext";
import DiffJobs from "./DiffJobs";
import DurationJobs from "./DurationJobs";
import Seniority from "./Seniority";
import Contents from "../Home/Body/Contents";
import FooterMenu from "../Home/Footer/FooterMenu";
import Copyright from "../Home/Footer/Copyright";
import { useContext } from "react";
import PageLoading from "../../layout/PageLoading";

const TypeMenu = () => {
    const {dataCustomize, isLoading, fetchError, jobType, setJobType, jobTime, setJobTime, jobLevel, setJobLevel, limit, pageCount } = useContext(DataContext);

    return (
        <div className="type-page">
            <PageLoading />
            {!fetchError && !isLoading && 
                <>
                    <div className="types-menu">
                        <div className="title-categories">
                            <b>Customize Categrories:</b>
                        </div>
                        <div>
                            <form>
                                <DiffJobs 
                                    jobType={jobType} 
                                    setJobType={setJobType} 
                                />
                                <DurationJobs 
                                    jobTime={jobTime} 
                                    setJobTime={setJobTime} 
                                />
                                <Seniority 
                                    jobLevel={jobLevel} 
                                    setJobLevel={setJobLevel} 
                                />
                            </form>
                        </div>
                    </div>
                    <main style={{marginTop: "50px"}}>
                        <Contents
                            data={dataCustomize}
                            pageCount={!(jobLevel || jobType || jobTime) ? pageCount : Math.ceil(dataCustomize.length/limit)}
                        />
                    </main>
                    <FooterMenu />
                    <Copyright />
                </>
            }
            
        </div>
    )
}

export default TypeMenu
