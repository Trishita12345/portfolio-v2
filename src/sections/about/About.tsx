import { Container, Title, Text, Stack, Group } from '@mantine/core';

export default function About() {
    return (
        <section
            id="about"
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
                        'linear-gradient(to bottom, transparent, rgba(168,85,247,0.05))',
                    zIndex: 0,
                }}
            />
            <Container size={"lg"} style={{ position: 'relative', zIndex: 1 }}>
                <Stack gap="md">
                    {/* Section Title */}
                    <Title order={2} c={"white"}>About Me</Title>
                    <Text size="sm" c="violet.3">
                        Full stack developer with strong system design fundamentals
                    </Text>
                    {/* Content */}
                    <Text size="lg" c="gray.3">
                        I’m a Full Stack Developer with 5+ years of experience building modern web applications using React and JavaScript ecosystem.
                    </Text>

                    <Text size="lg" c="gray.3">
                        Over time, I transitioned into backend development with Spring Boot, focusing on designing scalable APIs, handling data-intensive systems, and building microservices-based architectures.
                    </Text>

                    <Text size="lg" c="gray.3">
                        I have hands-on experience with event-driven systems using Kafka, caching with Redis, search optimization with Elasticsearch, and implementing secure authentication using JWT and OTP flows.
                    </Text>

                    <Text size="lg" c="gray.3">
                        I enjoy solving complex system design problems and building applications that are performant, scalable, and production-ready.
                    </Text>
                </Stack>
            </Container>
        </section>
    );
}