import { useContext } from "react";
import DataContext from "../../../contexts/DataContext";
import PageLoading from "../../../layout/PageLoading";
import JobItems from "./JobItems";

const Contents = ({data}) => {
    const {fetchError, isLoading} = useContext(DataContext);

    return (
        <>
            <main id="job-content">
                <PageLoading />
                {!fetchError && !isLoading && 
                    <JobItems 
                        data={data}
                    />
                }
            </main>
        </>
    )
}

export default Contents
