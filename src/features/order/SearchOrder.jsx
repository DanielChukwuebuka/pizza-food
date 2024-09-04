import React, { useState } from "react";
import { useNavigate, useNavigation } from "react-router";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="serarch order"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        className="rounded full  bg bg-yellow-100 px-4 py-2 text-sm
         placeholder:text-stone-400 w-28 sm:w-64 sm:focus:w-72 transition-all duration-300
          focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50"
        />
      </form>
    </div>
  );
}

export default SearchOrder;
