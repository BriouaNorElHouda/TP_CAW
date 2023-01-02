import React from 'react';
import './styles.css';
import {VscSearch} from "react-icons/vsc";

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Search By Date'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button><VscSearch id="svg2" /></button>
    </form>
  </div>
);

export default SearchBar;