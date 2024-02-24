import "./App.scss";
import Router from "./routes";
import ThemeProvider from "./themes/ThemeProvider";
function App() {
  return (
    <>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
