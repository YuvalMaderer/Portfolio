import { Message } from "./types";
import { cn } from "@/lib/utils";
import { User, Sparkles } from "lucide-react";

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";
  
  // Detect RTL for Hebrew text
  const isRTL = /[\u0590-\u05FF]/.test(message.content);

  return (
    <div
      className={cn(
        "flex gap-3 animate-fade-in",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Avatar */}
      <div
        className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
          isUser ? "bg-muted" : "chat-gradient"
        )}
      >
        {isUser ? (
          <User className="w-4 h-4 text-muted-foreground" />
        ) : (
          <Sparkles className="w-4 h-4 text-primary-foreground" />
        )}
      </div>

      {/* Message bubble */}
      <div
        className={cn(
          "max-w-[75%] px-4 py-2.5 rounded-2xl",
          "text-sm leading-relaxed",
          isUser
            ? "bg-chat-user text-primary-foreground rounded-br-md"
            : "bg-chat-assistant text-card-foreground rounded-bl-md"
        )}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {message.content || (
          <span className="text-muted-foreground italic">...</span>
        )}
      </div>
    </div>
  );
};
