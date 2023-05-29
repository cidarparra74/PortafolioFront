import { useState } from "react";
import "./App.css";
import Header from "./components/molecules/Header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";
import Footer from "./components/molecules/Footer/Footer";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Header>
        <Footer content={undefined}/>
      </BrowserRouter>
      
    </>
  );
}

export default App;
