import './SearchBar.css'


const SearchBar = () => {
  return (
    <div className='search-bar'>
      <input type='text' placeholder='Search for persons/trend' />
      <button type='submit' className='search-button'>
        <img src='./public/icons8-search-52.png' alt='search'/>
      </button>
    </div>
  )
}

export default SearchBar;
