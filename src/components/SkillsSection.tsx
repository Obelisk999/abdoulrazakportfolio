import { Code, Database, Monitor, Brain, BarChart3 } from "lucide-react";

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
    <section id="competences" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Mes compétences</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Technologies &{" "}
            <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Un ensemble de compétences techniques solides acquises à travers ma formation 
            et mes projets personnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
