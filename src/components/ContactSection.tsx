import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { AnimatedSection, AnimatedCard } from "./AnimatedSection";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/translations/translations";


export const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations[language];

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.info.phone,
      value: "+253 77 15 55 66",
      href: "tel:+25377155566",
    },
    {
      icon: Mail,
      label: t.contact.info.email,
      value: "abdoulrazak.work@gmail.com",
      href: "mailto:abdoulrazak.work@gmail.com",
    },
    {
      icon: MapPin,
      label: t.contact.info.location,
      value: "Djibouti, Djibouti",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Obelisk999",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abdourazak-houssein-a91b67291/",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast({
        title: t.contact.form.success,
        description: t.contact.form.successDesc,
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: t.contact.form.error || "Error",
        description: error instanceof Error ? error.message : t.contact.form.errorDesc || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">{t.contact.subtitle}</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {t.contact.title}{" "}
            <span className="text-gradient">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            {t.contact.description}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <AnimatedCard delay={0.1}>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{t.contact.info.title}</h3>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-card border border-border/50 shadow-sm"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center shrink-0">
                      <info.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm sm:text-base font-medium hover:text-primary transition-colors truncate block"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base font-medium truncate">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t.contact.social}</h3>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  >
                    <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedCard>

          {/* Contact Form */}
          <AnimatedCard delay={0.2}>
            <div className="p-5 sm:p-6 lg:p-8 rounded-2xl bg-card border border-border/50 shadow-lg">
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-4 sm:mb-6">{t.contact.form.title}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      {t.contact.form.name}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.form.namePlaceholder}
                      required
                      className="bg-secondary/50 text-sm sm:text-base h-10 sm:h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      {t.contact.form.email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.form.emailPlaceholder}
                      required
                      className="bg-secondary/50 text-sm sm:text-base h-10 sm:h-11"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                    {t.contact.form.subject}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.contact.form.subjectPlaceholder}
                    required
                    className="bg-secondary/50 text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                    {t.contact.form.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.form.messagePlaceholder}
                    rows={4}
                    required
                    className="bg-secondary/50 resize-none text-sm sm:text-base"
                  />
                </div>

                <Button variant="hero" size="lg" type="submit" className="w-full text-sm sm:text-base" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                      {t.contact.form.sending}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      {t.contact.form.send}
                    </>
                  )}
                </Button>
              </form>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};
