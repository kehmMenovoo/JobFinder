import JobItems from "./JobItems";

const Contents = ({data, fetchError, isLoading, search, splitLocation}) => {
    return (
        <>
            <main id="job-content">
                {isLoading && 
                    <div>
                        <div class="d-flex justify-content-center" style={{marginTop: "100px", marginBottom: "10px"}}>
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        <p style={{textAlign: "center", marginBottom: "100px"}}>Loading...</p>
                    </div>
                }
                {fetchError && <h2 style={{color: "red", marginTop: '100px', marginBottom: "100px", textAlign: "center"}}>{`Error: ${fetchError}`}</h2>}
                {!fetchError && !isLoading && 
                    <JobItems data={data} isLoading={isLoading} search={search} splitLocation={splitLocation} />
                }
            </main>
        </>
    )
}

export default Contents
