import "./App.scss";
import Router from "./routes";
import ThemeProvider from "./themes/ThemeProvider";
// import { useState } from "react";
// import InputField from "./components/InputFeild/InputFeild";
// import { Numberlist } from "./DummyData/MobileNumberData";
// import MobileNumberComponent from "./components/MobileNumberComponent/MobileNumberComponent";
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
  return (
    <>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
