import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Globe,
  ShoppingCart,
  Code,
  Smartphone,
  Database,
  Lightbulb,
} from "lucide-react";

const serviceIcons = {
  business_websites: Globe,
  portfolio_websites: Smartphone,
  e_commerce_solutions: ShoppingCart,
  full_stack_applications: Code,
  custom_development: Database,
  tech_consulting: Lightbulb,
};

const serviceGradients = {
  business_websites: "from-primary to-accent",
  portfolio_websites: "from-accent to-secondary",
  e_commerce_solutions: "from-secondary to-primary",
  full_stack_applications: "from-primary to-secondary",
  custom_development: "from-accent to-primary",
  tech_consulting: "from-secondary to-accent",
};

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  // מוציאים את כל השירותים מה-i18n
  const services = t("services_text.items", { returnObjects: true });

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative">
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
              {t("services_text.title")
                .split(" ")
                .map((word, i) =>
                  word === "&" || word === "ופתרונות" ? (
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
              className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto"
            >
              {t("services_text.subtitle")}
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(services).map((key, idx) => {
              const service = services[key];
              const Icon = serviceIcons[key];

              const gradient = serviceGradients[key];

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="h-full p-8 rounded-3xl bg-service-card border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}
                    />

                    <div className="relative z-10">
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-muted-foreground">
              {t("additional_note")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
