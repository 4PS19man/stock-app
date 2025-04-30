import React, { useState } from 'react';
import './Sidebar.css'; 

function Sidebar({ indexes, onSelect }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (indexName) => {
    setActiveIndex(indexName);
    onSelect(indexName);
  };

  return (
    <div className="sidebar">
      <h2>Indexes</h2>
      <div className="index-list">
        {indexes.map((name, i) => (
          <div
            key={i}
            className={`sidebar-item ${activeIndex === name ? 'active' : ''}`}
            onClick={() => handleClick(name)}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
