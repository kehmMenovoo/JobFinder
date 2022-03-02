import Copyright from "../Home/Footer/Copyright";
import DataContext from "../../contexts/DataContext";
import FooterMenu from "../Home/Footer/FooterMenu";
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
                    <FooterMenu />
                    <Copyright />
                </>
            }

            
        </div>
    )
}

export default PostJob
