import { openLink } from "./methods"
import profile from "./profile"

const contact = {
    label: `Get in touch`,
    heading: `Let’s Build Something Great`,
    description: `I’m open to collaborations, freelance work, and interesting product ideas. Reach out anytime and I’ll get back to you.`,
    button: {
        label: 'Email Me',
        onClick: () => openLink(`mailto:${profile.email}?subject=Hello`)
    },
    designAndBuiltBy: `Designed & Built By ${profile.name}`,
    handleBuiltByClick: () => openLink(profile.githubUrl)
}

export default contact
