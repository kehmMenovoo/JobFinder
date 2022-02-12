import Job from "./Job";
import sadRobot from "../../../images/robot-sad.png";
import ReactPaginate from "react-paginate";

const JobItems = ({data, isLoading, search, splitLocation, pageCount, handlePageClick}) => {
  
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
                    <div className="row">
                        {data.map(item => (
                            <Job key={item.id} item={item} />
                        ))}
                        {!isLoading && data.length === 0 ? (
                            <div style={{textAlign: "center", color: "gray", marginTop: "100px", marginBottom: "150px", minHeight: "40vh"}}>
                                <img src={sadRobot} className="mb-3" alt="Not Found" width="150px"/>
                                <h3>No post in this moment!</h3>
                            </div>) 
                        : ""}
                    </div>
                </div>
            </div>
           
           {pageCount > 1 ? 
                <ReactPaginate
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
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
