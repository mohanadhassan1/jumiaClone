import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/index";
import Header from "./components/Header/index";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="h-screen flex items-center justify-center">
        <div className="h-full flex items-center justify-center">
          <Home />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
