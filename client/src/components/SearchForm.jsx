import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ fetchSearchResults }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetchSearchResults(searchTerm);
    };

    return (
        <form onSubmit={handleSearchSubmit}>
            <input
                type="text"
                placeholder="Search for block sets..."
                value={searchTerm}
                onChange={handleSearchInputChange}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;