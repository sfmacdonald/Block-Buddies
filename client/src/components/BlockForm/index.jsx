import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_BUILD } from "../../utils/mutations";
import { QUERY_BLOCK_BUILDS } from "../../utils/queries";

import Auth from "../../utils/auth";

const BlockForm = () => {
  const [buildName, setBuildName] = useState("");
  const [number, setNumber] = useState("");
  const [pieces, setPieces] = useState("");
  const [theme, setTheme] = useState("");
  const [builderAge, setBuilderAge] = useState("");
  const [rating, setRating] = useState("");

  const [addBlockBuild, { error }] = useMutation(ADD_BUILD, {
    refetchQueries: [{ query: QUERY_BLOCK_BUILDS }],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addBlockBuild({
        variables: {
          input: {
            buildName,
            number,
            pieces,
            theme,
            builderAge,
            rating,
          },
        },
      });

      setBuildName("");
      setNumber("");
      setPieces("");
      setTheme("");
      setBuilderAge("");
      setRating("");
    } catch (err) {
      console.group("ProductInfo");
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
              value={buildName}
              onChange={(e) => setBuildName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="number">Build Number:</label>
            <input
              type="text"
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="pieces">Build Pieces:</label>
            <textarea
              id="pieces"
              value={pieces}
              onChange={(e) => setPieces(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="theme">Build Theme:</label>
            <input
              type="text"
              id="theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="builderAge">Builder Age:</label>
            <input
              type="text"
              id="builderAge"
              value={builderAge}
              onChange={(e) => setBuilderAge(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="rating">Build Rating:</label>
            <input
              type="text"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <button type="submit">Share Build</button>
          {error && <div>{error.message}</div>}
        </form>
      ) : (
        <p>
          You need to be logged in to share builds. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default BlockForm;
