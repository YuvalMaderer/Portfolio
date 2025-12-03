import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Knowledge base about Yuval Maderer's website
const KNOWLEDGE_BASE = `
# Yuval Maderer - Full Stack Developer

## About
Yuval Maderer, 25 years old, is a Full Stack Developer passionate about building modern web experiences. He creates clean, fast, and scalable web applications that are both functional and enjoyable to use.

As a freelancer, Yuval has worked with diverse clients, building everything from elegant business websites to complex full-stack applications. His previous internship experience sharpened his teamwork skills and ability to deliver projects on time.

Yuval believes in writing maintainable code and staying up-to-date with the latest technologies. He combines technical expertise with problem-solving skills to craft web experiences that make a real impact.

## Availability
Available for Projects - Currently accepting new work.

## Tech Stack
Frontend & UI:
- HTML, CSS, JavaScript, TypeScript
- React, React Native
- React Query, React Hooks, Redux
- TailwindCSS, MUI (Material UI)

Backend & Databases:
- Node.js, Express.js
- Python, PHP
- SQL, PostgreSQL, MongoDB, Mongoose

APIs & Authentication:
- RESTful APIs
- JSON
- JWT (JSON Web Tokens)
- Socket.IO for real-time communication

Tools & DevOps:
- Git, GitHub
- AWS (Amazon Web Services)
- Vercel
- Docker

CMS & E-commerce:
- WordPress
- WooCommerce

## Services & Solutions
1. Business Websites - Professional, conversion-focused websites that establish online presence and drive results.
2. Portfolio Websites - Stunning personal portfolios that showcase work and tell unique stories.
3. E-Commerce Solutions - Full-featured online stores with Shopify, WooCommerce, or custom platforms.
4. Full-Stack Applications - Scalable web applications with modern frontend and robust backend architecture.
5. Custom Development - Tailored solutions built to exact specifications and business requirements.
6. Tech Consulting - Strategic guidance on technology choices, architecture, and best practices.

## Contact Information
- Email: MadererYuval@gmail.com
- Phone: +972 58-517-1100
- WhatsApp: +972 58-517-1100
- LinkedIn: linkedin.com/in/yuval-maderer-7249552a2/
- Location: Israel (Remote Available)

## Website
https://www.yuvalmaderer.com/
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Detect language from the last user message
    const lastUserMessage = messages.filter((m: any) => m.role === "user").pop()?.content || "";
    const isHebrew = /[\u0590-\u05FF]/.test(lastUserMessage);
    
    const systemPrompt = `You are Yuval's friendly AI assistant on his portfolio website. Your role is to help visitors learn about Yuval's work, skills, and services.

LANGUAGE RULES:
- You MUST respond in the SAME language the user writes in.
- If the user writes in Hebrew, respond entirely in Hebrew.
- If the user writes in English, respond entirely in English.
- Current detected language: ${isHebrew ? "Hebrew" : "English"}

PERSONALITY:
- Be warm, friendly, and professional
- Use a conversational tone, not robotic
- Feel free to engage in casual conversation
- Be helpful and enthusiastic about Yuval's work

KNOWLEDGE BASE:
${KNOWLEDGE_BASE}

IMPORTANT RULES:
1. For questions about Yuval's work, skills, services, or contact info, use ONLY the knowledge base above.
2. For casual greetings or general conversation, respond naturally and friendly.
3. If asked about something not in the knowledge base, respond naturally like: "I don't have that specific detail, but I'd be happy to help you connect with Yuval directly for more information."
4. NEVER make up information that's not in the knowledge base.
5. Keep responses concise but helpful.
6. Encourage visitors to reach out to Yuval for projects.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Failed to get response" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
