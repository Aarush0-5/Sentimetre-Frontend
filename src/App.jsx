import {Routes, Route } from 'react-router-dom';
import {Toaster} from "react-hot-toast";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import Podcast from "./pages/Podcast";
import SignUp from "./pages/SignUp";
import PoBlCrud from "./pages/Upload";
import NotFound from './pages/404error';



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}/> 
      <Route path="/Podcast" element={<Podcast />}/>  
      <Route path="/About" element={<About />}/> 
      <Route path="/signup" element={<SignUp />}/> 
      <Route path="/login" element={<LogIn />}/> 
      <Route path="/upload" element={<PoBlCrud/>}/> 
      <Route path="*" element={<NotFound/>}/> 
    </Routes>
    <Toaster />
   </>
    
  );
}

export default App
