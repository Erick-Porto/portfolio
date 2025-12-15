import { useState } from 'react';
import DesktopIcon from './components/OS/DesktopIcon';
import Window from './components/OS/Window';
import Taskbar from './components/OS/Taskbar';
import FileManager from './components/Apps/FileManager';
import WebBrowser from './components/Apps/WebBrowser';
import './App.css';

function App() {
  const [openWindows, setOpenWindows] = useState([]);
  
  const [activeWindowId, setActiveWindowId] = useState(null);
  
  const [zIndexCounter, setZIndexCounter] = useState(100);

  
  const bringToFront = (id) => {
    setActiveWindowId(id);
    setZIndexCounter(prev => prev + 1);
    
    setOpenWindows(prevWindows => prevWindows.map(win => 
      win.id === id ? { ...win, zIndex: zIndexCounter + 1 } : win
    ));
  };

  const openWindow = (appType, props = {}) => {
    const newId = Date.now();
    const currentCount = openWindows.length;
    
    const offset = (currentCount % 10) * 30 + 50;

    const newWindow = {
      id: newId,
      type: appType,
      title: appType === 'file-manager' ? 'Projetos (~/Desktop)' : props.title || 'Navegador',
      props: props,
      defaultPosition: { x: offset, y: offset }, 
      zIndex: zIndexCounter + 1
    };

    setOpenWindows([...openWindows, newWindow]);
    setActiveWindowId(newId);
    setZIndexCounter(prev => prev + 1);
  };

  const closeWindow = (id) => {
    setOpenWindows(openWindows.filter(window => window.id !== id));
    if (activeWindowId === id) setActiveWindowId(null);
  };

  const renderAppContent = (window) => {
    switch (window.type) {
      case 'file-manager':
        return <FileManager onOpenFile={(repo) => openWindow('browser', { url: repo.html_url, title: repo.name })} />;
      case 'browser':
        return <WebBrowser url={window.props.url} />;
      default:
        return <div>App not found</div>;
    }
  };

  return (
    <div className="desktop-container">
      <div className="desktop-icons-area">
        <DesktopIcon 
          label="Meus Projetos" 
          icon="📂" 
          onDoubleClick={() => openWindow('file-manager')} 
        />
        <DesktopIcon 
          label="Sobre Mim.txt" 
          icon="📄" 
          onDoubleClick={() => alert('Implemente um bloco de notas simples!')} 
        />
      </div>

      <div className="windows-area">
        {openWindows.map(window => (
          <Window 
            key={window.id} 
            id={window.id}
            title={window.title} 
            zIndex={window.zIndex} 
            isActive={window.id === activeWindowId} 
            defaultPosition={window.defaultPosition} 
            onClose={() => closeWindow(window.id)}
            onFocus={() => bringToFront(window.id)} 
          >
            {renderAppContent(window)}
          </Window>
        ))}
      </div>

      <Taskbar 
        windows={openWindows} 
        activeId={activeWindowId}
        onTaskClick={bringToFront} 
      />
    </div>
  );
}

export default App;