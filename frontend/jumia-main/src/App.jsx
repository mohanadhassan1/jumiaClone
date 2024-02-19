import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/index";
function App() {
  return (
    <>
  
      <div className="bg-orange-600 h-screen items-center justify-center">
        <Navbar />
        <div className="">main app</div>
        <Footer />
      </div>
    </>
  );
}

export default App;
