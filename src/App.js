import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import './App.css';
import TicketForm from './components/TicketForm';

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="App-content">
        <CssBaseline />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ticket/:id" element={<TicketForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;