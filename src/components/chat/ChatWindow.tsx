import { useState, useRef, useEffect } from "react";
import { Send, Trash2, X, Sparkles } from "lucide-react";
import { ChatWindowProps } from "./types";
import { ChatMessage } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";
import { cn } from "@/lib/utils";

export const ChatWindow = ({
  isOpen,
  messages,
  isLoading,
  onSendMessage,
  onClose,
  onClearHistory,
}: ChatWindowProps) => {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed && !isLoading) {
      onSendMessage(trimmed);
      setInput("");
    }
  };

  // Detect RTL for Hebrew
  const isRTL = /[\u0590-\u05FF]/.test(input);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed bottom-24 right-6 z-[9999]", // העליתי את z-index
        "w-[380px] max-w-[calc(100vw-48px)]",
        "h-[560px] max-h-[calc(100vh-140px)]",
        "bg-card rounded-2xl",
        "shadow-chat-lg border border-border",
        "flex flex-col overflow-hidden",
        "animate-chat-open"
      )}
    >
      {/* Header */}
      <div className="chat-gradient p-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-primary-foreground text-sm">
              Yuval's Assistant
            </h3>
            <p className="text-primary-foreground/80 text-xs">
              Ask me anything! • שאל אותי הכל!
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {messages.length > 0 && (
            <button
              onClick={onClearHistory}
              className="p-2 rounded-lg hover:bg-background/20 transition-colors"
              aria-label="Clear chat history"
              title="Clear history"
            >
              <Trash2 className="w-4 h-4 text-primary-foreground/80" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-background/20 transition-colors"
            aria-label="Close chat"
          >
            <X className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-scrollbar bg-background/50">
        {messages.length === 0 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full chat-gradient flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>
            <p className="text-muted-foreground text-sm mb-2">
              👋 Hey! I'm here to help you learn about Yuval's work.
            </p>
            <p className="text-muted-foreground text-sm" dir="rtl">
              !שלום! אני כאן לעזור לך ללמוד על העבודה של יובל
            </p>
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {[
                "What services do you offer?",
                "מה הטכנולוגיות שאתה עובד איתן?",
                "How can I contact you?",
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => onSendMessage(suggestion)}
                  className={cn(
                    "px-3 py-1.5 text-xs rounded-full",
                    "bg-muted hover:bg-muted/80",
                    "text-muted-foreground hover:text-foreground",
                    "transition-colors duration-200",
                    "border border-border"
                  )}
                  dir={/[\u0590-\u05FF]/.test(suggestion) ? "rtl" : "ltr"}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {isLoading && <TypingIndicator />}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="p-4 border-t border-border bg-card shrink-0"
      >
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message... / כתוב הודעה..."
            dir={isRTL ? "rtl" : "ltr"}
            disabled={isLoading}
            className={cn(
              "flex-1 px-4 py-2.5 rounded-xl",
              "bg-muted border-0",
              "text-foreground placeholder:text-muted-foreground",
              "focus:outline-none focus:ring-2 focus:ring-primary/50",
              "transition-all duration-200",
              "disabled:opacity-50"
            )}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={cn(
              "p-2.5 rounded-xl",
              "chat-gradient",
              "text-primary-foreground",
              "transition-all duration-200",
              "hover:shadow-chat hover:scale-105",
              "active:scale-95",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            )}
            aria-label="Send message"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};
