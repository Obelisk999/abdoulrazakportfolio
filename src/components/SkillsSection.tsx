import { Code, Database, Monitor, Shield, Brain } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Développement Web",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Bootstrap", level: 85 },
      { name: "PHP", level: 75 },
      { name: "Flask", level: 80 },
    ],
  },
  {
    icon: Database,
    title: "Bases de données",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Merise", level: 80 },
      { name: "MCD/MLD", level: 85 },
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
  {
    icon: Shield,
    title: "Réseaux & Sécurité",
    skills: [
      { name: "Réseaux informatiques", level: 75 },
      { name: "Sécurité informatique", level: 70 },
    ],
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    skills: [
      { name: "NLP", level: 70 },
      { name: "Modèles de langage", level: 75 },
      { name: "Python", level: 80 },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="competences" className="py-20 md:py-32 bg-card">
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
              className="p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary-foreground" />
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
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
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
