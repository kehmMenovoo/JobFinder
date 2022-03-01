import DataContext from "../../contexts/DataContext";
import PostForm from "./PostForm";
import { useContext } from "react"
import PageLoading from "../../layout/PageLoading";

const PostJob = () => {
    const {fetchError, isLoading} = useContext(DataContext);
    return (
        <div>
            <PageLoading />
            {!fetchError && !isLoading && 
                <>
                    <PostForm />
                </>
            }
        </div>
    )
}

export default PostJob
