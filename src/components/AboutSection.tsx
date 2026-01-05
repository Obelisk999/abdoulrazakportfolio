import { Code, Brain, Rocket, Users } from "lucide-react";
import { AnimatedSection, AnimatedCard, AnimatedText } from "./AnimatedSection";

const highlights = [
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Passionné par le NLP et l'intégration de modèles de langage dans des applications innovantes.",
  },
  {
    icon: Code,
    title: "Développement Web",
    description: "Maîtrise des technologies modernes pour créer des applications web performantes et élégantes.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Toujours à la recherche de nouvelles solutions pour répondre aux défis technologiques actuels.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Capacité à travailler en équipe et à communiquer efficacement sur des projets complexes.",
  },
];

export const AboutSection = () => {
  return (
    <section id="apropos" className="py-16 sm:py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">À propos de moi</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Un développeur passionné par{" "}
            <span className="text-gradient">l'innovation</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
            Étudiant en Master 1 Intelligence Artificielle et Modélisation des Données, 
            titulaire d'une licence en informatique, passionné par le développement 
            d'applications web et l'intelligence artificielle. J'ai réalisé plusieurs 
            projets académiques utilisant Flask, MySQL et des concepts d'IA, notamment 
            la génération automatique de cahiers des charges à l'aide de modèles de langage. 
            Motivé, curieux et doté d'une bonne capacité d'apprentissage, je recherche un 
            stage ou un premier emploi afin de mettre en pratique mes compétences techniques 
            et de contribuer activement à des projets innovants.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, index) => (
            <AnimatedCard key={item.title} delay={index * 0.1}>
              <div className="group p-5 sm:p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="font-display font-semibold text-base sm:text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
