import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/views/Home";
import About from "./components/views/About";
import Awards from "./components/views/Awards";
import Blogs from "./components/views/Blogs";
import Blog from "./components/views/Blog";
import Experience from "./components/views/Experience";
import Projects from "./components/views/Projects";
import Project from "./components/views/Project";

function App() {

  return (
    <div className='app'>
      <Router>
        <div className="content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project" element={<Project />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App