import Job from "./Job";

const JobItems = ({data, isLoading, search, splitLocation}) => {

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
                        {!isLoading && data.length === 0 ? (<h3 style={{textAlign: "center", color: "gray", marginTop: "100px", marginBottom: "100px"}}>No post in this moment!</h3>) : ""}
                    </div>
                </div>
            </div>

            {/* {data.length > 40 ? (
                <nav aria-label="Page navigation" className="pagination-content d-flex justify-content-center mt-3">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="/nextpage" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            ):(null)} */}
        </>
    )
}

export default JobItems
