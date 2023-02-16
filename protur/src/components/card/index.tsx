import React, { useState } from 'react';

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [glowStyle, setGlowStyle] = useState({});

  const handleMouseEnter = () => {
    const card = document.querySelector('.card');
    const bounds = card.getBoundingClientRect();
    setIsHovered(true);
    document.addEventListener('mousemove', handleMouseMove);
    setGlowStyle({
      backgroundImage: `radial-gradient(circle at ${bounds.width / 2}px ${bounds.height / 2}px, #ffffff55, #0000000f)`
    });
  };

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const card = document.querySelector('.card');
    const bounds = card.getBoundingClientRect();
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    };
    const distance = Math.sqrt(center.x**2 + center.y**2);
    setRotation(Math.log(distance) * 2);

    card.style.transform = `
      scale3d(1, 1, 1)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${rotation}deg
      )
    `;
  };
  function addMouseMoveListener(element) {
    let bounds;
  
    function rotateToMouse(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      }
      const distance = Math.sqrt(center.x**2 + center.y**2);
    
      element.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance)* 2}deg
        )
      `;
    
      element.querySelector('.glow').style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width/2}px
          ${center.y * 2 + bounds.height/2}px,
          #ffffff55,
          #0000000f
        )
      `;
    }
  
    element.addEventListener('mouseenter', () => {
      bounds = element.getBoundingClientRect();
      element.addEventListener('mousemove', rotateToMouse);
    });
  
    element.addEventListener('mouseleave', () => {
      element.removeEventListener('mousemove', rotateToMouse);
      element.style.transform = '';
      element.querySelector('.glow').style.backgroundImage = '';
    });
  }
  const handleMouseLeave = () => {
    const card = document.querySelector('.card');
    addMouseMoveListener(card);
    setIsHovered(false);
    setGlowStyle({});
    card.style.transform = '';
    document.removeEventListener('mousemove', handleMouseMove);
  };

  return (
    <div className="contentCard">
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }} // añadimos esta línea
    >
      <div className="glow" style={{ position: 'absolute', width: '100%', height: '100%', ...glowStyle }} />
      <div className="content">
      </div>
    </div>
    </div>
  );
};

export default Card;