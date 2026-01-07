import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

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
        FR
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
      className="relative font-semibold text-sm hover:bg-primary/10 transition-all duration-200"
      aria-label="Toggle language"
    >
      <span className="flex items-center gap-1">
        {language === "fr" ? "EN" : "FR"}
      </span>
    </Button>
  );
};
