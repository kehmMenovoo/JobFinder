
const Slider = () => {
    return (
        <>
            <header>
                <div className="slider">
                    <div className="slider-img">
                        {/* <img src={JobSlider} />
                        <div className="color-img"></div> */}
                    </div>
                    <div className="slider-content">
                        <div className="welcome">
                            <h1>Welcome to <span style={{color: "#2b95ff"}} ><a href="/" style={{textDecoration: "none"}}>Khom Rok</a></span> site</h1>
                            <p>Discover your next career move, freelance gig, or internship</p>
                        </div>

                        <div className="move-down">
                            <a href="#browse">
                                Discover Top Careers &nbsp;
                                <span className="iconify" data-icon="bi:arrow-down-circle"></span>
                            </a>
                        </div>
                    </div>
                </div>

                <div id="browse"></div>
            </header>
        </>
    )
}

export default Slider
