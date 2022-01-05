import Slider from "./Header/Slider";
import Contents from "./Body/Contents";
import FooterMenu from "./Footer/FooterMenu";
import Copyright from "./Footer/Copyright";

const Home = () => {
    return (
        <div className="home">
            <Slider />
            <div style={{backgroundColor: "#e0e0e0"}}>
                <Contents />
                <FooterMenu />
                <Copyright />
            </div>
        </div>
    )
}

export default Home
