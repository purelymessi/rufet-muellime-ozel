import React, { useState } from 'react';

const SearchUsers = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <div className="bg-white shadow-md rounded p-4 my-4">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          className="border p-2 w-full rounded-l"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-r"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchUsers;
