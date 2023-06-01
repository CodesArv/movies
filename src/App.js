
import './App.css';
import './Responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Upcoming from './upcoming';
import Toprated from './toprated';
import Detailspage from './moviesdetails';
 import Footer from './Footer';



function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/results/:id" element={<Detailspage/>} />
        <Route path="/Upcoming" element={<Upcoming />} />
        <Route path="/Toprated" element={<Toprated/>}/> 
      </Routes>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
