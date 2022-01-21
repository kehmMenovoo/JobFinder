import Slider from "./Header/Slider";
import Contents from "./Body/Contents";
import FooterMenu from "./Footer/FooterMenu";
import Copyright from "./Footer/Copyright";

const Home = ({data, isLoading, fetchError, search, splitLocation}) => {

    return (
        <div className="home">
            {isLoading && 
                <div style={{width: "100%", height: "100%", position: "fixed", zIndex: "9999999"}}>
                    <div class="d-flex justify-content-center loading" style={{display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center", height: "100%"}}>
                        {/* <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div> */}
                        <div id="loading2"> 
                            <svg width="16px" height="12px">
                                <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                                <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                            </svg>
                        </div>
                        {/* <div>
                            <p style={{textAlign: "center", marginBottom: "100px"}}>Loading...</p>
                        </div> */}
                    </div>
                </div>
            }
            {fetchError && <h2 style={{color: "red", marginTop: '100px', marginBottom: "100px", textAlign: "center", background: "rgb(224, 224, 224)"}}>{`Error: ${fetchError}`}</h2>}
            {!fetchError && !isLoading && 
                <>
                    <Slider />
                    <div style={{backgroundColor: "#e0e0e0"}}>
                        <Contents 
                            data={data} 
                            fetchError={fetchError}
                            isLoading={isLoading}
                            search={search}
                            splitLocation={splitLocation}
                        />
                        <FooterMenu />
                        <Copyright />
                    </div>
                </>
            }
        </div>
    )
}

export default Home
