import { openLink } from "./methods"
import profile from "./profile"

const outer = {
    title1: `Hi, I'm`,
    title2: `${profile.name},`,
    decrypTexts: [
        profile.role,
        'I build fast, modern web apps',
        'React • Next.js • Node.js',
        'Solana ecosystem builder',
        'Clean UI, solid UX, real value',
    ],
    desciption: `I build end-to-end products for the web and the Solana ecosystem, focusing on performance, clarity, and delightful interactions. I love shipping projects and learning in public.`,
    button: {
        label: 'Connect on LinkedIn',
        onClick: () => openLink(profile.linkedinUrl)
    }
}

export default outer
