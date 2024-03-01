import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [buttonStyle, setButtonStyle] = useState({});
  const navigate = useNavigate();

  const handleHover = (event) => {
    const button = event.target;
    const boundingRect = button.getBoundingClientRect();
    const x = Math.random() * (window.innerWidth - boundingRect.width);
    const y = Math.random() * (window.innerHeight - boundingRect.height);

    setButtonStyle({
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      transition: '0.2s'
    });
  };

  const handleYesClick = () => {
    navigate('/thanks');
  };

  return (
    <div className="page">
      <p className="question">Will you be my Valentine?</p>
      <div className="button-container">
        <button onClick={handleYesClick} className="button">Yes</button>
        <button id="no-btn" style={buttonStyle} className="button" onMouseOver={handleHover}>
          No 
        </button>
      </div>
    </div>
  );
};

export default MainPage;