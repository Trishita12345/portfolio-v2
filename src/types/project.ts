export type Project = {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
    highlight: string;
    category: 'frontend' | 'backend' | 'fullstack';
};