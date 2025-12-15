import useGitHubRepos from '../../hooks/useGitHubRepos';
import './FileManager.css';

const FileManager = ({ onOpenFile }) => {
  const { repos, loading } = useGitHubRepos();

  if (loading) return <div style={{padding: 20}}>Carregando arquivos...</div>;

  return (
    <div className="file-manager-container">
      <div className="toolbar">Caminho: ~/Desktop/Projetos</div>
      <div className="file-list">
        {repos.map(repo => (
          <div 
            key={repo.id} 
            className="file-item"
            onDoubleClick={() => onOpenFile(repo)}
          >
            <span className="file-icon">📄</span>
            <span className="file-name">{repo.name}.git</span>
             {repo.language && <span className="file-meta">({repo.language})</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileManager;