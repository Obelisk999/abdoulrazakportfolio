import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users, Database, Bot } from "lucide-react";

const projects = [
  {
    title: "Application de Réservation de Salles",
    description:
      "Application web complète permettant la gestion et la réservation de salles de réunion. Système d'authentification sécurisé, gestion des disponibilités en temps réel et notifications par email automatiques.",
    technologies: ["Flask", "MySQL", "Bootstrap", "Python"],
    features: [
      "Authentification utilisateur sécurisée",
      "Gestion des salles et disponibilités",
      "Système de réservation intuitif",
      "Notifications email automatiques",
    ],
    icon: Calendar,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Gestion de Projets avec IA",
    description:
      "Plateforme de gestion de projets intégrant l'intelligence artificielle pour automatiser la création de cahiers des charges. Gestion complète des projets, tâches et équipes avec génération automatique de documentation.",
    technologies: ["Python", "Flask", "LLM", "MySQL", "Bootstrap"],
    features: [
      "Gestion projets, tâches et équipes",
      "Génération automatique de cahiers des charges",
      "Intégration de modèles de langage",
      "Tableau de bord analytique",
    ],
    icon: Bot,
    color: "from-purple-500 to-pink-500",
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
                  <Button variant="glass" size="sm">
                    <Github className="w-4 h-4" />
                    Code source
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4" />
                    Voir le projet
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
