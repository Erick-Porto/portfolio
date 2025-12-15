import './DesktopIcon.css';

const DesktopIcon = ({ label, icon, onDoubleClick }) => {
  return (
    <div className="desktop-icon" onDoubleClick={onDoubleClick}>
      <span className="icon-emoji">{icon}</span>
      <span className="icon-label">{label}</span>
    </div>
  );
};

export default DesktopIcon;