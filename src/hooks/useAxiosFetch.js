import { useState, useEffect } from "react";
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {
    const [info, setInfo] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setLoading(true);
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token 
                });
                
                if(isMounted) {
                    setInfo(response.data);
                    setError(null);
                }
            }
            catch(err) {
                if (isMounted) {
                    setError(err.message);
                    setInfo([]);
                }
            }
            finally {
                isMounted && setTimeout(() => setLoading(false), 0);
            }
        }

        fetchData(dataUrl);

        const cleanUp = () => {
            console.log('Clean up function');
            isMounted = false;
            source.cancel();
        }
        return cleanUp;
    }, [dataUrl]);
    return { info, error, loading};
}

export default useAxiosFetch;