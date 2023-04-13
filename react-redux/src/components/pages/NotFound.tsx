import React, { useEffect } from 'react';
import './NotFound.css';

interface IPageError {
  changeNamePage: (namePage: string) => void;
}

function NotFound({ changeNamePage }: IPageError) {
  useEffect(() => {
    changeNamePage('NotFound');
  }, [changeNamePage]);

  return (
    <>
      <div className="content-notfound">
        <h3>Page not found 404</h3>
        <h3>Unexpected error has occurred</h3>
      </div>
    </>
  );
}

export default NotFound;
