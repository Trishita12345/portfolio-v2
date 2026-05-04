'use client';

import {
    Container,
    Title,
    Text,
    Button,
    Group,
    Stack,
    Grid,
    Image,
} from '@mantine/core';

export default function Hero() {
    const scrollToProjects = () => {
        const el = document.querySelector('#projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Dots pattern */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                        'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    zIndex: 0,
                }}
            />
            {/* Floating Plus */}
            <div
                style={{
                    position: 'absolute',
                    top: '80px',
                    left: '60px',
                    zIndex: 0,
                    opacity: 0.6,
                }}
            >
                <svg width="40" height="40" viewBox="0 0 24 24">
                    <path
                        d="M12 5v14M5 12h14"
                        stroke="url(#grad1)"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <defs>
                        <linearGradient id="grad1">
                            <stop offset="0%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Floating Circle */}
            <div

                style={{
                    position: 'absolute',
                    bottom: '80px',
                    right: '80px',
                    zIndex: 0,
                    opacity: 0.4,
                    animation: 'float 6s ease-in-out infinite',
                }}
            >
                <svg width="120" height="120">
                    <circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke="url(#grad2)"
                        strokeWidth="2"
                        fill="none"
                    />
                    <defs>
                        <linearGradient id="grad2">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <Container size="lg" py={{ base: 60, md: 120 }} style={{ position: 'relative', zIndex: 1 }}>
                <Grid align="center">
                    {/* LEFT: TEXT */}
                    <Grid.Col
                        span={{ base: 12, md: 6 }}
                        order={{ base: 2, md: 1 }}
                    >
                        <Stack gap="xl">
                            <Stack gap="sm">
                                <Text c="gray.3" size="lg">
                                    Hi, I’m
                                </Text>

                                <Title order={1} size="3rem" c="white">
                                    Trishita Majumder
                                </Title>
                            </Stack>

                            <Title order={2} fw={500} style={{ color: '#a855f7' }}>
                                Full Stack Developer <br /> React • Spring Boot • Microservices
                            </Title>
                            <Text size="lg" c="gray.4" maw={500}>
                                Full Stack Developer with 5+ years of experience building scalable web applications, REST APIs, and microservices. Specialized in Spring Boot, event-driven systems, and secure authentication (JWT/OTP).
                            </Text>
                            <Text size="sm" c="gray.5">
                                Experienced in Kafka, Redis, Elasticsearch, and distributed system design.
                            </Text>

                            <Group>
                                <Button
                                    size="md"
                                    radius="md"
                                    variant="gradient"
                                    gradient={{ from: 'violet', to: 'pink', deg: 90 }}
                                    onClick={scrollToProjects}
                                    style={{
                                        transition: 'transform 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    View Projects
                                </Button>

                                <Button
                                    size="md"
                                    radius="md"
                                    variant="outline"
                                    color="white"
                                    component="a"
                                    href="/Trishita_Majumder_CV_2026.pdf"
                                    target="_blank"
                                    style={{
                                        transition: 'transform 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    Download Resume
                                </Button>
                            </Group>
                        </Stack>
                    </Grid.Col>

                    {/* RIGHT: IMAGE */}
                    <Grid.Col
                        span={{ base: 12, md: 6 }}
                        order={{ base: 1, md: 2 }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {/* Outer Gradient Ring */}
                            <div
                                style={{
                                    width: '320px',
                                    height: '320px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                                    padding: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 0 30px rgba(168,85,247,0.3)',
                                }}
                            >
                                {/* Inner Circle */}
                                <div
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        background: '#111',
                                    }}
                                >
                                    <img
                                        src="/TrishitaImage.png"
                                        alt="Trishita"
                                        style={{
                                            width: '100%',
                                            maxWidth: '320px',
                                            aspectRatio: '1 / 1',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Grid.Col>
                </Grid>
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