import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import MovieCard from './components/moviecard';
import FullMovieStream from './components/fullmoviestream';
import SignLog from './components/log-in';

const App = () => {
  const isLoginPage = window.location.pathname === '/login';
  return (
    <BrowserRouter>
      <React.Fragment>
        {!isLoginPage && <Navbar />}
        <Routes>
          <Route path="/" element={<MovieCard />} />
          <Route path="/fullmoviestream/:id" element={<FullMovieStream />} />
          <Route path="/login" element={<SignLog />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
