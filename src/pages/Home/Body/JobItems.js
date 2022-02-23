import Job from "./Job";
import sadRobot from "../../../images/robot-sad.png";
import ReactPaginate from "react-paginate";
import { motion, AnimatePresence } from "framer-motion";

const JobItems = ({data, fetchError, isLoading, search, splitLocation, pageCount, handlePageClick, currentPage}) => {

    return (
        <>
            <div className="content-container">
                <div className="container mt-4 d-flex align-items-center gap-3" id="job-items">
                    <div className="count-jobs text-secondary" id="jobcount-res">
                        {search && splitLocation[1] === 'search' ? 
                            `Search for: ${search} | Found: ${data.length} ${data.length !== 1 ? "results" : "result"}`
                            : 
                            `Found: ${data.length} ${data.length !== 1 ? "results" : "result"}`
                        }
                    </div>
                </div>
                <div className="container">
                    <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} layout className="row">
                        {isLoading && 
                            <div style={{width: "100%", height: "100%", position: "fixed", zIndex: "9999999", background: "white"}}>
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
                        {fetchError && <h2 style={{color: "red", marginTop: '100px', marginBottom: "100px", textAlign: "center", background: "rgb(224, 224, 224)"}}>{`Error: ${fetchError}`}</h2>}
                        {!fetchError && !isLoading && 
                            <AnimatePresence>
                               {data.map(item => (
                                    <Job key={item.id} item={item} />
                                ))}
                                {!isLoading && data.length === 0 ? (
                                    <div style={{textAlign: "center", color: "gray", marginTop: "100px", marginBottom: "150px", minHeight: "40vh"}}>
                                        <img src={sadRobot} className="mb-3" alt="Not Found" width="150px"/>
                                        <h3>No post in this moment!</h3>
                                    </div>) 
                                : ""}
                            </AnimatePresence>
                        }
                        
                    </motion.div>
                </div>
            </div>
           
           {pageCount > 1 && splitLocation[1] && data.length <= 40 ? 
                <ReactPaginate
                    previousLabel={<><i class="fa fa-angle-left"></i><i class="fa fa-angle-left"></i></>}
                    nextLabel={<><i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i></>}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    forcePage={currentPage-1}
                    onPageChange={(data) => handlePageClick(data.selected)}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />: null
            }
        </>
    )
}

export default JobItems
