
import React from 'react';

const Gun = ({ className }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 200 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: 'auto', maxWidth: '200px' }}
        >
            {/* Main Body */}
            <path
                d="M40 40 H160 V70 H60 L40 90 V40 Z"
                fill="#2D2D2D"
                stroke="#00f260"
                strokeWidth="2"
            />
            {/* Barrel */}
            <rect x="160" y="45" width="40" height="15" fill="#1a1a1a" stroke="#00f260" strokeWidth="2" />

            {/* Handle */}
            <path d="M40 70 L20 100 H50 L60 70 H40 Z" fill="#1F1F1F" stroke="#00f260" strokeWidth="2" />

            {/* Accents/Glow */}
            <rect x="70" y="50" width="80" height="5" fill="#00f260" fillOpacity="0.8" />
            <circle cx="150" cy="55" r="3" fill="#ff0055" />

            {/* Trigger */}
            <path d="M55 70 Q 50 80 55 85" stroke="#00f260" strokeWidth="2" fill="none" />
        </svg>
    );
};

export default Gun;
