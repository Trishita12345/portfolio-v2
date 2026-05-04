import {
    IconBrandReact,
    IconBrandTypescript,
    IconBrandJavascript,
    IconBrandHtml5,
    IconBrandCss3,
    IconBrandRedux,
    IconBrandDocker,
    IconBrandGit,
    IconDatabase,
    IconServer,
    IconApi,
} from '@tabler/icons-react';

export const skills = {
    frontend: [
        { name: 'React', icon: IconBrandReact, level: 'expert' },
        { name: 'Next.js (SSR)', icon: IconBrandReact, level: 'good' },
        { name: 'Redux', icon: IconBrandRedux, level: 'good' },
        { name: 'TypeScript', icon: IconBrandTypescript, level: 'expert' },
        { name: 'JavaScript', icon: IconBrandJavascript, level: 'expert' },
        { name: 'HTML/CSS', icon: IconBrandHtml5, level: 'expert' },
    ],

    backend: [
        { name: 'Java', icon: IconServer, level: 'expert' },
        { name: 'Spring Boot', icon: IconServer, level: 'expert' },
        { name: 'Spring Security', icon: IconServer, level: 'familiar' },
        { name: 'REST APIs', icon: IconApi, level: 'expert' },
        { name: 'Microservices', icon: IconServer, level: 'expert' },
        { name: 'WebFlux', icon: IconServer, level: 'familiar' },
    ],

    architecture: [
        { name: 'JWT Authentication', icon: IconServer, level: 'expert' },
        { name: 'API Gateway', icon: IconServer, level: 'familiar' },
        { name: 'Event-Driven Systems', icon: IconServer, level: 'good' },
        { name: 'Distributed Systems', icon: IconServer, level: 'familiar' },
    ],

    data: [
        { name: 'PostgreSQL', icon: IconDatabase, level: 'good' },
        { name: 'Redis', icon: IconDatabase, level: 'familiar' },
        { name: 'Elasticsearch', icon: IconDatabase, level: 'familiar' },
        { name: 'Kafka', icon: IconServer, level: 'familiar' },
    ],

    devops: [
        { name: 'Docker', icon: IconBrandDocker, level: 'familiar' },
        { name: 'Docker Compose', icon: IconBrandDocker, level: 'familiar' },
        { name: 'Liquibase', icon: IconDatabase, level: 'familiar' },
    ],

    tools: [
        { name: 'Git', icon: IconBrandGit, level: 'expert' },
        { name: 'Postman', icon: IconApi, level: 'expert' },
        { name: 'JIRA', icon: IconServer, level: 'familiar' },
    ],
};