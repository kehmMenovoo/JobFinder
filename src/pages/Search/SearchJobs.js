import Contents from "../Home/Body/Contents";
import Copyright from "../Home/Footer/Copyright";
import DataContext from "../../contexts/DataContext";
import FooterMenu from "../Home/Footer/FooterMenu";
import { useContext } from "react";

const SearchJobs = () => {
    const {dataItem} = useContext(DataContext);

    return (
        <div style={{marginTop: "80px"}}>
            <Contents 
                data={dataItem}
            />
            <FooterMenu />
            <Copyright />
        </div>
    )
}

export default SearchJobs
