import React from 'react';

const User = ({ user, repos }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4 mb-4 text-black dark:text-white">
      <div className="flex items-center space-x-4">
        <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full" />
        <div>
          <h2 className="text-2xl font-bold">{user.name || user.login}</h2>
          <p className="text-gray-500 dark:text-gray-400">Created at {new Date(user.created_at).toLocaleDateString()}</p>
          <p className="text-gray-700 dark:text-gray-300">{user.followers} Followers</p>
          <p className="text-gray-700 dark:text-gray-300">{user.following} Following</p>
          <p className="text-gray-700 dark:text-gray-300">{user.public_repos} Repositories</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Repositories:</h3>
        {repos.length > 0 ? (
          <ul>
            {repos.map((repo) => (
              <li key={repo.id} className="bg-gray-100 dark:bg-gray-700 p-2 mb-2 rounded">
                <a href={repo.html_url} className="text-blue-600 dark:text-blue-400 hover:underline">
                  {repo.name}
                </a>
                <p className="text-gray-600 dark:text-gray-400">Stars: {repo.stargazers_count}</p>
                <p className="text-gray-600 dark:text-gray-400">Issues: {repo.open_issues_count}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">No repositories found</p>
        )}
      </div>
    </div>
  );
};

export default User;
