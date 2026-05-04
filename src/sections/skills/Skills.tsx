"use client";
import {
    Container,
    Title,
    SimpleGrid,
    Card,
    Text,
    Stack,
    Group,
    ThemeIcon,
    Badge,
} from '@mantine/core';
import { skills } from '@/constants/skills';

function SkillItem({ skill }: any) {
    const Icon = skill.icon;

    return (
        <Group justify="space-between" style={{ padding: '6px 0' }}>
            <Group>
                <ThemeIcon
                    variant="gradient"
                    gradient={{ from: 'violet', to: 'pink' }}
                    radius="xl"
                >
                    <Icon size={16} />
                </ThemeIcon>

                <Text c="gray.2">{skill.name}</Text>
            </Group>

            <Badge
                variant="light"
                color={skill.level === 'expert' ? 'violet' : skill.level === 'good' ? 'blue' : 'gray'}
            >
                {skill.level}
            </Badge>
        </Group>
    );
}

function SkillCard({ title, items }: any) {
    return (
        <Card
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
            <Stack>
                <Title order={4}>{title}</Title>

                <Stack gap="xs">
                    {items.map((skill: any) => (
                        <SkillItem key={skill.name} skill={skill} />
                    ))}
                </Stack>
            </Stack>
        </Card>
    );
}

export default function Skills() {
    return (
        <section
            id="skills"
            style={{
                position: 'relative',
                padding: '120px 0',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'linear-gradient(to bottom, rgba(99,102,241,0.08), transparent)',
                    zIndex: 0,
                }}
            />
            <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
                <Stack gap="xl">
                    <Stack gap="xs">
                        <Title
                            order={2}
                            style={{
                                background: 'linear-gradient(90deg, #a855f7, #ec4899)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Skills
                        </Title>
                        <Text size="sm" c="gray.4">
                            Strong focus on backend systems, scalable architecture, and modern frontend development
                        </Text>
                    </Stack>

                    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 3 }}>
                        <SkillCard title="Frontend" items={skills.frontend} />
                        <SkillCard title="Backend" items={skills.backend} />
                        <SkillCard title="Architecture" items={skills.architecture} />
                        <SkillCard title="Data & Messaging" items={skills.data} />
                        <SkillCard title="DevOps" items={skills.devops} />
                        <SkillCard title="Tools" items={skills.tools} />
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