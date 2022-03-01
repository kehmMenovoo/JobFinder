import Slider from "./Header/Slider";
import Contents from "./Body/Contents";
import DataContext from "../../contexts/DataContext";
import FooterMenu from "./Footer/FooterMenu";
import Copyright from "./Footer/Copyright";
import { useContext } from "react";
import PageLoading from "../../layout/PageLoading";

const Home = () => {

    const {totalData, isLoading, fetchError, limit} = useContext(DataContext);
    
    return (
        <div className="home">
            <PageLoading />
            {!fetchError && !isLoading && 
                <>
                    <Slider />
                    <div style={{backgroundColor: "#e0e0e0"}}>
                        <Contents 
                            data={totalData} 
                            pageCount={Math.ceil(totalData.length/limit)}
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
