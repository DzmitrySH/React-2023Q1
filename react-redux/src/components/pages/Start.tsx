import React, { ChangeEvent, FormEvent, useState } from 'react';
import WinesCard from './WinesCard';
import SpinnerLoader from './SpinnerLoad';
import { useGetWinesQuery } from '../Api/Api';
import './Start.css';
import { useActions } from '../redux/useActions';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

function Start() {
  const { changeSearch } = useActions();
  const stateSearch = useSelector<RootState, string>((state) => state.search.stateSearch);
  // const [searchInput, setSearchInput] = useState(localStorage.getItem('searchValue') ?? '');
  const [searchInput, setSearchInput] = useState(stateSearch);
  const { data: winesList, isLoading } = useGetWinesQuery(stateSearch);

  // const fetchWines = useCallback(async (search: string): Promise<void> => {
  //   setIsLoading(true);
  //   try {
  //     const data = await getWines(!search ? search : '&wine=' + search);
  //     setWinesList(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsLoading(false);
  //   }
  // }, []);

  // const fetchWinesDetails = useCallback(async (productId: number): Promise<void> => {
  //   try {
  //     const dataProduct = await getWinesDetails(productId);
  //     setModalWines(dataProduct);
  //     setIsModalOpen(true);
  //   } catch (error) {
  //     setIsModalOpen(false);
  //   }
  // }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    changeSearch(searchInput);
    // localStorage.setItem('searchValue', searchRef.current || '');
    // fetchWines(searchRef.current);
  };

  return (
    <>
      <h3>Start page</h3>
      <div className="wine-search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Wine..."
            value={searchInput}
            onChange={handleChange}
          />
          <button data-testid="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
      {isLoading && <SpinnerLoader />}
      <div className="wines-cards-container">
        {winesList?.length ? (
          winesList.map((products) => <WinesCard product={products} key={products.id} />)
        ) : (
          <h3>No such wine...</h3>
        )}
      </div>
    </>
  );
}

export default Start;
