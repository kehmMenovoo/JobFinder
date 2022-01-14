import Contents from "../Home/Body/Contents";

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
        </div>
    )
}

export default SearchJobs
