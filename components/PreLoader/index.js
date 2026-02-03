import React, { useEffect, useState } from 'react'
import profile from '../../utils/profile';

const PreLoader = () => {
    const [loader, handleLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            const root = document.documentElement;
            root.style.setProperty('--scrollBarWidth', '8px');
            handleLoader(false)
        }, 3000)
    }, [])

    return (
        <div className={`ai-pre-loader ${loader ? 'ai-pre-loader-enabled' : 'ai-pre-loader-disabled'}`}>
            <div className='ai-pre-loader-boarder' />
            <div className='ai-pre-loader-container'>
                <div className='ai-pre-loader-name'>
                    {profile.name}
                </div>
            </div>
        </div>
    )
}

PreLoader.propTypes = {}

export default PreLoader
