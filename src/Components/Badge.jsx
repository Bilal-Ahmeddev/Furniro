// src/components/ui/Badge.jsx
import React from 'react';

const Badge = ({ text, color = 'blue' }) => {
  return (
    <span style={{ backgroundColor: color, padding: '5px 10px', borderRadius: '12px', color: 'white' }}>
      {text}
    </span>
  );
};

export default Badge;
