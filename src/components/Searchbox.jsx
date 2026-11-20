const Searchbox = () => {
  return (
    <form className="search-form" action="hhttps://www.google.com/search">
      <input
        type="text"
        name="q"
        autoComplete="off"
        autoFocus
        placeholder="Search anything"
        className="search-input"
      />
    </form>
  );
};

export default Searchbox;
