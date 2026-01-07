import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin, Download } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";
import cvFile from "@/assets/CV 1.pdf";

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background pt-20 px-4"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] border border-primary/10 rounded-full hidden sm:block" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] border border-primary/5 rounded-full hidden sm:block" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-card shadow-2xl">
              <img
                src={profilePhoto}
                alt="Abdoulrazak Houssein"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base"
            >
              Bienvenue sur mon portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            >
              Abdoulrazak{" "}
              <span className="text-gradient">Houssein</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8"
            >
              Informaticien | Étudiant en Master 1 Intelligence Artificielle
            </motion.p>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <a
                href="https://github.com/Obelisk999"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-card shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-border/50"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdourazak-houssein-a91b67291/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-card shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-border/50"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </a>
              <a
                href="mailto:abdoulrazak.work@gmail.com"
                className="p-2.5 sm:p-3 rounded-full bg-card shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-border/50"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              </a>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Button variant="hero" size="lg" onClick={handleContactClick} className="w-full sm:w-auto">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Me Contacter
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a href={cvFile} download="CV-Abdoulrazak-Houssein.pdf">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Télécharger CV
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float hidden sm:block"
        >
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
        </motion.div>
      </div>
    </section>
  );
};
