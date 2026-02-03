import React, { useEffect } from 'react';


export const dartPalettes = [
    {
        layer1: '#0a2463',
        layer2: '#3e92cc',
        layer3: '#fffaff',
        layer4: '#d8315b',
    },
    {
        layer1: '#222831',
        layer2: '#393E46',
        layer3: '#00ADB5',
        layer4: '#EEEEEE',
    },
    {
        layer1: '#100720',
        layer2: '#31087B',
        layer3: '#FA2FB5',
        layer4: '#FFC23C',
    },
]

const litePalettes = [
    {
        layer1: '#f7f6f2',
        layer2: '#0f172a',
        layer3: '#0f172a',
        layer4: '#f97316',
    },
    {
        layer1: '#0b1320',
        layer2: '#111827',
        layer3: '#e2e8f0',
        layer4: '#38bdf8',
    },
    {
        layer1: '#fff7ed',
        layer2: '#1f2937',
        layer3: '#1f2937',
        layer4: '#22c55e',
    },
    {
        layer1: '#0f172a',
        layer2: '#1e293b',
        layer3: '#e5e7eb',
        layer4: '#eab308',
    },
];

export const getPelettes = () => {
    return litePalettes
}

function FullPageScroll() {

    useEffect(() => {
        window.addEventListener("scroll", scrollColor);
        scrollColor()
    }, []);

    const changeColors = (color) => {
        const root = document.documentElement;
        root.style.setProperty('--themeColor1', color.layer1);
        root.style.setProperty('--themeColor2', color.layer2);
        root.style.setProperty('--themeColor3', color.layer3);
        root.style.setProperty('--themeColor4', color.layer4);
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta?.setAttribute && meta?.content !== color.layer2) {
            meta.setAttribute('content', color.layer2)
        }
    }


    const getColorIndex = () => {
        const height = window.innerHeight;
        const currentLocation = window.pageYOffset;
        const scrollPosition = currentLocation + (height / 2)
        const views = document.getElementsByClassName('view-element');
        let index = 0
        if (!views) return index
        if (scrollPosition < views[0].scrollHeight) return index
        for (let i = 0; i < views.length; i++) {
            const current = views[i]
            const after = views[i + 1]
            if (!after) {
                index = i
                break
            }
            if (scrollPosition > current.offsetTop && scrollPosition < after?.offsetTop) {
                index = i
                break
            }
        }
        return index
    }

    const scrollColor = () => {
        const index = getColorIndex()
        const pelettes = getPelettes()
        changeColors(pelettes[index] || pelettes[0])
    }

    return (
        <div />
    )
}



export default FullPageScroll;
