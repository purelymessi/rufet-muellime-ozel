import React, { useState, useEffect } from 'react';
import Container from './components/Container';
import Navbar from './components/Navbar';
import SearchUsers from './components/SearchUsers';
import User from './components/User';

const App = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleSearch = (username) => {
    setUsername(username);
  };

  useEffect(() => {
    if (username) {
      fetch(`https://api.github.com/users/${username}`)
        .then((userResponse) => {
          if (!userResponse.ok) {
           new Error('User not found');
          }
          return userResponse.json();
        })
        .then((userData) => {
          return fetch(userData.repos_url).then((reposResponse) => {
            if (!reposResponse.ok) {
             new Error('Repositories not found');
            }
            return reposResponse.json().then((reposData) => {
              setUser(userData);
              setRepos(reposData);
              
            });
          });
        })
        .catch((error) => {
          setUser(null);
          setRepos([]);
          
        });
    }
  }, [username]); 

  return (
    <div>
      <Navbar />
      <Container>
        <SearchUsers onSearch={handleSearch} />
        {user && <User user={user} repos={repos} />}
      </Container>
    </div>
  );
};

export default App;
