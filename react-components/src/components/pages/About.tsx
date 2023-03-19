import React, { Component } from 'react';
import './About.css';

interface IAboutPage {
  changeNamePage: (namePage: string) => void;
}

class About extends Component<IAboutPage> {
  componentDidMount() {
    this.props.changeNamePage('About Page');
  }

  render() {
    return (
      <>
        <div className="content-about">
          <h3>Welcome to the AboutPage!</h3>
        </div>
      </>
    );
  }
}

export default About;
