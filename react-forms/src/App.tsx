import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Start from './components/pages/Start';
import Header from './components/pages/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Form from './components/pages/forms/Form';

interface IStateApp {
  updatePage: string;
}

class App extends Component<Record<string, never>, IStateApp> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      updatePage: '',
    };
  }

  updateData = (updatePage: string) => {
    this.setState({ updatePage });
  };

  render() {
    const { updatePage } = this.state;
    return (
      <>
        <Header namePage={updatePage} />
        <Routes>
          <Route path="/" element={<Start changeNamePage={this.updateData} />} />
          <Route path="/about" element={<About changeNamePage={this.updateData} />} />
          <Route path="/form" element={<Form changeNamePage={this.updateData} />} />
          <Route path="*" element={<NotFound changeNamePage={this.updateData} />} />
        </Routes>
      </>
    );
  }
}

export default App;
