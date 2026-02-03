import { openLink, scrollTo } from "./methods";
import profile from "./profile";


const header = {
    menus: [
        { title: 'Home', id: 'home' },
        { title: 'About', id: 'my-self' },
        { title: 'Experience', id: 'experience' },
        { title: 'Projects', id: 'my-work' },
        { title: 'Contact', id: 'contact' },
    ],
    rightBtn: {
        label: 'GitHub Profile',
        onClick: () => openLink(profile.githubUrl)
    },
    logo: {
        src: `https://avatars.githubusercontent.com/${profile.githubUsername}`,
        alt: profile.name
    },
    handleIconClick: () => scrollTo('home'),
    handleItemSelect: (menu) => scrollTo(menu.id),
}

export default header
