import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Destinations from './pages/destinations/Destinations';
import Footer from './components/footer/Footer';
import Packages from './pages/packages/Packages';
import Blogpage from './pages/blogfolder/Blogpage';
import SignUp from './pages/signup';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        
        <Route path='/packages' element={<Packages/>} />
        <Route path='/destinations' element={<Destinations/>} />
        <Route path='/blogs' element={<Blogpage/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
      <Footer />
    </Router>
  );
}
  
export default App;