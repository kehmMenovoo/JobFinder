import api from "../api/requestAPI";
import { createContext, useState, useEffect } from "react";
import format from 'date-fns/format';
import { useHistory, useLocation } from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";
import UploadImage from "../images/upload-logo.jpg";
import { v4 as uuid } from 'uuid';

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);
    const [search, setSearch] = useState('');
    const [valueSearch, setValueSearch] = useState('');
    const [jobType, setJobType] = useState('');
    const [jobTime, setJobTime] = useState('');
    const [jobLevel, setJobLevel] = useState('');
    const [pageCount, setpageCount] = useState(0);
    let [currentPage, setCurrentPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState();
    const [favoriteData, setFavoriteData] = useState([]);

    const [avatar, setAvatar] = useState(UploadImage);
    const [company, setCompany] = useState("");
    const [locationCompany, setLocationCompany] = useState("");
    const [due, setDue] = useState("");
    const [position, setPosition] = useState("");
    const [typeJob, setTypeJob] = useState('');
    const [durationType, setDurationType] = useState("");
    const [entryLevel, setEntrylevel] = useState("");
    const [department, setDepartment] = useState("");
    const [subDepartment, setSubDepartment] = useState("");
    const [report, setReport] = useState("");
    const [description, setDescription] = useState("");

    const API_URL_All = 'https://api-for-jobfinder-project.herokuapp.com/data';
    let limit = 40;
    // let pageAddress = `/page${currentPage}`;

    const locations = useLocation();
    const { pathname } = locations;
    const splitLocation = pathname.split("/");

    const {info, error, loading} = useAxiosFetch(API_URL_All);

    useEffect(() => {
        setAllData(info);
        setFetchError(error);
        setIsLoading(loading);
        
    }, [info, error, loading]);

    useEffect(() => {
        const fetchItems = async () => {
            try{
                // data each page
                const response = await fetch(`${API_URL_All}?_page=${currentPage}&_limit=${limit}`);
                const listItems = await response.json();
                if(!response.ok) throw Error('Cannot Find Data!');
                setData(listItems);
                const total = response.headers.get("x-total-count");
                setpageCount(Math.ceil(total/limit));

                // Favorite Data
                const res = await fetch('https://api-for-jobfinder-project.herokuapp.com/favorites')
                const temp = await res.json();
                if(!res.ok) throw Error("Can't Find Data!");
                setFavoriteData(temp);

                setFetchError(null);
            }
            catch(err) {
                setFetchError(err.message);
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchItems();
    }, [limit, currentPage]);

    const history = useHistory();

    const indicateData = async (currentPages) => {
        try {
            const res = await fetch(`${API_URL_All}?_page=${currentPages}&_limit=${limit}`);
            const data = await res.json();
            if(!res.ok) throw Error("Cannot Fetch Data!");
            setFetchError(null);
            return data;
        }
        catch(err) {
            setFetchError(err.message);
        }
        finally {
            setIsLoading(false);
        }
    };
    const handleSearch = e => {
        e.preventDefault();
        if(valueSearch) setSearch(valueSearch);
        history.push('/search');
        window.scrollTo(0, 0);
    }
    const handlePageClick = async (data) => {
        let currentP = data + 1;
        setCurrentPage(currentP);
        setIsLoading(true);
        const jobCard = await indicateData(currentP);
        setData(jobCard);
        window.scrollTo(0, 0);
        // history.push(`/jobtype/page${currentP}`);
    };
    const handlePostJob = async (e) => {
        e.preventDefault();
        const postDate = format(new Date(), 'MMM dd, yyyy');
        const jobID = uuid();
        const newPost = {
            boost: true, 
            id: jobID,
            avatar, 
            company, 
            location: locationCompany,
            postDate,
            due: format(new Date(due), 'MMM dd, yyyy'),
            position,
            typeJob,
            durationType,
            entryLevel,
            department,
            subDepartment,
            Report: report,
            description
        }
        try {
            const response = await api.post('/data', newPost);
            const temp = [...allData, response.data];
            setAllData(temp);
            setData(temp);
            setAvatar(UploadImage ? UploadImage : "");
            setCompany('');
            setLocationCompany('');
            setDue('');
            setPosition('');
            setTypeJob('');
            setDurationType('');
            setEntrylevel(''); 
            setDepartment('');
            setSubDepartment('');
            setReport('');
            setDescription('');
            history.push('/jobtype');
        }
        catch(err) {
            console.log(`Error: ${err.message}`);
        }

    }
    allData.sort((a, b) => {
        return (a.boost === b.boost)? 0 : b.boost ? 1:-1;
    });

    data.sort((a, b) => {
        return (a.boost === b.boost)? 0 : b.boost ? 1:-1;
    });
    let dataItem = allData.filter(i => (i.company).toLowerCase().includes(search.toLowerCase()) || (i.position).toLowerCase().includes(search.toLowerCase()));
    let totalData = allData.filter(item => item.boost===true ? item : null);
    let dataCustomize = ((jobLevel || jobTime || jobType) ? allData : data).filter(item => item.entryLevel.toLowerCase().includes(jobLevel.toLowerCase()) 
    && item.typeJob.toLowerCase().includes(jobType.toLowerCase()) 
    && item.durationType.toLowerCase().includes(jobTime.toLowerCase()));

    return (
        <DataContext.Provider value={{
            data, setData, allData, setAllData, isLoading, setIsLoading,
            fetchError, setFetchError, search, setSearch, valueSearch, setValueSearch,
            jobType, setJobType, jobTime, setJobTime, jobLevel, setJobLevel,
            pageCount, setpageCount, currentPage, setCurrentPage,
            dataItem, totalData, dataCustomize, handlePageClick, handleSearch, splitLocation, history,
            selectedImage, setSelectedImage, 
            avatar, setAvatar, company, setCompany, locationCompany, setLocationCompany,
            due, setDue, position, setPosition, typeJob, setTypeJob,
            durationType, setDurationType, entryLevel, setEntrylevel, department, setDepartment,
            subDepartment, setSubDepartment, report, setReport, description, setDescription, 
            handlePostJob, limit, favoriteData, setFavoriteData
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;