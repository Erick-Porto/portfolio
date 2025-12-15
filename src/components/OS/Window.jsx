import Draggable from 'react-draggable';
import './Window.css';

const Window = ({ id, title, children, onClose, zIndex, onFocus, isActive, defaultPosition }) => {
  return (
    <Draggable 
      handle=".window-titlebar"
      defaultPosition={defaultPosition}
      onMouseDown={onFocus}
    >
      <div 
        className={`window-container ${isActive ? 'active' : ''}`} 
        style={{ zIndex: zIndex }}
        onClick={onFocus}
      >
        <div className={`window-titlebar ${isActive ? 'active-bar' : ''}`}>
          <div className="window-controls">
             <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="close-btn"></button>
             <button className="min-btn"></button>
             <button className="max-btn"></button>
          </div>
          <span className="window-title">{title}</span>
        </div>
        <div className="window-content">
          {children}
        </div>
      </div>
    </Draggable>
  );
};

export default Window;