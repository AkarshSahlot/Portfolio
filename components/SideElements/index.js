

import React from 'react'
import GitHub from '../SVGs/GitHub'
import LinkedIn from '../SVGs/LinkedIn'
import Twitter from '../SVGs/Twitter'

const SideElementsItem = ({ items, position }) => {
    return (
        <div className={`ai-side-elements-container ai-side-elements-${position}`} >
            {(items || []).map((item, i) => (
                <div key={i} className='ai-side-elements-item'>
                    {item}
                </div>
            ))}
            <div className='ai-side-elements-line' />
        </div>
    )
}


const SideElements = ({ data: {
    links,
    rightCta,
    contactItems,
    handleIconClick,
} }) => {
    const leftItems = []
    if (links?.github) {
        leftItems.push(<GitHub onClick={() => handleIconClick('github')} key="GitHub" width={20} height={20} />)
    }
    if (links?.linkedin) {
        leftItems.push(<LinkedIn onClick={() => handleIconClick('linkedin')} key="LinkedIn" width={20} height={20} />)
    }
    if (links?.twitter) {
        leftItems.push(<Twitter onClick={() => handleIconClick('twitter')} key="Twitter" width={20} height={20} />)
    }
    return (
        <div className='ai-side-elements'>
            {/* left side  */}
            <SideElementsItem
                position="left"
                items={leftItems}
            />

            {/* right side  */}
            <SideElementsItem
                position="right"
                items={[
                    <div key="website" className='ai-side-elements-text'>
                        <div onClick={rightCta?.onClick}>{rightCta?.label}</div>
                        {(contactItems || []).map((item, i) => (
                            <div
                                key={`${item.label}-${i}`}
                                onClick={item.onClick}
                                className='ai-side-elements-subtext'
                            >
                                {item.label}
                            </div>
                        ))}
                    </div>,
                ]}
            />
        </div>
    )
}

SideElements.propTypes = {}

export default SideElements
