import { useEffect } from "react";
import "./App.scss";
import Router from "./routes";
import ThemeProvider from "./themes/ThemeProvider";
import { scrollToTop } from "./utils/scrollToTop";
function App() {
  // const [countryCode, setCountryCode] = useState("");
  // const [number, setNumber] = useState("");
  // function fun(a: string) {
  //   console.log(a, "as the number 111");
  //   setNumber(a);
  // }
  // function fun2(a: string) {
  //   console.log(a, "as the code");
  //   setCountryCode(a);
  // }
  useEffect(() => {
    scrollToTop();
  }, [window.location.pathname]);
  return (
    <>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
