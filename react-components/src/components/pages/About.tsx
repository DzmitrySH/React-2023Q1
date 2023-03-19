import React, { Component } from 'react';

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
        <h3>Welcome to the AboutPage!</h3>
      </>
    );
  }
}

export default About;
