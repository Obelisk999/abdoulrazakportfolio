import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const HeroSection = () => {
  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/10 rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Photo */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-primary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary">
              <img
                src={profilePhoto}
                alt="Abdoulrazak Houssein"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-primary font-medium mb-4 animate-fadeIn">Bienvenue sur mon portfolio</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slideUp">
              Abdoulrazak{" "}
              <span className="text-gradient">Houssein</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slideUp" style={{ animationDelay: "0.1s" }}>
              Informaticien | Passionné d'Intelligence Artificielle et Développement Web
            </p>
            
            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 animate-slideUp" style={{ animationDelay: "0.2s" }}>
              <a
                href="https://github.com/abdoulrazakhoussein"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/70 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/abdoulrazakhoussein"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/70 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:abdoulrazak.houssein@example.com"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/70 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Button */}
            <div className="animate-slideUp" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" onClick={handleContactClick}>
                <Mail className="w-5 h-5" />
                Me Contacter
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <a
            href="#apropos"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#apropos")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Découvrir</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
