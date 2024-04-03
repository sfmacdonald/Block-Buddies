import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_BLOCK_SET } from '../../utils/mutations';
import { QUERY_BLOCK_SETS } from '../../utils/queries';

import Auth from '../../utils/auth';

const BlockSetForm = () => {
  const [setName, setSetName] = useState('');
  const [setNumber, setSetNumber] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const [addBlockSet, { error }] = useMutation(ADD_BLOCK_SET, {
    refetchQueries: [
      { query: QUERY_BLOCK_SETS }
    ]
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addBlockSet({
        variables: {
          setName,
          setNumber,
          description,
          image,
          author: Auth.getProfile().data.username
        },
      });

      setSetName('');
      setSetNumber('');
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
            <label htmlFor="setName">Set Name:</label>
            <input
              type="text"
              id="setName"
              value={setName}
              onChange={(e) => setSetName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="setNumber">Set Number:</label>
            <input
              type="text"
              id="setNumber"
              value={setNumber}
              onChange={(e) => setSetNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
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

export default BlockSetForm;
