import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
function SearchBar({ searchText, onChange, className }) {
  const dispatch = useDispatch();

  return (
    <div className={`inline-block ${className}`}>
      <div className="input-group  relative flex flex-wrap items-stretch w-full ">
        <input
          type="search"
          value={searchText}
          placeholder={"Search..."}
          onChange={onChange}
          className="input input-md input-bordered  w-full max-w-xs"
        />
      </div>
    </div>
  );
}

export default SearchBar;
