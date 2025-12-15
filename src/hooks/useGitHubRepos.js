// src/hooks/useGitHubRepos.js
import { useState, useEffect } from 'react';

// SUBSTITUA PELO SEU USUÁRIO GITHUB
const GITHUB_USERNAME = 'erick-porto'; 

const useGitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`)
      .then(res => res.json())
      .then(data => {
        // Opcional: filtrar apenas repositórios públicos e não forks
        // const myRepos = data.filter(repo => !repo.fork && repo.visibility === 'public');
        setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao buscar repos:", err);
        setLoading(false);
      });
  }, []);

  return { repos, loading };
};

export default useGitHubRepos;