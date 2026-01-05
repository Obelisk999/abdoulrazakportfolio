import { Code, Brain, Rocket, Users } from "lucide-react";

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
    <section id="apropos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">À propos de moi</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Un développeur passionné par{" "}
            <span className="text-gradient">l'innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Étudiant en Master 1 Intelligence Artificielle et Modélisation des Données, 
            titulaire d'une licence en informatique, passionné par le développement 
            d'applications web et l'intelligence artificielle. J'ai réalisé plusieurs 
            projets académiques utilisant Flask, MySQL et des concepts d'IA, notamment 
            la génération automatique de cahiers des charges à l'aide de modèles de langage. 
            Motivé, curieux et doté d'une bonne capacité d'apprentissage, je recherche un 
            stage ou un premier emploi afin de mettre en pratique mes compétences techniques 
            et de contribuer activement à des projets innovants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
