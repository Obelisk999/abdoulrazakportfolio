import { Code, Database, Monitor, Brain, BarChart3 } from "lucide-react";
import { AnimatedSection, AnimatedCard } from "./AnimatedSection";

const skillCategories = [
  {
    icon: Brain,
    title: "Python & IA",
    skills: [
      { name: "Python (Flask, Pandas)", level: 85 },
      { name: "NLP & Modèles de langage", level: 75 },
      { name: "Analyse de données", level: 80 },
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Visualisation",
    skills: [
      { name: "Power BI", level: 80 },
      { name: "Nettoyage de données", level: 85 },
      { name: "Tableaux de bord", level: 80 },
    ],
  },
  {
    icon: Code,
    title: "Développement Web",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "PHP", level: 75 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    icon: Database,
    title: "Bases de données",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Modélisation (Merise, MCD, MLD)", level: 80 },
    ],
  },
  {
    icon: Monitor,
    title: "Systèmes",
    skills: [
      { name: "Linux", level: 80 },
      { name: "Windows", level: 90 },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="competences" className="py-16 sm:py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">Mes compétences</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Technologies &{" "}
            <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            Un ensemble de compétences techniques solides acquises à travers ma formation 
            et mes projets personnels.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedCard key={category.title} delay={categoryIndex * 0.1}>
              <div className="p-5 sm:p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-full">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                    <category.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-base sm:text-lg">{category.title}</h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs sm:text-sm font-medium">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
