import React, { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Start from './components/pages/Start';
import Header from './components/pages/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Form from './components/pages/forms/Form';

function App() {
  const [updatePage, setUpdatePage] = useState<string>('');
  const updateData = useCallback((updatePage: string) => {
    setUpdatePage(updatePage);
  }, []);

  return (
    <>
      <Header namePage={updatePage} />
      <Routes>
        <Route path="/" element={<Start changeNamePage={updateData} />} />
        <Route path="/about" element={<About changeNamePage={updateData} />} />
        <Route path="/form" element={<Form changeNamePage={updateData} />} />
        <Route path="*" element={<NotFound changeNamePage={updateData} />} />
      </Routes>
    </>
  );
}

export default App;
