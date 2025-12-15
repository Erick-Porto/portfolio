import './WebBrowser.css';

const WebBrowser = ({ url }) => {
  return (
    <div className="browser-container">
      <div className="browser-toolbar">
        <div className="browser-actions">
           <span className="nav-btn">⬅</span>
           <span className="nav-btn">➡</span>
           <span className="nav-btn">↻</span>
        </div>
        
        <div className="address-bar">
           <span className="lock-icon">🔒</span>
           <input type="text" value={url} readOnly className="url-input" />
        </div>
      </div>

      <div className="browser-viewport">
        <iframe 
          src={url} 
          title="Browser Simulation"
          className="browser-iframe"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
    </div>
  );
};

export default WebBrowser;