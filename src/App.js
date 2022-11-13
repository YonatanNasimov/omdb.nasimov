import React from 'react';
import { BrowserRouter, Route, Routes, Switch, Link } from "react-router-dom"
import Home from './components/home';
import VodInput from './components/vodInput';
import Footer from './components/footer'
import MovieInfo from './components/movieInfo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <VodInput />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/info/:id' element={<MovieInfo />} />
        <Route path='/*' element={<div className='container' style={{minHeight:"600px"}}>
          <h2>The page was not found, 404!</h2>
        </div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
//style={{display:"flex",alignItems:"center",textAlign:"center",justifyContent:"center"}}
export default App;
