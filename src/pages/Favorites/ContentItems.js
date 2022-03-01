import { motion, AnimatePresence } from 'framer-motion';
import DataContext from '../../contexts/DataContext'
import FavoriteItems from './FavoriteItems';
import PageLoading from '../../layout/PageLoading';
import React, { useContext } from 'react'
import sadRobot from "../../images/robot-sad.png";

const ContentItems = () => {
    const {fetchError, isLoading, favoriteData} = useContext(DataContext);

    return (
        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} layout className="row">
            <PageLoading />
            {!fetchError && !isLoading && 
                <AnimatePresence>
                    {favoriteData.map(item => (
                        <FavoriteItems key={item.id} item={item} />
                    ))}
                    {!isLoading && favoriteData.length === 0 ? (
                        <div style={{textAlign: "center", color: "gray", marginTop: "100px", marginBottom: "150px", minHeight: "40vh"}}>
                            <img src={sadRobot} className="mb-3" alt="Not Found" width="150px"/>
                            <h3>No Jobs Found!</h3>
                        </div>) 
                    : ""}
                </AnimatePresence>
            }
            
        </motion.div>
    )
}

export default ContentItems