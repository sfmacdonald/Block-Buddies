import React from 'react';

const SearchResults = ({ searchResults }) => {
    // Check if searchResults is undefined or null
    if (!searchResults) {
        return <div>No search results available.</div>;
    }

    return (
        <div>
            <h2>Search Results:</h2>
            <ul>
                {searchResults.map((result) => (
                    <li key={result.id}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;
