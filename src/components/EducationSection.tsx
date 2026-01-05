import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    period: "2025 – En cours",
    title: "Master 1 - Intelligence Artificielle & Modélisation des Données",
    institution: "Université de Djibouti",
    description: "Formation avancée en intelligence artificielle, modélisation des données et apprentissage automatique.",
    achievement: "En cours",
    current: true,
  },
  {
    period: "2022 – 2025",
    title: "Licence en Informatique",
    institution: "Université de Djibouti",
    description: "Formation complète en informatique couvrant la programmation, les bases de données, les réseaux et l'intelligence artificielle.",
    achievement: "Mention Bien",
    current: false,
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Mon parcours</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Formation{" "}
            <span className="text-gradient">Académique</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Un parcours scolaire marqué par l'excellence et la passion pour l'informatique.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          {education.map((item, index) => (
            <div
              key={item.title}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-primary border-4 border-background -translate-x-1/2 mt-6 md:mt-0 md:top-1/2 md:-translate-y-1/2 z-10">
                {item.current && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  {/* Period badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-sm font-medium">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {item.period}
                    </div>
                    {item.current && (
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/20 text-primary">
                        En cours
                      </span>
                    )}
                  </div>

                  {/* Title and institution */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg">{item.title}</h3>
                      <p className="text-primary text-sm">{item.institution}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>

                  {/* Achievement */}
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium">{item.achievement}</span>
                  </div>
                </div>
              </div>

              {/* Empty space for timeline alignment */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
