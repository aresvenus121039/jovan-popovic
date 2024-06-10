const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Iwate University',
                degree: 'BS, Computer System Engineering',
                detail: "Bachelor's Degree in Computer System Engineering from Iwate University.",
                year: '2010 - 2014'
            }
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Aconcagua Software',
                role: 'Full Stack Web3 Developer',
                url: '#',
                desc: 'As a full stack web3 developer, I worked on Amberfi project and Fiducia`s project, a CEX platform. I implemented NextAuth, WalletAuth and built in Prisma for Amberfi. Also implemented staking, swap, deposit/withdraw and transfer on BSC, Ethereum, Tron and Bitcoin.',
                year: '10/2022 - 02/2024',
                location: 'United States'
            },
            {
                id: 2,
                title: 'Alteryx',
                role: 'Lead Frontend Engineer',
                url: '#',
                desc: 'As a lead frontend engineer, I Led a team of 4 5 front-end developers in the design, development and maintenance of web applications, ensuring high-quality user experiences and efficient workflows. Mainly collaborated closely with product managers, designers and backend developers to translate business requirements into scalable and performant frontend solutions',
                year: '03/2020 - 05/2022',
                location: 'United States'
            },
            {
                id: 3,
                title: 'Georgia',
                role: 'Senior Full Stack Developer',
                url: '#',
                desc: "I worked there as a Senior Full Stack Developer, I implemented a web application used by different organizations to manage their payment systems. Also Migrated an application toward the cloud, reducing hosting costs for the client by 50%. I worked on performance enhancement of an existing mobile app which got tremendous improvement after optimization. ",
                year: '01/2017 - 11/2019',
                location: 'United States'
            },
            {
                id: 4,
                title: 'ANNAI',
                role: 'Associate Fullstack Engineer',
                url: '#',
                desc: "As a Associate Full Stack Developer, I developed websites and mobile applications for over 50 clients.Helped multiple clients finalize problematic projects by providing the needed expertise to bring projects to release. Also contributed to projects using a custom PHP boilerplate with HTML, CSS, jQuery, and Sass. I integrated social media tools and SDKs into various websites and mobile applications.",
                year: '10/2014 - 10/2016',
                location: 'Japan'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
