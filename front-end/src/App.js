import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import FormNewTeacher from './pages/FormNewTeacher';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import ProfSelected from './pages/ProfSelected';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path ="/" element={<Home />} />
          <Route exact path ="/profs/:slug" element={<ProfSelected />} />
          <Route exact path ="/profs" element={<FormNewTeacher/>} />
          <Route path ="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;