import React, { useState } from 'react';
import Container from './components/Container';
import Navbar from './components/Navbar';
import SearchUsers from './components/SearchUsers';
import User from './components/User';

const App = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      if (!userResponse.ok) {
        throw new Error('User not found');
      }
      const userData = await userResponse.json();

      const reposResponse = await fetch(userData.repos_url);
      if (!reposResponse.ok) {
        throw new Error('Repositories not found');
      }
      const reposData = await reposResponse.json();

      setUser(userData);
      setRepos(reposData);
      setError(null); // Clear any previous errors
    } catch (error) {
      setUser(null);
      setRepos([]);
      setError(error.message); // Set the error message
    }
  };

  return (
    <div>
      <Navbar />
      <Container>
        <SearchUsers onSearch={handleSearch} />
        {error && <div className="error">{error}</div>} {/* Display error if exists */}
        {user && <User user={user} repos={repos} />}
      </Container>
    </div>
  );
};

export default App;
