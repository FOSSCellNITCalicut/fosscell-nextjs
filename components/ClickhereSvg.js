import React, { useState } from 'react';

const ClickHereSvg = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const svgStyle = {
    transition: 'fill 0.3s',
  };

  if (isHovered) {
    svgStyle.fill = 'white';
  } else {
    svgStyle.fill = '#FA8860';
  }

  const textStyle = {
    fill: isHovered ? '#FA8860' : 'black',
    transition: 'fill 0.3s',
  };

  return (
    <svg
      width="170"
      height="60"
      viewBox="0 0 180 40"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <path d="M0 0H150L180 40H0V0Z" style={svgStyle} />
      <text x="40%" y="50%" textAnchor="middle" dominantBaseline="middle" style={textStyle}>
        Read More
      </text>
    </svg>
  );
};

export default ClickHereSvg;
