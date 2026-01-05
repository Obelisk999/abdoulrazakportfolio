import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Bot, BarChart3 } from "lucide-react";

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
    <section id="projets" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Mes réalisations</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Projets{" "}
            <span className="text-gradient">Académiques</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Des projets concrets qui démontrent mes compétences techniques et ma capacité 
            à résoudre des problèmes complexes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 bg-gradient-card"
            >
              {/* Header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-8">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center shrink-0`}>
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Fonctionnalités clés :</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="glass" size="sm">
                        <Github className="w-4 h-4" />
                        Code source
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
