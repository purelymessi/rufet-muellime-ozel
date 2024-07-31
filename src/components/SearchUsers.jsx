import React, { useState } from 'react';

const SearchUsers = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4 my-4 text-black dark:text-white">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          className="border p-2 w-full rounded-l bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 dark:bg-blue-700 text-white p-2 rounded-r"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchUsers;
