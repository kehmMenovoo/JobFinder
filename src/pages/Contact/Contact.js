import { useContext } from "react"
import ContactContent from "./ContactContent";
import Copyright from "../Home/Footer/Copyright";
import DataContext from "../../contexts/DataContext";
import PageLoading from "../../layout/PageLoading";

const Contact = () => {

    const {fetchError, isLoading} = useContext(DataContext);
    return (
        <div>
            <PageLoading />
            {!fetchError && !isLoading && 
                <>
                    <ContactContent />
                    <Copyright />
                </>
            }
        </div>
    )
}

export default Contact
