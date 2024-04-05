import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_BLOCK_BUILD } from '../../utils/mutations';
import { QUERY_BLOCK_BUILDS } from '../../utils/queries';

import Auth from '../../utils/auth';

const BlockBuildForm = () => {
  const [buildName, setBuildName] = useState('');
  const [buildNumber, setBuildNumber] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const [addBlockBuild, { error }] = useMutation(ADD_BLOCK_BUILD, {
    refetchQueries: [
      { query: QUERY_BLOCK_BUILDS }
    ]
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addBlockSet({
        variables: {
          buildName,
          buildNumber,
          description,
          image,
          author: Auth.getProfile().data.username
        },
      });

      setBuildName('');
      setBuildNumber('');
      setDescription('');
      setImage('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Share your Build</h3>

      {Auth.loggedIn() ? (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="buildName">Set Name:</label>
            <input
              type="text"
              id="buildName"
              value={setName}
              onChange={(e) => setBuildName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="buildNumber">Set Number:</label>
            <input
              type="text"
              id="buildNumber"
              value={setNumber}
              onChange={(e) => setBuildNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => buildDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => buildImage(e.target.value)}
            />
          </div>
          <button type="submit">Share Build</button>
          {error && <div>{error.message}</div>}
        </form>
      ) : (
        <p>
          You need to be logged in to share builds. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default BlockBuildForm;
