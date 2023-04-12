import './SearchInput.scss';

const SearchInput = () => {
  return (
    <form className="search-form">
      <input className="search-input" type="text" placeholder="Search for any word..." />
      <span className="error-msg">Whoops, can’t be empty…</span>
    </form>
  );
};

export default SearchInput;
