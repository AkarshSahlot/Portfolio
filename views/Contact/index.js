import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParallax } from 'react-scroll-parallax';
import Star from '../../components/SVGs/Star';
import GitFork from '../../components/SVGs/GitFork';
import profile from '../../utils/profile';

const Contact = ({ data: {
    label,
    heading,
    description,
    button,
    handleBuiltByClick,
    designAndBuiltBy,
} }) => {

    const [githubInfo, setGitHubInfo] = useState({
        followers: null,
        publicRepos: null,
    });

    useEffect(() => {
        fetch(`https://api.github.com/users/${profile.githubUsername}`)
            .then(response => response.json())
            .then(json => {
                const { followers, public_repos } = json;
                setGitHubInfo({
                    followers,
                    publicRepos: public_repos,
                });
            })
            .catch(e => console.error(e));
    }, []);

    const { ref } = useParallax({
        easing: 'easeIn',
        translateX: [-50, 0]
    });
    return (
        <div className='ai-contact'>
            <div
                ref={ref}
                className='ai-contact-zebra-img'
                style={{
                    backgroundImage: `url(${'/assets/arrow-sample.svg'})`,
                }}>

            </div>
            <div className='ai-contact-box'>
                <div className='container flex-center flex-column'>
                    <div className='ai-contact-box-width'>
                        <div className='ai-contact-label'>{label}</div>
                        <div className='ai-contact-title'>{heading} </div>
                        <div className='ai-contact-text'>{description}</div>
                        <div className='ai-contact-button'>
                            <button onClick={button?.onClick} className='ai-button'>
                                {button?.label}
                            </button>
                        </div>
                        <div onClick={handleBuiltByClick} className='ai-contact-git-section'>
                            <div>{designAndBuiltBy}</div>
                            {githubInfo.followers !== null && githubInfo.publicRepos !== null && (
                                <div>
                                    <span>
                                        <Star />
                                        <>{' '}{githubInfo.followers.toLocaleString()} Followers</>
                                    </span>
                                    {' '}
                                    <span>
                                        <GitFork />
                                        <>{' '}{githubInfo.publicRepos.toLocaleString()} Repos</>
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Contact.propTypes = {}

export default Contact
