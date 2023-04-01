import wines from '../../data/cards';
import WinesCard from './WinesCard';
import React, { useEffect, useRef, useState } from 'react';
import './Start.css';
import { IWines } from '../interface/interface';

interface IStartPageProps {
  changeNamePage: (namePage: string) => void;
}

function Start({ changeNamePage }: IStartPageProps) {
  const [winesList, setWinesList] = useState<IWines[]>([]);
  const [searchInput, setSearchInput] = useState(localStorage.getItem('searchValue') ?? '');
  const searchRef = useRef<string>(searchInput);

  useEffect(() => {
    changeNamePage('Start Page');
    setWinesList(wines);
    return () => {
      localStorage.setItem('searchValue', searchRef.current || '');
    };
  }, [changeNamePage]);

  useEffect(() => {
    searchRef.current = searchInput;
  }, [searchInput]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const filterWines = winesList.filter((win) =>
    win.wine.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div className="wine-search">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search..." value={searchInput} onChange={handleChange} />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="wines-cards-container">
        {filterWines.length ? (
          filterWines.map((product) => <WinesCard product={product} key={product.id} />)
        ) : (
          <h3>No such wine...</h3>
        )}
      </div>
    </>
  );
}

export default Start;
