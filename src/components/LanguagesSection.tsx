import { Languages } from "lucide-react";

const languages = [
  { name: "Somali", level: 100, description: "Langue maternelle" },
  { name: "Français", level: 95, description: "Courant" },
  { name: "Arabe", level: 85, description: "Courant" },
  { name: "Anglais", level: 70, description: "Intermédiaire avancé" },
];

export const LanguagesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Communication</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Langues</span> parlées
          </h2>
          <p className="text-lg text-muted-foreground">
            Une maîtrise multilingue qui me permet de communiquer efficacement dans un contexte international.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {languages.map((language, index) => (
            <div
              key={language.name}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 text-center hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Circular progress */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-muted"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${language.level * 2.51} 251`}
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(217 91% 55%)" />
                      <stop offset="100%" stopColor="hsl(199 89% 48%)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold">{language.level}%</span>
                </div>
              </div>

              <h3 className="font-display font-semibold text-lg mb-1">{language.name}</h3>
              <p className="text-sm text-muted-foreground">{language.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
