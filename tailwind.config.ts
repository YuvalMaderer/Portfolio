import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Sora", "system-ui", "sans-serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        "gradient-start": "hsl(var(--gradient-start))",
        "gradient-mid": "hsl(var(--gradient-mid))",
        "gradient-end": "hsl(var(--gradient-end))",
        "hero-glow": "hsl(var(--hero-glow))",
        "tech-card": "hsl(var(--tech-card))",
        "service-card": "hsl(var(--service-card))",

        // ⭐ נוספו מהקטע החדש — בלי לגעת בקיים
        chat: {
          user: "hsl(var(--chat-bubble-user))",
          assistant: "hsl(var(--chat-bubble-assistant))",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        // קיימים
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        // ⭐ נוספו מהקטע החדש
        "chat-slide-up": {
          from: {
            opacity: "0",
            transform: "translateY(20px) scale(0.95)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        "chat-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "typing-dot": {
          "0%, 60%, 100%": {
            opacity: "0.3",
            transform: "translateY(0)",
          },
          "30%": {
            opacity: "1",
            transform: "translateY(-4px)",
          },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        // ⭐ נוספו
        "chat-open": "chat-slide-up 0.3s ease-out",
        "chat-bounce": "chat-bounce 2s ease-in-out infinite",
      },

      boxShadow: {
        // ⭐ נוספו מהקטע החדש
        chat: "0 10px 40px -10px hsla(187, 85%, 53%, 0.3)",
        "chat-lg": "0 20px 60px -15px hsla(187, 85%, 53%, 0.4)",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;
