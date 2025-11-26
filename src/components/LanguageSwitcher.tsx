import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "he" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "he" ? "rtl" : "ltr";
  };

  const buttonText = i18n.language === "en" ? "עברית" : "English";

  return (
    <motion.button
      onClick={toggleLanguage}
      className=" z-50 p-3 rounded-2xl glass hover:glow-primary transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={buttonText}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-center w-16"
        >
          {buttonText}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
