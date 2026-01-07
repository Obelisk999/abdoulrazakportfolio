import { AnimatedSection, AnimatedCard } from "./AnimatedSection";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/translations/translations";

export const LanguagesSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const languages = [
    { name: "Somali", level: 100, description: t.languages.proficiencies.native },
    { name: language === "fr" ? "Français" : "French", level: 95, description: t.languages.proficiencies.fluent },
    { name: language === "fr" ? "Arabe" : "Arabic", level: 85, description: t.languages.proficiencies.fluent },
    { name: language === "fr" ? "Anglais" : "English", level: 70, description: t.languages.proficiencies.advanced },
  ];
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">{t.languages.subtitle}</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {language === "fr" ? (
              <>
                <span className="text-gradient">{t.languages.titleHighlight}</span> {t.languages.titleSuffix}
              </>
            ) : (
              <>
                {t.languages.title}{" "}
                <span className="text-gradient">{t.languages.titleHighlight}</span>
              </>
            )}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            {t.languages.description}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
          {languages.map((language, index) => (
            <AnimatedCard key={language.name} delay={index * 0.1}>
              <div className="group p-4 sm:p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 text-center hover:shadow-lg h-full">
                {/* Circular progress */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="40%"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-muted"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="40%"
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
                    <span className="text-sm sm:text-base lg:text-lg font-bold">{language.level}%</span>
                  </div>
                </div>

                <h3 className="font-display font-semibold text-sm sm:text-base lg:text-lg mb-0.5 sm:mb-1">{language.name}</h3>
                <p className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground">{language.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
