import profile from './profile'

const mySelf = {
    heading: 'About Me',
    paragraphs: [
        `
        I’m ${profile.name}, a ${profile.role} who enjoys building clean, responsive, and fast web experiences.`,
        `
        I care about thoughtful UI, accessible UX, and shipping reliable products. Lately, I’ve been focused on the Solana space and open-source maintenance.`,
        `
        You can find my latest work and experiments on GitHub at @${profile.githubUsername}.`,
        `
        I’m always learning, iterating, and improving—whether that’s performance tuning, polishing details, or exploring new tools.`,
        `
        Here are some of the technologies I work with regularly:
        `,
    ],
    techList1: [
        'JavaScript / TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'REST APIs',
        'Git / GitHub',
    ],
    techList2: [
        'CSS / Sass',
        'Responsive UI',
        'Performance Optimization',
        'UI Design Systems',
        'Vercel',
        'CI / CD',
    ],
    skillsIcons: [
        { label: 'Solana' },
        { label: 'TypeScript' },
        { label: 'React' },
        { label: 'Next.js' },
        { label: 'Node.js' },
        { label: 'REST APIs' },
        { label: 'GitHub' },
        { label: 'Sass' },
    ],
    image: 'https://avatars.githubusercontent.com/AkarshSahlot',
}

export default mySelf
