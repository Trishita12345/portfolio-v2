import { Experience } from '@/types/experience';

export const experiences: Experience[] = [
    {
        company: 'Cloverbay Technologies',
        role: 'SDE-I',
        duration: 'Dec 2022 – Present',
        points: [
            'Developed a multi-tenant hotel booking platform with theming and multilingual support',
            'Built an e-Gift Card system with payment integration, increasing sales by ~25%',
            'Implemented JWT-based authentication with role-based access control (RBAC)',
            'Improved API performance by ~30% using caching and asynchronous processing',
        ],
    },
    {
        company: 'Cognizant',
        role: 'Associate Software Engineer',
        duration: 'Aug 2020 – Nov 2022',
        points: [
            'Migrated legacy systems to Spring Boot and React, improving scalability and maintainability',
            'Designed and developed REST APIs and integrated frontend components',
            'Collaborated with cross-functional teams to redesign workflows and improve system efficiency',
        ],
    },
];