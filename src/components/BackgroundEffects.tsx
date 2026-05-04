'use client';

export default function BackgroundEffects() {
    return (
        <>
            {/* Global Dot Pattern */}
            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    backgroundImage:
                        'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                    zIndex: -1,
                }}
            />

            {/* Floating Glow Top Left */}
            <div
                style={{
                    position: 'fixed',
                    top: '10%',
                    left: '5%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background:
                        'radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)',
                    filter: 'blur(60px)',
                    zIndex: -1,
                    animation: 'float 10s ease-in-out infinite',
                }}
            />

            {/* Floating Glow Bottom Right */}
            <div
                style={{
                    position: 'fixed',
                    bottom: '10%',
                    right: '5%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background:
                        'radial-gradient(circle, rgba(236,72,153,0.2), transparent 70%)',
                    filter: 'blur(60px)',
                    zIndex: -1,
                    animation: 'float 12s ease-in-out infinite',
                }}
            />
        </>
    );
}