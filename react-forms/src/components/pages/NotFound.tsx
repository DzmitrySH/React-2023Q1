import React, { Component } from 'react';
import './NotFound.css';

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
        <div className="content-notfound">
          <h3>Page not found 404</h3>
          <h3>Unexpected error has occurred</h3>
        </div>
      </>
    );
  }
}

export default NotFound;
