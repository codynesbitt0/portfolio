import { ncsu, persistent, salesforce } from '../../public/assets/assets';

export const name = 'Cody Nesbitt';

export const description =
    'Passionate and creative software engineer with 4 years experience in web app development. I love learning new technologies and diving into new and exciting projects headfirst.';

export const experiences = [
    {
        title: 'Software Engineer',
        company_name: 'Salesforce',
        icon: salesforce,
        //iconBg: 'var(--theme-color-darkcolor)',
        date: 'April 2020 - May 2023',
        points: [
            'Developed and implemented full-stack features for the In-App Guidance platform using Java, SOQL, and Javascript with Aura and LWC frameworks',
            'Created implementation plans based on Figma designs for customer-requested features and presented them to management and team members',
        ],
    },
    {
        title: 'Software Engineer',
        company_name: 'Persistent Systems',
        icon: persistent,
        //iconBg: 'var(--theme-color-darkcolor)',
        date: 'August 2019 - April 2020',
        points: [
            'Developed and implemented full-stack features for the SaaS portion of IBM’s Rational product suite using Javascript, Java, Angular, Bootstrap, Node.js, Docker, Kubernetes, and OpenShift',
            'Created and maintained a build deployment and automated end-to-end testing home page using Selenium, Bash, and PHP',
        ],
    },
    {
        title: 'Software Development Intern',
        company_name: 'Persistent Systems',
        icon: persistent,
        //iconBg: 'var(--theme-color-darkcolor)',
        date: 'May 2018 - August 2019',
        points: [
            "Contributed to the implementation of full-stack features for the SaaS portion of IBM's Rational product suite using Javascript, Java, Angular, Bootstrap, Node.js, Docker, Kubernetes, and OpenShift",
            'Automated end-to-end testing processes using Selenium',
        ],
    },
    {
        title: 'Bachelor of Computer Science',
        company_name: 'North Carolina State University',
        icon: ncsu,
        //iconBg: 'var(--theme-color-darkcolor)',
        date: 'May 2019',
        points: [],
    },
];
