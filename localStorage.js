let characters = [
    {
        img: `Images/David.png`,
        charName: 'David Martinez',
        charAge: '18',
        backstory: `David Martinez grew up in Santo Domingo. After losing his mother and being expelled from Arasaka Academy, he installed a stolen Sandevistan and joined the Edgerunners. He quickly rose in skill and reputation, becoming one of Night City’s most dangerous mercs.`,
        aff1: 'Edgerunners',
        aff2: 'Afterlife Mercenaries',
        aff3: 'Arasaka Academy (formerly)'
    },

    {
        img: `Images/Lucy.png`,
        charName: 'Lucy (Lucyna Kushinada)',
        charAge: '20',
        backstory: `Lucy is a gifted netrunner who escaped Arasaka’s secret labs as a child. She hides her past behind a calm, mysterious persona. After meeting David, she joins the Edgerunners and slowly begins to trust again, dreaming of one day reaching the Moon.`,
        aff1: 'Edgerunners',
        aff2: 'Arasaka Black Ops (formerly)',
        aff3: 'Netrunner Division (formerly)'
    },

    {
        img: `Images/Rebecca.png`,
        charName: 'Rebecca',
        charAge: '20s',
        backstory: `Rebecca is a chaotic, reckless solo known for her dual-wielded firepower and unpredictable attitude. Despite her wild nature, she's fiercely loyal — especially to David — and is one of the crew's most reliable fighters.`,
        aff1: 'Edgerunners',
        aff2: 'Afterlife Mercenaries',
        aff3: 'N/A'
    },

    {
        img: `Images/Maine.png`,
        charName: 'Maine',
        charAge: '30s',
        backstory: `Maine is the original leader of the Edgerunners crew — a seasoned merc with heavy cyberware and strong leadership skills. He mentors David early on, but eventually falls victim to cyberpsychosis due to excessive cyber-enhancements.`,
        aff1: 'Edgerunners (Leader)',
        aff2: 'Afterlife Mercenaries',
        aff3: 'N/A'
    },

    {
        img: `Images/Faraday.png`,
        charName: 'Faraday',
        charAge: '40s',
        backstory: `Faraday is a smooth-talking, manipulative fixer who works for Militech but plays multiple sides at once. Calculating and untrustworthy, he uses the Edgerunners for his own gain, often arranging high-risk gigs that push crews to their limits.`,
        aff1: 'Militech (Contracted)',
        aff2: 'Fixer',
        aff3: 'Edgerunners (Employer)'
    },

    {
        img: `Images/Adam.png`,
        charName: 'Adam Smasher',
        charAge: 'Cybernetic / Unknown',
        backstory: `Adam Smasher is a fully augmented killing machine working for Arasaka. After replacing nearly all of his body with cybernetics, he became one of the most feared solos in Night City. Cold, emotionless, and ruthless, he serves as Arasaka’s ultimate enforcer.`,
        aff1: 'Arasaka',
        aff2: 'Full-Borg Solo',
        aff3: 'Afterlife Legend'
    }
];

let users = [
    {
        username: 'student@eui.edu.eg',
        password: '123456',
        profName: 'Saif Hossam',
        profAge: '21',
        profBio: 'User did not set a bio',
        aff1: 'Eui',
        aff2: 'Ui/Ux',
        aff3: 'N/A'
    }
]

localStorage.setItem("localUsers", JSON.stringify(users));

