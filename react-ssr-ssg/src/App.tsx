import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Start from './components/pages/Start';
import Header from './components/pages/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Form from './components/pages/forms/Form';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
