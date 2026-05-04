import { Project } from '@/types/project';

export const projects: Project[] = [
    {
        title: 'E-commerce Platform (Microservices)',
        description:
            'Built a scalable e-commerce system using microservices architecture with event-driven communication and reactive APIs.',
        tech: [
            'Spring Boot',
            'WebFlux',
            'Kafka',
            'Redis',
            'Elasticsearch',
            'Docker',
            'Zipkin',
            'Logstash',
            'Zustand / Redux',
            'Next.js',
        ],
        github: 'https://github.com/Trishita12345/fullstack-e-commerce-app',
        demo: 'https://loomandlume.shop/',
        highlight:
            'Designed 10+ microservices with API Gateway, Kafka-based event processing, and JWT authentication',
        category: 'fullstack',
    },

    {
        title: 'TaskVerse – Task Management System',
        description:
            'Designed REST APIs for task lifecycle management with clean architecture and structured exception handling.',
        tech: ['Spring Boot', 'React', 'PostgreSQL', 'Docker', 'CI/CD'],
        github:
            'https://github.com/Trishita12345/TaskManagementSystem_UI',
        highlight:
            'Implemented layered architecture with validation and domain-driven design principles',
        category: 'fullstack',
    },
    {
        title: 'Personal Portfolio Website',
        description:
            'A personal portfolio website built with React and Mantine showcasing projects, skills, and experience.',
        tech: ['React', 'Mantine', 'TypeScript', 'Vite'],
        github: 'https://github.com/Trishita12345/portfolio-v2',
        demo: 'https://trishitamajumder.com/',
        highlight:
            'Designed a responsive and visually appealing portfolio with smooth animations and interactive elements',
        category: 'frontend',
    }
];