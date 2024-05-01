import { useGlobalContext } from "./context";

const SearchForms = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          name="search"
          placeholder="cats"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForms;
