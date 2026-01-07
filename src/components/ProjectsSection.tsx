import { Button } from "@/components/ui/button";
import { Github, Calendar, Bot, BarChart3 } from "lucide-react";
import { AnimatedSection, AnimatedCard } from "./AnimatedSection";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/translations/translations";

export const ProjectsSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      title: t.projects.roomReserve.title,
      description: t.projects.roomReserve.description,
      technologies: ["Flask", "MySQL", "Bootstrap", "Python", "HTML/CSS/JS"],
      features: t.projects.roomReserve.features,
      icon: Calendar,
      color: "from-blue-500 to-cyan-500",
      github: "https://github.com/Obelisk999/RoomReserve",
    },
    {
      title: t.projects.projectManager.title,
      description: t.projects.projectManager.description,
      technologies: ["Python", "Flask", "LLM", "MySQL"],
      features: t.projects.projectManager.features,
      icon: Bot,
      color: "from-purple-500 to-pink-500",
      github: "https://github.com/haki24gamer/Mashru3",
    },
    {
      title: t.projects.spotify.title,
      description: t.projects.spotify.description,
      technologies: ["Python", "Pandas", "Power BI", "Data Analysis"],
      features: t.projects.spotify.features,
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
      github: null,
    },
  ];
  return (
    <section id="projets" className="py-16 sm:py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">{t.projects.subtitle}</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {t.projects.title}{" "}
            <span className="text-gradient">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            {t.projects.description}
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
                    <h4 className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 text-foreground">{t.projects.keyFeatures}</h4>
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
                          {t.projects.sourceCode}
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
