import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import { CssBaseline, } from '@mui/material';
import Footer from './components/Footer';
import SideBar from './components/SideBar';


function App() {
  return (
    <div className="App">
      <SideBar />
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
      </Routes>
      <Footer />
    </div>
      
  );
}
export default App;
