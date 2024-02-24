import "./App.scss";
import Router from "./routes";
import ThemeProvider from "./themes/ThemeProvider";
import Header from './components/Header/Header'
// import ResponsiveAppBar from "./components/Header/TestHeader";
function App() {
  return (
    <>
      <ThemeProvider>
      {/* <ResponsiveAppBar/> */}
        <Header/>
        {/* <Router /> */}
        
      </ThemeProvider>
    </>
  );
}

export default App;
