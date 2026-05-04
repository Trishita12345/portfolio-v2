'use client';

import {
    Container,
    Title,
    Stack,
    TextInput,
    Textarea,
    Button,
    Group,
    Text,
    ThemeIcon,
    ActionIcon,
    Grid,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconMapPin, IconPhone } from '@tabler/icons-react';
import { useState } from 'react';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const isDisabled = !name || !email || !message;
    const handleWhatsApp = () => {
        if (!name || !email || !message) {
            notifications.show({
                title: 'Missing fields',
                message: 'Please fill all fields before sending',
                color: 'red',
            });
            return;
        }

        const phoneNumber = '917584942147';

        const text = `
Hello Trishita,

Name: ${name}
Email: ${email}

Message:
${message}
`;

        const encodedText = encodeURIComponent(text);
        const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        // Open WhatsApp
        window.open(url, '_blank');

        // Success Toast
        notifications.show({
            title: 'Redirecting to WhatsApp',
            message: 'Your message is ready to send 🚀',
            color: 'violet',
        });

        // Clear Form
        setName('');
        setEmail('');
        setMessage('');
    };
    return (
        <section id="contact">
            <Container size="lg" py={{ base: 40, md: 80 }}>
                <Stack gap="xl">
                    <Title order={2} c={"white"}>Contact</Title>
                    <Text size="lg" c="gray.3" maw={600}>
                        Open to full-stack and backend opportunities. Let’s build scalable systems together.
                    </Text>
                    <Grid>
                        {/* FORM FIRST ON MOBILE */}
                        <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
                            <Stack>
                                <TextInput
                                    withAsterisk
                                    label="Name"
                                    value={name}
                                    onChange={(e) => setName(e.currentTarget.value)}
                                />

                                <TextInput
                                    withAsterisk
                                    label="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.currentTarget.value)}
                                />

                                <Textarea
                                    withAsterisk
                                    label="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.currentTarget.value)}
                                />

                                <Button
                                    disabled={isDisabled}
                                    onClick={handleWhatsApp}
                                    variant="gradient"
                                    gradient={{ from: 'violet', to: 'pink' }}
                                    fullWidth
                                >
                                    Send Message
                                </Button>
                            </Stack>
                        </Grid.Col>

                        {/* INFO SECOND ON MOBILE */}
                        <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
                            <Stack>
                                <Group>
                                    <ThemeIcon variant="light">
                                        <IconMail size={16} />
                                    </ThemeIcon>
                                    <Text>trishita.majumder15@gmail.com</Text>
                                </Group>

                                <Group>
                                    <ThemeIcon variant="light">
                                        <IconPhone size={16} />
                                    </ThemeIcon>
                                    <Text>+91-7584942147</Text>
                                </Group>

                                <Group>
                                    <ThemeIcon variant="light">
                                        <IconMapPin size={16} />
                                    </ThemeIcon>
                                    <Text>India</Text>
                                </Group>

                                <Group mt="md">
                                    <ActionIcon
                                        variant="light"
                                        component="a"
                                        href="https://github.com/Trishita12345"
                                        target="_blank"
                                    >
                                        <IconBrandGithub size={18} />
                                    </ActionIcon>

                                    <ActionIcon
                                        variant="light"
                                        component="a"
                                        href="https://www.linkedin.com/in/trishita-majumder-642b6a18b/"
                                        target="_blank"
                                    >
                                        <IconBrandLinkedin size={18} />
                                    </ActionIcon>
                                </Group>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </Stack>
            </Container>
        </section>
    );
}