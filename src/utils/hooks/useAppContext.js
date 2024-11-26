import {createContext, useContext, useMemo, useState} from "react";

const AppContext = createContext({});

export const useAppContext = () => {
    const value = useContext(AppContext);
    return value;
}

const AppContextProvider = ({children}) => {
    const [appMode, setAppMode] = useState('menu');
    const [historySection, setHistorySection] = useState('overview');

    const contextValue = useMemo(() => ({
        appMode,
        setAppMode,
        historySection,
        setHistorySection,
    }),[appMode, historySection])

    return <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;