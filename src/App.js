import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import MovieCard from './components/moviecard';
import FullMovieStream from './components/fullmoviestream';
import Login from './components/log-in';

const App = () => {
  const isLoginPage = window.location.pathname === '/login';
  return (
    <BrowserRouter>
      <React.Fragment>
        {!isLoginPage && <Navbar />}
        <Routes>
          <Route path="/" element={<MovieCard />} />
          <Route path="/fullmoviestream/:id" element={<FullMovieStream />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
