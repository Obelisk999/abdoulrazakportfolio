import { GraduationCap, Award, Calendar } from "lucide-react";
import { AnimatedSection, AnimatedCard } from "./AnimatedSection";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/translations/translations";

export const EducationSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const education = [
    {
      period: t.education.items.master.period,
      title: t.education.items.master.title,
      institution: t.education.items.master.institution,
      description: t.education.items.master.description,
      achievement: t.education.items.master.achievement,
      current: true,
    },
    {
      period: t.education.items.license.period,
      title: t.education.items.license.title,
      institution: t.education.items.license.institution,
      description: t.education.items.license.description,
      achievement: t.education.items.license.achievement,
      current: false,
    },
  ];
  return (
    <section id="education" className="py-16 sm:py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">{t.education.subtitle}</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {t.education.title}{" "}
            <span className="text-gradient">{t.education.titleHighlight}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            {t.education.description}
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          {education.map((item, index) => (
            <AnimatedCard key={item.title} delay={index * 0.2}>
              <div
                className={`relative flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-6 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-background -translate-x-1/2 mt-6 md:mt-0 md:top-1/2 md:-translate-y-1/2 z-10">
                  {item.current && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 ml-10 sm:ml-14 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-4 sm:p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    {/* Period badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                      <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-secondary text-xs sm:text-sm font-medium">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                        {item.period}
                      </div>
                      {item.current && (
                        <span className="px-2 py-0.5 text-[10px] sm:text-xs font-medium rounded-full bg-primary/20 text-primary">
                          {t.education.current}
                        </span>
                      )}
                    </div>

                    {/* Title and institution */}
                    <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center shrink-0">
                        <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-sm sm:text-lg leading-tight">{item.title}</h3>
                        <p className="text-primary text-xs sm:text-sm">{item.institution}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">{item.description}</p>

                    {/* Achievement */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                      <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500" />
                      <span className="font-medium">{item.achievement}</span>
                    </div>
                  </div>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="hidden md:block flex-1" />
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
