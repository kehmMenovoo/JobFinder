import Contents from "../Home/Body/Contents";

const Search = ({data, fetchError, isLoading, search}) => {
    return (
        <div style={{marginTop: "80px"}}>
            <p style={{position: "absolute", top: "80px", left: "120px", color: "gray"}}><b>Search result:</b> {search}</p>
            <Contents 
                data={data.filter(i => (i.company).toLowerCase().includes(search.toLowerCase()) || (i.position).toLowerCase().includes(search.toLowerCase()))} 
                isLoading={isLoading} 
                fetchError={fetchError}
            />
        </div>
    )
}

export default Search
