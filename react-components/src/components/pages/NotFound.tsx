import React, { Component } from 'react';

interface IPageError {
  changeNamePage: (namePage: string) => void;
}

class NotFound extends Component<IPageError> {
  componentDidMount() {
    this.props.changeNamePage('Page Error');
  }
  render() {
    return (
      <>
        <h3>Page not found 404</h3>
        <h3>Unexpected error has occurred</h3>
      </>
    );
  }
}

export default NotFound;
