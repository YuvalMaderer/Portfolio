import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TerminalSimulator } from "@/components/TerminalSimulator";
import { useTranslation } from "react-i18next";

const technologies = [
  // Frontend & UI
  { name: "HTML", icon: "🌐", category: "Frontend & UI" },
  { name: "CSS", icon: "🎨", category: "Frontend & UI" },
  { name: "JavaScript", icon: "⚡", category: "Frontend & UI" },
  { name: "TypeScript", icon: "📘", category: "Frontend & UI" },
  { name: "React", icon: "⚛️", category: "Frontend & UI" },
  { name: "React Native", icon: "📱", category: "Frontend & UI" },
  { name: "React Query", icon: "🔄", category: "Frontend & UI" },
  { name: "React Hooks", icon: "🪝", category: "Frontend & UI" },
  { name: "React Router", icon: "🛣️", category: "Frontend & UI" },
  { name: "Redux", icon: "🗃️", category: "Frontend & UI" },
  { name: "TailwindCSS", icon: "💨", category: "Frontend & UI" },
  { name: "MUI", icon: "🎭", category: "Frontend & UI" },

  // Backend & Databases
  { name: "Node.js", icon: "🟢", category: "Backend & Databases" },
  { name: "Express.js", icon: "🚂", category: "Backend & Databases" },
  { name: "Python", icon: "🐍", category: "Backend & Databases" },
  { name: "PHP", icon: "🐘", category: "Backend & Databases" },
  { name: "SQL", icon: "🗄️", category: "Backend & Databases" },
  { name: "Postgres", icon: "🐘", category: "Backend & Databases" },
  { name: "MongoDB", icon: "🍃", category: "Backend & Databases" },
  { name: "Mongoose", icon: "🦡", category: "Backend & Databases" },

  // APIs & Authentication
  { name: "RESTful APIs", icon: "🔌", category: "APIs & Auth" },
  { name: "JSON", icon: "📋", category: "APIs & Auth" },
  { name: "JWT", icon: "🔐", category: "APIs & Auth" },
  { name: "Socket.IO", icon: "🔌", category: "APIs & Auth" },

  // Tools & DevOps
  { name: "Git", icon: "📦", category: "Tools & DevOps" },
  { name: "GitHub", icon: "🐙", category: "Tools & DevOps" },
  { name: "AWS", icon: "☁️", category: "Tools & DevOps" },
  { name: "Vercel", icon: "▲", category: "Tools & DevOps" },
  { name: "Docker", icon: "🐳", category: "Tools & DevOps" },

  // CMS & E-commerce
  { name: "WordPress", icon: "📝", category: "CMS & E-commerce" },
  { name: "WooCommerce", icon: "🛒", category: "CMS & E-commerce" },
];

export function TechStack() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
            >
              {t("tech_stack")
                .split(" ")
                .map((word, i) =>
                  word === "Stack" || word === "טכנולוגיות" ? (
                    <span key={i} className="text-gradient">
                      {word}{" "}
                    </span>
                  ) : (
                    word + " "
                  )
                )}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mt-4"
            >
              {t("tech_text")}
            </motion.p>
          </div>

          {/* Tech Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-16"
          >
            {technologies.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-6 rounded-2xl bg-tech-card border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-1">
                    {tech.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {tech.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Terminal Simulator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <TerminalSimulator />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
