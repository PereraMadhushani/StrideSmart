import React from 'react';
import './index.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div className="search-bar2">
      <input type="text" placeholder="Search..." className="search-input2" />
      <button className="search-button2">
        <div className='search-icon1'>
        <SearchIcon />
        </div>
      </button>
    </div>
  );
};

export default SearchBar;