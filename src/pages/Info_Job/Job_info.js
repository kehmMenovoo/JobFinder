import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import InfoContent from './InfoContent';
import DataContext from '../../contexts/DataContext';
import PageLoading from '../../layout/PageLoading';

const Job_info = () => {

    const {isLoading, fetchError, allData} = useContext(DataContext);
    const {id} = useParams();
    const data = allData.find(post => (post.id).toString() === id);
    document.getElementById("web_icon").href = "../../images/JOBFINDER.png";

    return (
        <div>
            <PageLoading />
            {!fetchError && !isLoading && 
                <>
                    <InfoContent data={data} />
                </>
            }
        </div>
    )
}

export default Job_info