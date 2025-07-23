import React from 'react';

const DeleteButton = ({ onClick, style = {} }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'transparent',
        border: '1px solid #dc3545',
        color: '#dc3545',
        borderRadius: '4px',
        padding: '4px 8px',
        fontSize: '12px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        marginLeft: '10px',
        ...style
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#dc3545';
        e.target.style.color = 'white';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.color = '#dc3545';
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
