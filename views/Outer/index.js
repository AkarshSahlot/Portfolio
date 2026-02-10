import React from 'react'
import Gooery from '../../components/GooeryAnimation'
import DecryptText from '../../components/DecryptText'
import PropTypes from 'prop-types'


import SkillGun from '../../components/SkillGun'

const Outer = ({ data: {
    title1,
    title2,
    decrypTexts,
    desciption,
    button
}, skills }) => {
    return (
        <div className='ai-outer'>
            <div className='container'>
                <div className='ai-outer-container d-flex justify-content-between align-items-center'>
                    <div className='ai-outer-text'>
                        <div className='ai-outer-heading'>
                            {title1}
                        </div>
                        <div className='ai-outer-heading'>
                            {title2}
                        </div>
                        <div className='ai-outer-heading2'>
                            <DecryptText
                                values={decrypTexts}
                            />
                        </div>
                        <div className='ai-outer-description'>
                            {desciption}
                        </div>

                        {/* Skill Gun Animation */}
                        <div style={{ marginTop: '20px', marginBottom: '20px', width: '100%', maxWidth: '600px' }}>
                            <SkillGun items={skills} />
                        </div>

                        <div className='ai-outer-contact'>
                            <button onClick={button?.onClick} className='ai-button'>
                                {button?.label}
                            </button>
                        </div>
                    </div>
                    <div className='ai-outer-gooery'>
                        <Gooery />
                    </div>
                </div>
            </div>
        </div>
    )
}

Outer.propTypes = {}

export default Outer