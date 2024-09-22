"use client";

import { useState, useEffect, useRef } from "react";

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event: { key: string; }) => {
      if (event.key === "k" || event.key === "K") {
        if (document.activeElement !== inputRef.current) {
          setShowSearch((prevShowSearch) => !prevShowSearch);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      {showSearch && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <input
            type="text"
            placeholder="Search anything..."
            className="search-bar rounded bg-white p-2 shadow-lg shadow-white/20"
            ref={inputRef}
          />
        </div>
      )}
    </>
  );
};

export default SearchBar;
