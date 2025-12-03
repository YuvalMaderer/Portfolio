import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";

export function ClientsSection() {
  const { t } = useTranslation();

  const clients = [
    { name: "Client 1", logo: "/LOGO-removebg-preview.png" },
    { name: "Client 2", logo: "/vimar-logo.webp" },
    { name: "Client 3", logo: "/Sync1.png" },
  ];

  return (
    <motion.section
      className="w-full py-24 bg-background"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-4"
        >
          {t("clients")
            .split(" ")
            .map((word, i) =>
              word === "Clients" || word === "שלי" ? (
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
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3 }}
          className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-muted-foreground mt-4"
        >
          {t("clients_text")}
        </motion.p>
      </div>

      <div className="overflow-hidden relative" dir="ltr">
        <Marquee gradient={false} speed={40}>
          {Array.from({ length: 5 })
            .flatMap(() => clients)
            .map((client, index) => (
              <div key={index} className="relative mx-6 h-16 w-auto">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition
                             dark:filter dark:invert"
                />
              </div>
            ))}
        </Marquee>
      </div>
    </motion.section>
  );
}
