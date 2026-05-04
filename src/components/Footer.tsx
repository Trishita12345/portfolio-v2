import { Container, Text, Group, Anchor } from '@mantine/core';

export default function Footer() {
    return (
        <footer>
            <Container size="lg" py="xl">
                <Group justify="space-between">
                    <Text size="sm" c="dimmed">
                        © {new Date().getFullYear()} Trishita Majumder
                    </Text>

                    <Group gap="md">
                        <Anchor href="#hero">Home</Anchor>
                        <Anchor href="#projects">Projects</Anchor>
                        <Anchor href="#contact">Contact</Anchor>
                    </Group>
                </Group>
            </Container>
        </footer>
    );
}