import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import MovieCard from './components/moviecard';
import FullMovieStream from './components/fullmoviestream';
import SignLog from './components/log-in';
import SignIn from './components/Auth/signin';
import SignUp from './components/Auth/signup';

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
          <Route path="/login2" element={<SignIn />} />
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
