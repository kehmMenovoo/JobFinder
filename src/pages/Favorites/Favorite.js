import ContentItems from "./ContentItems";
import DataContext from "../../contexts/DataContext";
import PageLoading from "../../layout/PageLoading";
import React, { useContext } from "react";
import FavoriteContent from "./FavoriteContent";

const Favorite = () => {
    const {fetchError, isLoading} = useContext(DataContext);
    
    return (
        <div>
            <PageLoading />
            {!fetchError && !isLoading && 
                <FavoriteContent />
            }
            
        </div>
    )
}

export default Favorite;
