import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

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
        <Routes>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </>
    );
  }
}

export default App;
