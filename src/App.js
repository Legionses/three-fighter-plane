import './App.css';
import MainScene from "./containers/MainScene";
import HomePage from "./containers/HomePage/HomePage";
import PlanePresentation from "./containers/PlanePresentation/PlanePresentation";
import AppContextProvider from "./utils/hooks/useAppContext";
import {useAppContext} from "./utils/hooks/useAppContext";

const Overlay = () => {
    const {appMode, setAppMode} = useAppContext();

    return <>
        {appMode === 'menu' && <HomePage setMode={setAppMode}/>}
        {appMode === 'history' && <PlanePresentation/>}
    </>
}

function App() {

  return (
      <AppContextProvider>
          <div className="App">
              <MainScene/>
              <Overlay/>
          </div>
      </AppContextProvider>
  );
}

export default App;
