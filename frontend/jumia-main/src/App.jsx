import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/index";
import Header from "./components/Header/index";
import Home from "./components/Home/index";
// import MySlider from "./components/Slider/Slider";
import { Provider } from "react-redux";
import store from "./store/store";
import HelpMain from "./components/Help";
import { Slider } from "@material-tailwind/react";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Navbar />
        {/* <HelpMain /> */}
        <div className="h-full flex items-center justify-center">
          <Home />
          {/* <Slider /> */}
        </div>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
