import React,{useContext} from 'react'
import { BioDataContext } from './Contextpart'

const SearchBar = () => {
    const { query, searchPost } = useContext(BioDataContext);
  
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Search Here"
            value={query} 
            onChange={(e) => searchPost(e.target.value)} 
          />
        </div>
      </form>
    );
  };

export default SearchBar;