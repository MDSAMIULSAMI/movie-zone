import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import MovieCard from './components/moviecard';
import FullMovieStream from './components/fullmoviestream';

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieCard />} />
          <Route path="/fullmoviestream/:id" element={<FullMovieStream />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
