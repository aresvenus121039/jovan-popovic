const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'National University of Singapore',
                degree: 'BS, Computer Science',
                detail: "Bachelor's Degree in Computer Science from National University of Singapore.",
                year: '2014 - 2018'
            }
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Freelancing',
                role: 'Full Stack and AI Engineer',
                // url: '#',
                desc: 'Built a modern trading bot platform with Next.js frontend, Django REST backend, and PostgreSQL database. Styled the UI using TailwindCSS and Flowbite-React. Designed and deployed a Hummingbot-based trading engine using Python. Developed Tweeba, a cross-platform social media app using UniApp and Flutter, supporting real-time feeds, user auth, image uploads, and notifications — deployed via HBuilderX.',
                year: '11/2023 - Present',
                location: 'United States'
            },
            {
                id: 2,
                title: 'onchain.vc',
                role: 'Full Stack Web3 Blockchain Lead Engineer',
                // url: '#',
                desc: 'As a lead engineer, Leading the charge in web3 and crypto development, specializing in DeFi projects and trading. Developed a decentralized application ( DApp) using a modern tech stack that included Next.js for the fullstack, Prisma for database management ORM, wagmi React hook for Ethereum application, Tailwind CSS for styling, Rainbowkit for wallet connect, viem for interacting with smart contract, and wallet authentication for secure user authentication.',
                year: '11/2021 - 10/2024',
                location: 'United Kingdom'
            },
            {
                id: 3,
                title: 'Alteryx',
                role: 'Full Stack Developer',
                // url: '#',
                desc: "I worked there as a Senior Full Stack Developer, I implemented a web application used by different organizations to manage their payment systems. Also Migrated an application toward the cloud, reducing hosting costs for the client by 50%. I worked on performance enhancement of an existing mobile app which got tremendous improvement after optimization. ",
                year: '08/2018 - 09/2021',
                location: 'United States'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
