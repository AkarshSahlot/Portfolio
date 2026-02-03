import { openLink } from "./methods"
import profile from "./profile"

const sideElements = {
    links: {
        github: profile.githubUrl,
        linkedin: profile.linkedinUrl,
    },
    rightCta: {
        label: 'github.com/AkarshSahlot',
        onClick: () => openLink(profile.githubUrl),
    },
    contactItems: [
        { label: profile.email, onClick: () => openLink(`mailto:${profile.email}?subject=Hello`) },
        { label: profile.phone, onClick: () => openLink(`tel:${profile.phone}`) },
    ],
    handleIconClick: (icon) => {
        const links = {
            github: profile.githubUrl,
            linkedin: profile.linkedinUrl,
        }
        openLink(links[icon])
    }
}

export default sideElements
