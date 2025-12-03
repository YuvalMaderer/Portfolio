import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export const TypingIndicator = () => {
  return (
    <div className="flex gap-3 animate-fade-in">
      {/* Avatar */}
      <div className="w-8 h-8 rounded-full chat-gradient flex items-center justify-center shrink-0">
        <Sparkles className="w-4 h-4 text-primary-foreground" />
      </div>

      {/* Typing bubble */}
      <div
        className={cn(
          "px-4 py-3 rounded-2xl rounded-bl-md",
          "bg-chat-assistant",
          "flex items-center gap-1"
        )}
      >
        <span className="w-2 h-2 rounded-full bg-muted-foreground typing-dot" />
        <span className="w-2 h-2 rounded-full bg-muted-foreground typing-dot" />
        <span className="w-2 h-2 rounded-full bg-muted-foreground typing-dot" />
      </div>
    </div>
  );
};
