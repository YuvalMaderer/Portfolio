import { ThemeProvider } from "@/contexts/ThemeContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MouseFollower } from "@/components/MouseFollower";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <MouseFollower />
        <ThemeToggle />

        <main className="relative z-10">
          <Hero />
          <About />
          <TechStack />
          <Services />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-8 border-t border-border/50 mt-24">
          <div className="container mx-auto px-6 text-center text-muted-foreground">
            <p>© 2025 Yuval Maderer. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
