// MouseTrail.js
import React, { useState, useEffect } from 'react';
import './MouseTrail.css';

const MouseTrail = ({ targetBlock }) => {
  const [trail, setTrail] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const timestamp = Date.now();

    const newTrail = [
      ...trail,
      {
        x: clientX,
        y: clientY,
        id: timestamp,
        size: 100,
      },
    ];

    setTrail(newTrail);
    setIsActive(true);

    clearTimeout(clearTrailTimeoutId);
    clearTrailTimeoutId = setTimeout(() => {
      setIsActive(false);
      setTrail([]);
    }, 2000);
  };

  let clearTrailTimeoutId;

  useEffect(() => {
    if (targetBlock) {
      targetBlock.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (targetBlock) {
        targetBlock.removeEventListener('mousemove', handleMouseMove);
      }
      clearTimeout(clearTrailTimeoutId);
    };
  }, [targetBlock, trail]);

  // Обновляем размеры точек каждый кадр
  useEffect(() => {
    if (!isActive) return;

    const updateSize = () => {
      setTrail((prevTrail) => {
        const newTrail = prevTrail.map((point) => {
          const newSize = Math.max(point.size -4 , 0); // Уменьшаем размер
          return { ...point, size: newSize };
        });

        return newTrail.filter((point) => point.size > 0); // Удаляем точки с нулевым размером
      });
    };

    // Используем requestAnimationFrame для обновления каждый кадр
    const animate = () => {
      updateSize();
      if (isActive) {
        requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      clearTimeout(clearTrailTimeoutId);
    };
  }, [isActive]);

  return (
    <div className={`mouse-trail ${isActive ? 'active' : ''}`}>
      <div className="grainy-background" />
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="trail-dot"
          style={{
            left: point.x,
            top: point.y,
            width: `${point.size}px`,
            height: `${point.size}px`,
            opacity: point.size / 100,
          }}
        />
      ))}
    </div>
  );
};

export default MouseTrail;
