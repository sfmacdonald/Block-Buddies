import React from 'react';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';


const Home = () => {
  return (
    <div>
      <h1>Block Search</h1>

      {/* Search Form */}
      <SearchForm />

      {/* Search Results */}
      <SearchResults />


    </div>
  );
};

export default Home;
