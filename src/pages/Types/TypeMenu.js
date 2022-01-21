import DiffJobs from "./DiffJobs";
import DurationJobs from "./DurationJobs";
import Seniority from "./Seniority";
import Contents from "../Home/Body/Contents";
import FooterMenu from "../Home/Footer/FooterMenu";
import Copyright from "../Home/Footer/Copyright";

const TypeMenu = ({data, isLoading, fetchError, search, splitLocation, jobType, setJobType, jobTime, setJobTime, jobLevel, setJobLevel}) => {
    return (
        <div className="type-page">
             {isLoading && 
                <div style={{width: "100%", height: "100%", position: "fixed", zIndex: "9999999"}}>
                    <div class="d-flex justify-content-center loading" style={{display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center", height: "100%"}}>
                        <div id="loading2"> 
                            <svg width="16px" height="12px">
                                <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                                <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                            </svg>
                        </div>
                    </div>
                    
                </div>
            }
            {fetchError && <h2 style={{color: "red", marginTop: '100px', marginBottom: "100px", textAlign: "center"}}>{`Error: ${fetchError}`}</h2>}
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
                            data={data}
                            isLoading={isLoading}
                            fetchError={fetchError}
                            search={search}
                            splitLocation={splitLocation}
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
