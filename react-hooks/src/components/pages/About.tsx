import React, { useEffect } from 'react';
import './About.css';

interface IAboutPage {
  changeNamePage: (namePage: string) => void;
}

function About({ changeNamePage }: IAboutPage) {
  useEffect(() => {
    changeNamePage('About Page');
  }, [changeNamePage]);

  return (
    <>
      <div className="content-about">
        <h3>Welcome to the AboutPage!</h3>
      </div>
    </>
  );
}

export default About;
