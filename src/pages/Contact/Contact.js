import ContactContent from "./ContactContent"

const Contact = ({fetchError, isLoading}) => {
    return (
        <div>
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
                    {/* <h1 style={{textAlign: "center", marginTop: "200px"}}>Contact Us</h1> */}
                    <ContactContent />
                </>
            }
        </div>
    )
}

export default Contact
