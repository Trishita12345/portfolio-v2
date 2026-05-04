'use client';

import { useState } from 'react';
import {
    Container,
    Title,
    SimpleGrid,
    Card,
    Text,
    Stack,
    Badge,
    Group,
    Button,
    SegmentedControl,
    ActionIcon,
} from '@mantine/core';
import { projects } from '@/constants/projects';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

export default function Projects() {
    const [filter, setFilter] = useState('all');

    const filteredProjects =
        filter === 'all'
            ? projects
            : projects.filter((p) => p.category === filter);

    return (
        <section id="projects">
            <div
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    opacity: 0.2,
                }}
            >
                <svg width="80" height="80">
                    <circle cx="40" cy="40" r="30" stroke="#a855f7" fill="none" />
                </svg>
            </div>
            <Container size="lg" py={{ base: 40, md: 80 }}>
                <Stack gap="xl">
                    <Title
                        order={2}
                        style={{
                            background: 'linear-gradient(90deg, #a855f7, #ec4899)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Projects
                    </Title>

                    {/* Filter */}
                    <SegmentedControl
                        value={filter}
                        onChange={setFilter}
                        data={[
                            { label: 'All', value: 'all' },
                            { label: 'Frontend', value: 'frontend' },
                            { label: 'Backend', value: 'backend' },
                            { label: 'Full Stack', value: 'fullstack' },
                        ]}
                    />

                    <SimpleGrid cols={{ base: 1, sm: 2 }}>
                        {filteredProjects.map((project) => (
                            <Card
                                key={project.title}
                                withBorder
                                radius="lg"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow =
                                        '0 10px 30px rgba(168,85,247,0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '';
                                }}
                            >

                                <Stack gap={'lg'}>
                                    {project.demo && (
                                        <Badge color="green" variant="light">
                                            Live
                                        </Badge>
                                    )}
                                    <Group justify="space-between" align="center">
                                        <Title order={4}>{project.title}</Title>

                                        <Group gap="xs">
                                            {project.github && (
                                                <ActionIcon
                                                    variant="subtle"
                                                    color="violet"
                                                    style={{ transition: 'transform 0.2s ease' }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'scale(1.2)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = 'scale(1)';
                                                    }}
                                                    component="a"
                                                    href={project.github}
                                                    target="_blank"
                                                >
                                                    <IconBrandGithub size={16} />
                                                </ActionIcon>
                                            )}

                                            {project.demo && (
                                                <ActionIcon
                                                    variant="subtle"
                                                    color="violet"
                                                    style={{ transition: 'transform 0.2s ease' }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'scale(1.2)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = 'scale(1)';
                                                    }}
                                                    component="a"
                                                    href={project.demo}
                                                    target="_blank"
                                                >
                                                    <IconExternalLink size={16} />
                                                </ActionIcon>
                                            )}
                                        </Group>
                                    </Group>
                                    <Text size="sm">{project.description}</Text>
                                    <Text size="sm" c="violet.3">
                                        ⚡ {project.highlight}
                                    </Text>
                                    <Group>
                                        {project.tech.map((t) => (
                                            <Badge key={t}>{t}</Badge>
                                        ))}
                                    </Group>
                                </Stack>

                            </Card>
                        ))}
                    </SimpleGrid>
                </Stack>
                <div
                    style={{
                        marginTop: '60px',
                        height: '1px',
                        background:
                            'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
                    }}
                />
            </Container>
        </section>
    );
}