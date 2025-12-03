import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { AIChatWidget } from "@/components/chat";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <div className="fixed top-6 right-6 z-50 flex flex-row gap-4">
          <ThemeToggle /> {/* שמירה על הגודל המקורי */}
          <LanguageSwitcher /> {/* שמירה על הגודל המקורי */}
        </div>

        <main className="relative z-10">
          <Hero />
          <About />
          <ClientsSection />
          <TechStack />
          <Services />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-8 border-t border-border/50 mt-24">
          <div className="container mx-auto px-6 text-center text-muted-foreground">
            <p>© 2025 Yuval Maderer. All rights reserved.</p>
            <AIChatWidget />
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
