import React from 'react';
import LEGOImage from '../assets/LEGOppl.jpg';
import SingleRandomBuild from '../components/singleRandomBuild';

const Home = () => {
  return (
    <div>
      <h1>Welcome!</h1>

      <p>Block Buddies is designed for LEGO set constructors to track their completed builds and wishlist future projects. Builders can manage their profile, create wishlists, track current builds, and interact with other users.</p>
      <SingleRandomBuild  />
      <div className='image-container'>
        <img src={LEGOImage} alt='LEGO People' />
      </div>
    </div>
  );
};

export default Home;
