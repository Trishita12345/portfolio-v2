"use client";
import { Container, Title, Stack, Card, Text, List, Group, ThemeIcon } from '@mantine/core';
import { experiences } from '@/constants/experience';
import { IconBriefcase } from '@tabler/icons-react';

function ExperienceCard({ exp }: any) {
    return (
        <Card withBorder radius="md" padding="lg">
            <Stack gap="xs">
                <Group gap="sm" align="center">
                    <ThemeIcon
                        variant="gradient"
                        gradient={{ from: 'violet', to: 'pink' }}
                        radius="xl"
                    >
                        <IconBriefcase size={16} />
                    </ThemeIcon>

                    <Title order={4} c="white">
                        {exp.role}
                    </Title>
                </Group>

                <Text fw={600} c="violet.3">
                    {exp.company}
                </Text>

                <Text size="sm" c="gray.5">
                    {exp.duration}
                </Text>

                <List
                    spacing="xs"
                    mt="sm"
                    styles={{
                        item: {
                            color: '#d1d5db',
                            lineHeight: 1.6,
                        },
                    }}
                >
                    {exp.points.map((point: string, index: number) => (
                        <List.Item key={index}>{point}</List.Item>
                    ))}
                </List>
            </Stack>
        </Card>
    );
}

export default function Experience() {
    return (
        <section
            id="experience"
            style={{
                position: 'relative',
                padding: '120px 0',
            }}
        ><div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'linear-gradient(to bottom, rgba(168,85,247,0.06), transparent)',
                    zIndex: 0,
                }}
            />
            <Container size="lg" py={{ base: 40, md: 80 }}>
                <Stack gap="lg">
                    <Title
                        order={2}
                        style={{
                            background: 'linear-gradient(90deg, #a855f7, #ec4899)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Experience
                    </Title>
                    <Text size="sm" c="gray.4">
                        Building scalable systems and APIs and UI
                    </Text>

                    {experiences.map((exp) => (
                        <ExperienceCard key={exp.company} exp={exp} />
                    ))}
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