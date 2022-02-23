import JobItems from "./JobItems";

const Contents = ({data, fetchError, isLoading, search, splitLocation, pageCount, handlePageClick, currentPage}) => {

    return (
        <>
            <main id="job-content">
                {isLoading && 
                    <div>
                        <div id="loading2"> 
                            <svg width="16px" height="12px">
                                <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                                <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                            </svg>
                        </div>
                    </div>
                }
                {fetchError && <h2 style={{color: "red", marginTop: '100px', marginBottom: "100px", textAlign: "center"}}>{`Error: ${fetchError}`}</h2>}
                {!fetchError && !isLoading && 
                    <JobItems 
                        data={data} isLoading={isLoading} search={search} splitLocation={splitLocation} 
                        pageCount={pageCount} handlePageClick={handlePageClick} fetchError={fetchError}
                        currentPage={currentPage}
                    />
                }
            </main>
        </>
    )
}

export default Contents
