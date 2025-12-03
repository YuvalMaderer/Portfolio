import { MessageCircle, X } from "lucide-react";
import { ChatButtonProps } from "./types";
import { cn } from "@/lib/utils";

export const ChatButton = ({ isOpen, onClick }: ChatButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "w-14 h-14 rounded-full",
        "chat-gradient",
        "flex items-center justify-center",
        "shadow-chat hover:shadow-chat-lg",
        "transition-all duration-300 ease-out",
        "hover:scale-110 active:scale-95",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      )}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      <div
        className={cn(
          "transition-transform duration-300",
          isOpen ? "rotate-90" : "rotate-0"
        )}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" strokeWidth={2.5} />
        ) : (
          <MessageCircle
            className="w-6 h-6 text-primary-foreground"
            strokeWidth={2.5}
          />
        )}
      </div>

      {/* Pulse ring effect */}
      {!isOpen && (
        <span className="absolute inset-0 rounded-full chat-gradient opacity-40 animate-ping" />
      )}
    </button>
  );
};
