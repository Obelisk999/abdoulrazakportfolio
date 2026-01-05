import { Button } from "@/components/ui/button";
import { Github, Calendar, Bot, BarChart3 } from "lucide-react";
import { AnimatedSection, AnimatedCard } from "./AnimatedSection";

const projects = [
  {
    title: "Application de Réservation de Salles",
    description:
      "Conception et développement d'une application web permettant la création et la réservation de salles. Développement backend avec Flask (Python) et base de données MySQL.",
    technologies: ["Flask", "MySQL", "Bootstrap", "Python", "HTML/CSS/JS"],
    features: [
      "Authentification et gestion des rôles",
      "Gestion des salles et réservations",
      "Notifications automatiques par email",
      "Interface responsive Bootstrap",
    ],
    icon: Calendar,
    color: "from-blue-500 to-cyan-500",
    github: "https://github.com/Obelisk999/RoomReserve",
  },
  {
    title: "Gestion de Projets avec IA",
    description:
      "Développement d'une application web de gestion de projets, tâches, équipes et échéances. Intégration d'un module d'intelligence artificielle pour la génération automatique de cahiers des charges.",
    technologies: ["Python", "Flask", "LLM", "MySQL"],
    features: [
      "Gestion projets, tâches et équipes",
      "Génération automatique de cahiers des charges",
      "Intégration de modèles de langage",
      "Structuration des données et logique métier",
    ],
    icon: Bot,
    color: "from-purple-500 to-pink-500",
    github: "https://github.com/haki24gamer/Mashru3",
  },
  {
    title: "Analyse des habitudes d'écoute Spotify",
    description:
      "Analyse d'un jeu de données Spotify représentant les habitudes d'écoute d'un utilisateur sur 2 années. Conception de tableaux de bord interactifs avec Power BI.",
    technologies: ["Python", "Pandas", "Power BI", "Data Analysis"],
    features: [
      "Nettoyage et préparation des données",
      "Tableaux de bord interactifs Power BI",
      "Analyse des tendances d'écoute",
      "Création d'indicateurs clés (KPI)",
    ],
    icon: BarChart3,
    color: "from-green-500 to-emerald-500",
    github: null,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projets" className="py-16 sm:py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">Mes réalisations</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Projets{" "}
            <span className="text-gradient">Académiques</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            Des projets concrets qui démontrent mes compétences techniques et ma capacité 
            à résoudre des problèmes complexes.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedCard key={project.title} delay={index * 0.15}>
              <div className="group relative rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 bg-card hover:shadow-xl h-full">
                {/* Header with gradient */}
                <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${project.color}`} />
                
                <div className="p-5 sm:p-6 lg:p-8">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center shrink-0`}>
                      <project.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] sm:text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-foreground">Fonctionnalités clés :</h4>
                    <ul className="grid grid-cols-1 gap-1.5 sm:gap-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  {project.github && (
                    <div className="flex gap-3">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="glass" size="sm" className="text-xs sm:text-sm">
                          <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          Code source
                        </Button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
