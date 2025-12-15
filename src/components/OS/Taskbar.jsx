import './Taskbar.css';

const Taskbar = ({ windows, activeId, onTaskClick }) => {
  return (
    <div className="taskbar">
      <div className="start-button">⚛️ Iniciar</div>
      <div className="tasks-list">
        {windows.map(win => (
          <div 
            key={win.id}
            className={`task-item ${win.id === activeId ? 'active' : ''}`}
            onClick={() => onTaskClick(win.id)}
          >
            <span style={{marginRight: 5}}>
                {win.type === 'file-manager' ? '📁' : '🌐'}
            </span>
            {win.title}
          </div>
        ))}
      </div>
      <div className="taskbar-clock">
          12:00 PM
      </div>
    </div>
  );
};

export default Taskbar;