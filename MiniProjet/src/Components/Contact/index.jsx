import React from 'react';
import {VscSearch} from "react-icons/vsc";
import './styles.css';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Search By title'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button><VscSearch id="svg2" /></button>
    </form>
  </div>
);

export default SearchBar;
