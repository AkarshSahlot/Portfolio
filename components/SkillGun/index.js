
import React, { useState, useEffect, useRef } from 'react';
import Gun from './Gun';

const SkillGun = ({ items = [] }) => {
    const [bullets, setBullets] = useState([]);
    const [recoil, setRecoil] = useState(false);

    useEffect(() => {
        if (!items.length) return;

        let index = 0;
        const interval = setInterval(() => {
            const skill = items[index % items.length];
            const newBullet = {
                id: Date.now(),
                label: skill.label || skill,
                randomY: Math.random() * 60 + 20, // Should be within container height (approx 100-200px)
            };

            setRecoil(true);
            setTimeout(() => setRecoil(false), 100);

            setBullets((prev) => {
                // Keep only recent bullets to avoid memory leaks if component stays mounted long
                const now = Date.now();
                return [...prev.filter(b => now - b.id < 3000), newBullet];
            });

            index++;
        }, 600);

        return () => clearInterval(interval);
    }, [items]);

    return (
        <div className="ai-skill-gun-container">
            <div className={`ai-skill-gun ${recoil ? 'recoil' : ''}`}>
                <Gun />
            </div>
            <div className="ai-skill-bullets-container">
                {bullets.map((bullet) => (
                    <div
                        key={bullet.id}
                        className="ai-skill-bullet"
                        style={{
                            top: `${bullet.randomY}px`,
                        }}
                    >
                        {bullet.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillGun;
