import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/index";
import Header from "./components/Header/index";
import Home from "./components/Home/index";
import MySlider from "./components/Slider/Slider";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="h-full flex items-center justify-center">
          <Home />
          
      </div>
      <Footer />
    </>
  );
}

export default App;
