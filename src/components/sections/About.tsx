import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Award, Briefcase, Code2, Users } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Projects Completed", value: 50, suffix: "+" },
  { icon: Users, label: "Happy Clients", value: 30, suffix: "+" },
  { icon: Code2, label: "Technologies", value: 15, suffix: "+" },
  { icon: Award, label: "Years Experience", value: 3, suffix: "+" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
            >
              About <span className="text-gradient">Me</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden aspect-square max-w-md mx-auto shadow-2xl">
                <div className="absolute inset-0  from-primary/20 via-accent/20 to-secondary/20 group-hover:opacity-70 transition-opacity duration-300" />
                <img
                  src="/IITC_LOHAMIM-117.jpg"
                  alt="Yuval Maderer"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 30%" }}
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity -z-10" />
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a passionate Full Stack Developer with a strong foundation
                in modern web technologies. My journey in software development
                combines academic knowledge with hands-on experience, enabling
                me to deliver high-quality, scalable solutions.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                As a freelancer, I've had the privilege of working with diverse
                clients, building everything from elegant business websites to
                complex full-stack applications. My previous internship
                experience has refined my ability to work in team environments
                and deliver projects on time.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I believe in writing clean, maintainable code and staying
                current with the latest industry trends. My approach combines
                technical expertise with strong problem-solving skills to create
                web experiences that truly make a difference.
              </p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                  className="text-center p-6 rounded-2xl glass hover:glow-primary transition-all duration-300 group"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
