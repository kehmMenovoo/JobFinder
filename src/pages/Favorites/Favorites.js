const Favorites = ({fetchError, isLoading}) => {
    return (
        <div>
             {isLoading && 
                <div style={{width: "100%", height: "100%", position: "fixed", zIndex: "9999999"}}>
                    <div class="d-flex justify-content-center loading" style={{display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center", height: "100%"}}>
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div>
                            <p style={{textAlign: "center", marginBottom: "100px"}}>Loading...</p>
                        </div>
                    </div>
                    
                </div>
            }
            {fetchError && <h2 style={{color: "red", marginTop: '100px', marginBottom: "100px", textAlign: "center"}}>{`Error: ${fetchError}`}</h2>}
            {!fetchError && !isLoading && 
                <>
                    <h1 style={{textAlign: "center", marginTop: "200px"}}>Favorites Items</h1>
                </>
            }
            
        </div>
    )
}

export default Favorites
