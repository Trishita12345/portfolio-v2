'use client';

import { Container, Group, Button, Anchor, Box } from '@mantine/core';

const links = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const handleScroll = (id: string) => {
        const el = document.querySelector(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box
            component="header"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '70px',
                zIndex: 1000,
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}
        >
            <Container size="lg" h="100%">
                <Group justify="space-between" align="center" h="100%">
                    {/* Logo */}
                    <Anchor href="#" fw={700} size="lg">
                        Trishita
                    </Anchor>

                    {/* Nav Links */}
                    <Group gap="lg" visibleFrom="sm">
                        {links.map((link) => (
                            <Anchor
                                key={link.label}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll(link.href);
                                }}
                                style={{
                                    position: 'relative',
                                    transition: 'color 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#a855f7';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '';
                                }}
                            >
                                {link.label}
                            </Anchor>
                        ))}
                    </Group>

                    {/* Resume Button */}
                    <Button component="a" href="/Trishita_Majumder_CV_2026.pdf" target="_blank">
                        Resume
                    </Button>
                </Group>
            </Container>
        </Box>
    );
}