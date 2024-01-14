import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Teachers from './components/Teachers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TeacherInfo from './components/TeacherInfo';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/teachers' element={<Teachers />} />
          <Route path='/teachers/:slug' element={<TeacherInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;