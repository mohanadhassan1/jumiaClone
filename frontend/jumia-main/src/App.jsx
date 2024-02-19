import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/index";
import Header from "./components/Header/index";

function App() {
  return (
    <>
  
      <div className="bg-orange-600 h-screen items-center justify-center">
        <Header />
        <Navbar />
        <div className="h-full">main app</div>
        <Footer />
      </div>
    </>
  );
}

export default App;
