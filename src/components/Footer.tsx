import { Heart } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/translations/translations";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="py-8 bg-card border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Abdoulrazak Houssein. {t.footer.copyright}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>{t.footer.madeWith}</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>{t.footer.in}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
