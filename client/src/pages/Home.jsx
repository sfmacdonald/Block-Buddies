import React from 'react';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import LEGOImage from '../assets/LEGOppl.jpg';

const Home = () => {
  return (
    <div>
      <h1>Block Search</h1>

      {/* Search Form */}
      <SearchForm />

      {/* Search Results */}
      <SearchResults />

      <p>Block Buddies is designed for LEGO set constructors to track their completed builds and wishlist future projects. Builders can manage their profile, create wishlists, track current builds, and interact with other users.</p>

      <div className='image-container'>
      <img src={LEGOImage} alt='LEGO People' />
      </div>
    </div>
  );
};

export default Home;
