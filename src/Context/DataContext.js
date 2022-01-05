import { createContext, useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import format from 'date-fns/format';
import useAxiosFetch from '../Hook/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({children}) => {
   
    return (
        <DataContext.Provider value={{
           
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;