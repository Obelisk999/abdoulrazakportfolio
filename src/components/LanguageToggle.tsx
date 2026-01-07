import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Languages } from "lucide-react";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative font-semibold" aria-label="Toggle language" disabled>
        <Languages className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
      className="relative font-semibold text-sm hover:bg-primary/10 transition-all duration-200 group"
      aria-label="Toggle language"
      title={language === "fr" ? "Switch to English" : "Passer en français"}
    >
      <div className="flex items-center gap-1.5">
        <Languages className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
        <span className="text-xs font-bold">{language === "fr" ? "EN" : "FR"}</span>
      </div>
    </Button>
  );
};
