import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  ShoppingCart,
  Code,
  Smartphone,
  Database,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Professional, conversion-focused websites that establish your online presence and drive results.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Smartphone,
    title: "Portfolio Websites",
    description:
      "Stunning personal portfolios that showcase your work and tell your unique story.",
    gradient: "from-accent to-secondary",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Full-featured online stores with Shopify, WooCommerce, or custom platforms.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Code,
    title: "Full-Stack Applications",
    description:
      "Scalable web applications with modern frontend and robust backend architecture.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Database,
    title: "Custom Development",
    description:
      "Tailored solutions built to your exact specifications and business requirements.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Lightbulb,
    title: "Tech Consulting",
    description:
      "Strategic guidance on technology choices, architecture, and best practices.",
    gradient: "from-secondary to-accent",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative">
      {/* Background decoration */}
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
              Services <span className="text-gradient">&</span> Solutions
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
              Comprehensive web development services tailored to your needs
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="h-full p-8 rounded-3xl bg-service-card border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    {/* Gradient overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}
                    />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-heading font-bold mb-3 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
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
              ...and much more! Every project is unique, and I'm always excited
              to tackle new challenges.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
