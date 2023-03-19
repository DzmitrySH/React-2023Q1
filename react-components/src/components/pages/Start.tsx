import wines from 'data/cards';
import WinesCard from './WinesCard';
import React, { Component } from 'react';
import './Start.css';
import { IWines } from 'components/interface/interface';

interface IState {
  wines: IWines[];
  searchInput: string;
}

interface IStartPageProps {
  changeNamePage: (namePage: string) => void;
}

class Start extends Component<IStartPageProps, IState> {
  private unloadListener: ((event: BeforeUnloadEvent) => void) | null = null;
  constructor(props: IStartPageProps) {
    super(props);
    this.state = {
      wines: [],
      searchInput: '',
    };
  }

  componentDidMount() {
    this.props.changeNamePage('Start Wines');
    const searchValue = localStorage.getItem('searchValue');
    if (searchValue) {
      this.setState({ searchInput: searchValue });
    }

    this.unloadListener = () => {
      localStorage.setItem('searchValue', this.state.searchInput);
    };
    window.addEventListener('beforeValue', this.unloadListener);

    this.setState({
      wines: wines,
    });
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.searchInput);
    if (this.unloadListener) {
      window.removeEventListener('beforeValue', this.unloadListener);
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState({ searchInput: value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  render() {
    const { wines } = this.state;
    const { searchInput } = this.state;

    const filterWines = wines.filter((wines) => {
      return wines.wine.toLowerCase().includes(searchInput.toLowerCase());
    });

    return (
      <>
        <div className="wine-search">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={this.handleChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <h3>Start page</h3>
        <div className="wine-cards-container">
          {filterWines.length ? (
            filterWines.map((product) => <WinesCard product={product} key={product.id} />)
          ) : (
            <p>No such wine...</p>
          )}
        </div>
      </>
    );
  }
}

export default Start;
