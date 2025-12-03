import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  // Variants for smooth fade + slide + slight scale
  const contentVariant = {
    initial: (dir: number) => ({ opacity: 0, x: dir * 50, scale: 0.95 }),
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -50, scale: 0.95 }),
    transition: { duration: 0.7, ease: "easeInOut" },
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={`title-${currentLang}`}
              custom={i18n.language === "en" ? 1 : -1}
              variants={contentVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center"
            >
              {t("about_me")
                .split(" ")
                .map((word, i) =>
                  word === "Me" || word === "עליי" ? (
                    <span key={i} className="text-gradient">
                      {word}{" "}
                    </span>
                  ) : (
                    word + " "
                  )
                )}
            </motion.h2>
          </AnimatePresence>

          <div
            className={`w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-16`}
          />

          {/* Profile + Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentLang}`}
              custom={i18n.language === "en" ? 1 : -1}
              variants={contentVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`grid lg:grid-cols-2 gap-12 items-center mb-16 ${
                currentLang === "he" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Profile Image */}
              <div className="relative group">
                <div className="relative z-10 rounded-3xl overflow-hidden aspect-square max-w-md mx-auto shadow-2xl">
                  <div className="absolute inset-0 from-primary/20 via-accent/20 to-secondary/20 group-hover:opacity-70 transition-opacity duration-300" />
                  <img
                    src="/IITC_LOHAMIM-117.jpg"
                    alt="Yuval Maderer"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "50% 30%" }}
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity -z-10" />
              </div>

              {/* About Content */}
              <div className="space-y-6">
                {["paragraph1", "paragraph2", "paragraph3"].map((p, idx) => (
                  <motion.p
                    key={`${p}-${currentLang}`}
                    custom={i18n.language === "en" ? 1 : -1}
                    variants={contentVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-lg text-foreground/80 leading-relaxed"
                  >
                    {t(p)}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Stats Grid (commented) */}
          {/*
          <motion.div ...>
            ...
          </motion.div>
          */}
        </motion.div>
      </div>
    </section>
  );
}
