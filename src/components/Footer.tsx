import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Abdoulrazak Houssein. Tous droits réservés.</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Fait avec</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>à Djibouti</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
