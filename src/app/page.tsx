import Hero from '@/sections/hero/Hero';
import About from '@/sections/about/About';
import Skills from '@/sections/skills/Skills';
import Projects from '@/sections/projects/Projects';
import Experience from '@/sections/experience/Experience';
import Contact from '@/sections/contact/Contact';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function HomePage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Hero />
      <FadeIn>
        <About />
      </FadeIn>
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}