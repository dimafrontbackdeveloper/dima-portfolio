// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Dmytro Chorniy",
    // og: "I'm a computer science senior with hefty experience in app development. Previously worked as a web developer at my university, where I built tools to support both students and educators. Currently, I'm developing an educational AI tool aimed at redefining how college students interact with AI.",
    message: "I'm a passionate and results-driven full-stack developer who loves solving complex problems and delivering high-quality products.    Detail-oriented, goal-focused and always striving for excellence - I enjoy the process of turning ideas into something people actually use and appreciate.",
    basedLocation: "Vinnytsia, Ukraine",
    resumeLink: "https://docs.google.com/document/d/1SbrVYkxU0aK6aWhISwFKnjWNkry46shPNHI654Dv7Pw/edit?usp=sharing", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/recentportrait.jpg'
}

const socialMediaLinks = {
    github: "https://github.com/dimafrontbackdeveloper",
    linkedin: "https://www.linkedin.com/in/dimachorniydev/",
    telegram: "https://t.me/dimafullstack",
    stackoverflow: "",
    phone: "tel:+380967299393"
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "Motivated Full-Stack Web Developer with a strong foundation in computer engineering and a passion for building scalable, user-centric applications.Currently pursuing a Bachelor's degree in Computer Science at university, while holding a college diploma in Computer Engineering.Multiple - time winner of international programming olympiads, which helped develop strong problem - solving skills, algorithmic thinking, and the ability to perform under pressure.Focused on delivering clean, maintainable, and high - performance code.Always eager to learn new technologies and contribute to real - world projects that make an impact."
    ], // Separated items are paragraphs
    techStack: [
        "HTML",
        "CSS",
        "SCSS",
        "Tailwind",
        "Gulp",
        "JavaScript",
        "TypeScript",
        "React",
        "NextJS",
        "Node.js",
        "NestJs",
        "Postgres",
        "Git,Github",
        "Postman",
        "Strapi,Heleket",
        "npm,pnpm,yarn",
    ],
    photo1Link: "images/portrait1.jpeg",
    photo2Link: "images/portrait2.jpg",
    photo3Link: "images/portrait3.jpg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Full-stack Developer",
        company: {
            name: "BG Games",
            link: "https://bg-games-studio.com/"
        },
        duration: "June 2024 - November 2025",
        content: [
            {
                sectionHeader: "",
                bulletPoints: [
                    "Developed and maintained modern web applications using Next.js (App Router, Server Components, SSR/SSG) and NestJS backend",
                    "Implemented responsive UI, complex forms, real-time features, and state management (Redux Toolkit)",
                    "Integrated cryptocurrency payment processing via Heleket, including wallet connections, transaction handling, and confirmation flows",
                    "Worked extensively with cryptocurrency-related projects: built features for crypto dashboards, wallet integrations, token displays, price tracking, and secure transaction UIs",
                    "Built scalable REST APIs with NestJS, integrated authentication (JWT), role-based access control, and payment/webhook endpoints",
                    "Collaborated closely with designers and product team to deliver pixel-perfect, user-friendly interfaces for crypto and fintech products",
                    "Wrote clean, typed code (TypeScript), implemented unit/integration tests (Jest, React Testing Library)"
                ]
            }
        ],
        hashtags: [
            "HTML",
            "CSS",
            "SCSS",
            "Tailwind",
            "TypeScript",
            "React",
            "NextJs",
            "NodeJs",
            "NestJs",
            "Posgtres",
        ]
    },
    {
        position: "Freelance",
        company: {
            name: "Freelance",
            link: ""
        },
        duration: "November 2022 – May 2024",
        content: [
            {
                sectionHeader: "",
                bulletPoints: [
                    "Developed and delivered custom websites and landing pages for clients using modern HTML, CSS (Tailwind CSS / SCSS), and JavaScript/TypeScript",
                    "Implemented complex UI components, multi-page structures, interactive elements (forms, sliders, modals, accordions) and optimized for mobile devices",
                    "Optimized website performance: achieved high Lighthouse scores (90+), reduced load times through image optimization, lazy loading, and minification",
                    "Collaborated directly with clients: gathered requirements, proposed design solutions, iterated on feedback, and deployed projects to production (Vercel, Netlify, hosting providers)",
                ]
            }
        ],
        hashtags: [
            "HTML",
            "CSS",
            "SCSS",
            "Gulp",
            "TypeScript",
            "Javascript",
        ]
    },
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "Debank.com",
        yearCompleted: "",
        description: "DeBank is a popular DeFi portfolio tracker and on-chain analytics platform, primarily focused on Ethereum and EVM-compatible blockchains.Users connect their wallets to view a comprehensive overview of their assets, DeFi positions, NFTs.",
        techStack: "TypeScript, NextJs, Tailwind, NestJs, Postgres",
        links: [
            {
                label: "",
                type: "external",
                url: "https://debank.com/"
            },
        ],
        imageLink: "images/webapp-1.png",
        alignLeft: false
    },
    {
        projectName: "Zerion",
        yearCompleted: "",
        description: "Zerion Explore is the discovery and analytics section of the Zerion crypto wallet and portfolio tracker.It allows users to browse trending tokens, DeFi protocols, NFT collections, and popular smart contracts across multiple blockchains(primarily Ethereum and L2s).",
        techStack: "TypeScript, NextJs, Tailwind, NestJs, Postgres",
        links: [
            {
                label: "",
                type: "external",
                url: "https://app.zerion.io"
            }
        ],
        imageLink: "images/webapp-2.png",
        alignLeft: true
    },
    {
        projectName: "Zapper",
        yearCompleted: "",
        description: "Zapper is a powerful DeFi dashboard and portfolio tracker that helps users monitor, manage, and interact with their cryptocurrency assets across multiple blockchains.Main purpose It provides a unified view of your wallet: tokens, DeFi positions (staking, liquidity pools, lending), NFTs, yield farming rewards, and overall portfolio performance. Users connect their wallet (MetaMask, WalletConnect, etc.) to see real-time data without manual input.",
        techStack: "TypeScript, NextJs, Tailwind, NestJs, Postgres",
        links: [
            {
                label: "",
                type: "external",
                url: "https://zapper.xyz"
            }
        ],
        imageLink: "images/webapp-3.png",
        alignLeft: false
    },
    {
        projectName: "Social Network Pet Project",
        yearCompleted: "",
        description: "Personal full-stack social media platform built from scratch.Users can create profiles, post content, follow others, like/ comment, and engage in real - time feeds.Tech stack: Next.js(frontend), NestJS(backend), TypeScript, MongoDB. Focus: clean architecture, responsive UI, real - time updates, and authentication.",
        techStack: "TypeScript, NextJs, NestJs, MongoDB",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/dimafrontbackdeveloper/social-media-front"
            },
            {
                label: "",
                type: "git",
                url: "https://github.com/dimafrontbackdeveloper/social-media-back"
            }
        ],
        imageLink: "images/webapp-4.png",
        alignLeft: true
    },
    {
        projectName: "YouTube Pet Project",
        yearCompleted: "",
        description: "Personal recreation of a video-sharing platform inspired by YouTube Shorts.Features: video upload, short- form feed, likes / comments, subscriptions, responsive player.",
        techStack: "TypeScript, NextJs, NestJs, PostgreSQL",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/dimafrontbackdeveloper/youtube-front"
            },
            {
                label: "",
                type: "git",
                url: "https://github.com/dimafrontbackdeveloper/youtube-back"
            }
        ],
        imageLink: "images/webapp-5.png",
        alignLeft: false
    },
    {
        projectName: "Admin Panel Pet Project",
        yearCompleted: "",
        description: "Personal admin panel built for managing users, content, and settings. Features: user management, role-based access, analytics overview, CRUD operations.",
        techStack: "TypeScript, NextJs, NestJs, MongoDB, Tailwind",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/dimafrontbackdeveloper/admin-panel-front"
            },
            {
                label: "",
                type: "git",
                url: "https://github.com/dimafrontbackdeveloper/admin-panel-back"
            }
        ],
        imageLink: "images/webapp-6.png",
        alignLeft: true
    },
    {
        projectName: "Flipsy",
        yearCompleted: "",
        description: "A modern, fully responsive landing page built during my freelance period.Created entirely with HTML, SCSS, Gulp, and vanilla JavaScript — no frameworks.",
        techStack: "Html, Scss, Gulp, JS",
        links: [
            {
                label: "",
                type: "explore",
                url: "https://flipsy.com/"
            },
        ],
        imageLink: "images/other-2.png",
        alignLeft: false
    },
    {
        projectName: "Aneemate",
        yearCompleted: "",
        description: "A modern, fully responsive landing page built during my freelance period.Created entirely with HTML, SCSS, Gulp, and vanilla JavaScript — no frameworks.",
        techStack: "Html, Scss, Gulp, JS",
        links: [
            {
                label: "",
                type: "explore",
                url: "https://aneemate.com/"
            },
        ],
        imageLink: "images/other-9.png",
        alignLeft: true
    },
    {
        projectName: "PixelVerse",
        yearCompleted: "",
        description: "A modern, fully responsive landing page built during my freelance period.Created entirely with HTML, SCSS, Gulp, and vanilla JavaScript — no frameworks.",
        techStack: "Html, Scss, Gulp, JS",
        links: [
            {
                label: "",
                type: "explore",
                url: "https://pixelverse.xyz/"
            },
        ],
        imageLink: "images/other-10.png",
        alignLeft: false
    },
    {
        projectName: "Aura",
        yearCompleted: "",
        description: "A modern, fully responsive landing page built during my freelance period.Created entirely with HTML, SCSS, Gulp, and vanilla JavaScript — no frameworks.",
        techStack: "Html, Scss, Gulp, JS",
        links: [
            {
                label: "",
                type: "explore",
                url: "https://aura-cyan.vercel.app/"
            },
            {
                label: "",
                type: "git",
                url: "https://github.com/dimafrontbackdeveloper/aura"
            },
        ],
        imageLink: "images/aura.png",
        alignLeft: true
    },
    {
        projectName: "Rocket",
        yearCompleted: "",
        description: "A modern, fully responsive landing page built during my freelance period.Created entirely with HTML, SCSS, Gulp, and vanilla JavaScript — no frameworks.",
        techStack: "Html, Scss, Gulp, JS",
        links: [
            {
                label: "",
                type: "explore",
                url: "https://rocket4-0.vercel.app/"
            },
            {
                label: "",
                type: "git",
                url: "https://github.com/dimafrontbackdeveloper/rocket4.0"
            },
        ],
        imageLink: "images/other-1.png",
        alignLeft: false
    },
    {
        projectName: "ServerScamp",
        yearCompleted: "",
        description: "A modern, fully responsive landing page built during my freelance period.Created entirely with HTML, SCSS, Gulp, and vanilla JavaScript — no frameworks.",
        techStack: "Html, Scss, Gulp, JS",
        links: [
            {
                label: "",
                type: "explore",
                url: "https://server-scamp.vercel.app/"
            },
            {
                label: "",
                type: "git",
                url: "https://github.com/dimafrontbackdeveloper/server-scamp"
            },
        ],
        imageLink: "images/other-4.png",
        alignLeft: true
    },
    {
        projectName: "Prosox",
        yearCompleted: "",
        description: "A modern, fully responsive landing page built during my freelance period.Created entirely with HTML, SCSS, Gulp, and vanilla JavaScript — no frameworks.",
        techStack: "Html, Scss, Gulp, JS",
        links: [
            {
                label: "",
                type: "explore",
                url: "https://prosox.vercel.app/"
            },
            {
                label: "",
                type: "git",
                url: "https://github.com/dimafrontbackdeveloper/prosox"
            },
        ],
        imageLink: "images/other-8.png",
        alignLeft: false
    },
    {
        projectName: "Hybrid",
        yearCompleted: "",
        description: "A modern, fully responsive landing page built during my freelance period.Created entirely with HTML, SCSS, Gulp, and vanilla JavaScript — no frameworks.",
        techStack: "Html, Scss, Gulp, JS",
        links: [
            {
                label: "",
                type: "explore",
                url: "https://hybrid-gold.vercel.app/"
            },
            {
                label: "",
                type: "git",
                url: "https://github.com/dimafrontbackdeveloper/hybrid"
            },
        ],
        imageLink: "images/other-6.png",
        alignLeft: true
    },
    {
        projectName: "Mealsheets",
        yearCompleted: "",
        description: "A modern, fully responsive landing page built during my freelance period.Created entirely with HTML, SCSS, Gulp, and vanilla JavaScript — no frameworks.",
        techStack: "Html, Scss, Gulp, JS",
        links: [
            {
                label: "",
                type: "explore",
                url: "https://mealsheets.vercel.app/"
            },
            {
                label: "",
                type: "git",
                url: "https://github.com/dimafrontbackdeveloper/mealsheets"
            },
        ],
        imageLink: "images/other-7.png",
        alignLeft: false
    },
    {
        projectName: "Anker",
        yearCompleted: "",
        description: "A modern, fully responsive landing page built during my freelance period.Created entirely with HTML, SCSS, Gulp, and vanilla JavaScript — no frameworks.",
        techStack: "Html, Scss, Gulp, JS",
        links: [
            {
                label: "",
                type: "explore",
                url: "https://anker-one.vercel.app/"
            },
            {
                label: "",
                type: "git",
                url: "https://github.com/dimafrontbackdeveloper/anker"
            },
        ],
        imageLink: "images/other-5.png",
        alignLeft: true
    },
    {
        projectName: "FishMint",
        yearCompleted: "",
        description: "A modern, fully responsive landing page built during my freelance period.Created entirely with HTML, SCSS, Gulp, and vanilla JavaScript — no frameworks.",
        techStack: "Html, Scss, Gulp, JS",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/dimafrontbackdeveloper/fish-mint"
            },
        ],
        imageLink: "images/other-3.png",
        alignLeft: false
    },

]

const archiveLink = "https://github.com/mimaishel?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Reach out if you have any questions or want to collaborate on a project.",
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "dimafrontbackdev@gmail.com", // email takes precedance
            other: ""
        },
        responseTimeMessage: ""
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}