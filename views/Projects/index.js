import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import WindowScreen from '../../components/WindowScreen'
import HoverImage from '../../components/HoverImage'
import ViewsTitle from '../../components/ViewsTitle';
import { openLink } from '../../utils/methods';

const WindowImage = ({ src }) => (
    <HoverImage
        showFilter
        imageClassName='ai-image'
        src={src}
    />
)

const getSide = (index) => index % 2 ? 'left' : 'right'

const SingleProject = (props) => {
    const { image, index } = props
    const side = getSide(index);
    return (
        <div className='ai-projects-single'>
            <div className='row'>
                <div className='col-6 d-none d-lg-block'>
                    <div className=''>
                        <WindowScreen containerClassName={`ai-projects-image-container ai-projects-image-container-${side}`}>
                            <WindowImage src={image} />
                        </WindowScreen>
                    </div>
                </div>
                <div className={`col-12 col-lg-6 d-flex align-items-center ${side === 'right' ? 'order-first' : ''}`}>
                    <ProjectTextSide {...props} />
                </div>
            </div>
        </div>
    )
}

const ProjectTextSide = (props) => {
    const { label, title, description, techs, index, image, url } = props
    const side = getSide(index);
    return (
        <div
            data-aos={`fade-down-${side}`}
            className={`ai-projects-text-side ai-projects-text-side-${side}`}>
            <div
                data-aos={`zoom-in-${side}`}
                className='ai-projects-text-featured'>{label}</div>
            <div
                data-aos={`zoom-in-${side}`}
                className='ai-projects-text-title'
                onClick={() => url && openLink(url)}
                style={{ cursor: url ? 'pointer' : 'default' }}
            >
                {title}
            </div>
            <div
                data-aos={`zoom-in-${side}`}
                className='ai-projects-text-description'>
                {description}
                <div className='mt-4 d-block d-lg-none'>
                    <WindowScreen containerClassName={`ai-text-image-container`}>
                        <WindowImage src={image} />
                    </WindowScreen>
                </div>
            </div>
            <div
                data-aos={`zoom-in-${side}`}
                className='ai-projects-text-tecs'>
                {techs.map((tech, i) => `${tech} ${techs.length - 1 !== i ? ' | ' : ''}`)}
            </div>
        </div>
    )
}

const toTitle = (name = '') => name
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const Projects = ({ data: {
    heading,
    list,
    githubUsername,
    limit = 6,
} }) => {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!githubUsername) return
        setLoading(true)
        fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`)
            .then((res) => res.json())
            .then((json) => {
                const items = Array.isArray(json) ? json : []
                const filtered = items
                    .filter((repo) => !repo.fork)
                    .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
                    .slice(0, limit)
                    .map((repo) => ({
                        label: 'GitHub Repository',
                        title: toTitle(repo.name),
                        description: repo.description || 'A project from my GitHub profile.',
                        techs: [
                            repo.language || 'JavaScript',
                            `★ ${repo.stargazers_count || 0}`,
                            `Forks ${repo.forks_count || 0}`,
                        ],
                        image: `https://opengraph.githubassets.com/1/${repo.full_name}`,
                        url: repo.html_url,
                    }))
                setRepos(filtered)
            })
            .catch(() => setRepos([]))
            .finally(() => setLoading(false))
    }, [githubUsername, limit])

    const projectsList = useMemo(() => {
        if (repos.length) return repos
        return list || []
    }, [repos, list])
    return (
        <div className='ai-projects'>
            <div className='container'>
                <div className='ai-projects-container'>
                    <ViewsTitle text={heading} />
                    <div className='row justify-content-center'>
                        {(projectsList || []).map((project, i) => (
                            <SingleProject
                                key={i}
                                index={i}
                                {...project}
                            />
                        ))}
                        {!projectsList?.length && loading && (
                            <div className='ai-projects-text-title'>Loading repositories...</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

Projects.propTypes = {}

export default Projects
