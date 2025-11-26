import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_mh8apz3",
        "template_7s00pg1",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "rdqnjUaz-h0gX-Kn2"
      )
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: t("email2"),
      value: "MadererYuval@gmail.com",
      href: "mailto:madereryuval@gmail.com",
    },
    {
      icon: Phone,
      label: t("phone2"),
      value: t("phone_number"),
      href: "tel:+972585171100",
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: t("whatsapp"),
      href: "https://wa.me/972585171100",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: t("linkedin"),
      href: "https://www.linkedin.com/in/yuval-maderer-7249552a2/",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

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
              {t("lets_connect")
                .split(" ")
                .map((word, i) =>
                  word === "Connect" || word === "קשר" ? (
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
              {t("project")}
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                {contactMethods.map((method, idx) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.1 }}
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-4 p-4 rounded-2xl glass hover:glow-primary transition-all duration-300 group"
                    >
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {method.label}
                        </div>
                        <div className="font-semibold text-foreground">
                          {method.value}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Location (optional) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
                className="mt-8 p-6 rounded-2xl glass"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      Location
                    </div>
                    <div className="text-muted-foreground">
                      Israel · Remote Available
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-6 p-8 rounded-3xl glass-dark"
              >
                <div>
                  <Input
                    placeholder={t("name")}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="rounded-xl border-border/50 bg-background/50 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder={t("email")}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="rounded-xl border-border/50 bg-background/50 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder={t("phone")}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="rounded-xl border-border/50 bg-background/50 focus:border-primary transition-colors"
                    dir={i18n.language === "he" ? "rtl" : "ltr"} // RTL רק אם עברית
                  />
                </div>

                <div>
                  <Textarea
                    placeholder={t("project_text")}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    className="rounded-xl border-border/50 bg-background/50 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-white rounded-xl py-6 font-semibold shadow-lg hover:shadow-xl hover:glow-primary transition-all duration-300 group"
                >
                  {t("send_message")}
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
            className="text-center mt-16"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
