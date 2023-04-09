import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IWines } from '../interface/interface';
import './Start.css';
// import wines from '../../data/cards';
import WinesCard from './WinesCard';
import ModalWinesCard from './ModalWinesCard';
import { getWines, getWinesDetails } from '../Api/Api';
import SpinnerLoader from './SpinnerLoad';

interface IStartPageProps {
  changeNamePage: (namePage: string) => void;
}

function Start({ changeNamePage }: IStartPageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [winesList, setWinesList] = useState<IWines[]>([]);
  const [modalWines, setModalWines] = useState<IWines>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(localStorage.getItem('searchValue') ?? '');
  const searchRef = useRef<string>(searchInput);

  const fetchWines = useCallback(async (search: string): Promise<void> => {
    setIsLoading(true);
    try {
      const data = await getWines(search);
      setWinesList(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, []);

  const fetchWinesDetails = useCallback(async (productId: number): Promise<void> => {
    try {
      const dataProduct = await getWinesDetails(productId);
      setModalWines(dataProduct);
      setIsModalOpen(true);
    } catch (error) {
      setIsModalOpen(false);
    }
  }, []);

  useEffect(() => {
    fetchWines(searchRef.current);
  }, [fetchWines]);

  useEffect(() => {
    changeNamePage('Start Page');
  }, [changeNamePage]);

  useEffect(() => {
    searchRef.current = searchInput;
  }, [searchInput]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('searchValue', searchRef.current || '');
    fetchWines(searchRef.current);
  };

  const handleShowModal = (productId: number) => {
    fetchWinesDetails(productId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="wine-search">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search..." value={searchInput} onChange={handleChange} />
          <button data-testid="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
      {isLoading ? (
        <SpinnerLoader />
      ) : (
        <div className="wines-cards-container">
          {isModalOpen && modalWines && (
            <ModalWinesCard product={modalWines} closeModal={closeModal} />
          )}
          {winesList.length ? (
            winesList.map((product) => (
              <WinesCard product={product} key={product.id} handleShowModal={handleShowModal} />
            ))
          ) : (
            <h3>No such wine...</h3>
          )}
        </div>
      )}
    </>
  );
}

export default Start;
