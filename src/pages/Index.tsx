import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { LanguagesSection } from "@/components/LanguagesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Abdoulrazak Houssein | Informaticien & Développeur Web</title>
        <meta
          name="description"
          content="Portfolio de Abdoulrazak Houssein, informaticien passionné d'intelligence artificielle et développement web. Découvrez mes projets, compétences et parcours académique."
        />
        <meta
          name="keywords"
          content="Abdoulrazak Houssein, développeur web, informaticien, intelligence artificielle, portfolio, Djibouti, Flask, Python, NLP"
        />
        <meta name="author" content="Abdoulrazak Houssein" />
        <meta property="og:title" content="Abdoulrazak Houssein | Informaticien & Développeur Web" />
        <meta
          property="og:description"
          content="Portfolio de Abdoulrazak Houssein, informaticien passionné d'intelligence artificielle et développement web."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://abdoulrazak-houssein.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <LanguagesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
