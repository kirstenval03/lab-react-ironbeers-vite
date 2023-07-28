import { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input
        name="search"
        value={searchTerm}
        type="text"
        onChange={handleInputChange}
      />
    </>
  );
}

export default Search;
