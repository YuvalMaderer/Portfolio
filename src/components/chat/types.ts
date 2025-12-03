export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export interface ChatWindowProps {
  isOpen: boolean;
  messages: Message[];
  isLoading: boolean;
  onSendMessage: (message: string) => void;
  onClose: () => void;
  onClearHistory: () => void;
}
