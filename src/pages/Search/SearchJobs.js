import Contents from "../Home/Body/Contents";
import FooterMenu from "../Home/Footer/FooterMenu";
import Copyright from "../Home/Footer/Copyright";

const SearchJobs = ({data, fetchError, isLoading, search, splitLocation}) => {

    return (
        <div style={{marginTop: "80px"}}>
            <Contents 
                data={data} 
                isLoading={isLoading}
                fetchError={fetchError}
                search={search}
                splitLocation={splitLocation}
            />
            <FooterMenu />
            <Copyright />
        </div>
    )
}

export default SearchJobs
