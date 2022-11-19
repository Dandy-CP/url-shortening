import React from "react";
import Bottomsection from "./components/Bottomsection";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import Infosection from "./components/Infosection";
import Navbar from "./components/Navbar";
import Shorterner from "./components/Shorterner";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Herosection />

      <Shorterner />

      <Infosection />

      <Bottomsection />

      <Footer />
    </div>
  );
}

export default App;
