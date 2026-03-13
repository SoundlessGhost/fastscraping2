"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { io, Socket } from "socket.io-client";
import { MessageCircle, X, Send, Loader2, Wrench } from "lucide-react";

// ============================================
// Configuration
// ============================================
// Set to false to enable live chat when backend is ready
const CHAT_UNDER_CONSTRUCTION = true;

const CHAT_SERVER_URL =
  process.env.NEXT_PUBLIC_CHAT_SERVER_URL || "https://chat.fastscraping.com";

// ============================================
// Types
// ============================================
interface Message {
  id: string;
  sender_type: "visitor" | "admin" | "bot";
  sender_name: string;
  content: string;
  created_at: string;
}

interface PreChatForm {
  name: string;
  email: string;
  company: string;
}

// ============================================
// Work In Progress View
// ============================================
function WorkInProgressView() {
  return (
    <div className="p-8 bg-[#faf9f7] flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-[#043f34]/10 flex items-center justify-center mb-5">
        <Wrench className="w-8 h-8 text-[#043f34]" />
      </div>

      <h4 className="font-semibold text-gray-800 text-lg mb-2">
        We&apos;re Setting Things Up!
      </h4>

      <p className="text-sm text-gray-500 leading-relaxed mb-6">
        Our live chat is currently under development. We&apos;re building
        something great and will be ready soon!
      </p>

      <div className="w-full space-y-3">
        <a
          href="mailto:khalid@fastscraping.com"
          className="block w-full py-3 bg-[#043f34] text-white font-semibold rounded-xl hover:bg-[#043f34]/90 transition-all text-center text-sm"
        >
          Email Us — khalid@fastscraping.com
        </a>
        <a
          href="https://wa.me/8801788791134"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 bg-white text-[#043f34] font-semibold rounded-xl border-2 border-[#043f34]/20 hover:border-[#043f34]/40 transition-all text-center text-sm"
        >
          Book a Call
        </a>
      </div>

      {/* Powered by */}
      <div className="mt-6">
        <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
          <MessageCircle className="w-3 h-3" />
          Powered by{" "}
          <span className="font-medium text-gray-500">FastScraping Team</span>
        </p>
      </div>
    </div>
  );
}

// ============================================
// Main Chat Widget Content
// ============================================
function ChatWidgetContent() {
  // State
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [showPreChat, setShowPreChat] = useState(true);
  const [formData, setFormData] = useState<PreChatForm>({
    name: "",
    email: "",
    company: "",
  });
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string>("");
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [isFirstMessage, setIsFirstMessage] = useState(true);

  // Refs
  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isTypingEmittedRef = useRef(false);
  const isOpenRef = useRef(false);

  // Keep ref in sync for socket event handler closure
  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  // Generate or retrieve session ID
  useEffect(() => {
    if (CHAT_UNDER_CONSTRUCTION) return;

    let sid = localStorage.getItem("fs_chat_session");
    if (!sid) {
      sid = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("fs_chat_session", sid);
    }
    setSessionId(sid);

    // Check for existing conversation
    const savedConvId = localStorage.getItem("fs_chat_conversation");
    if (savedConvId) {
      setConversationId(savedConvId);
      setShowPreChat(false);
    }
  }, []);

  // Initialize Socket.IO connection
  useEffect(() => {
    if (CHAT_UNDER_CONSTRUCTION) return;
    if (!sessionId) return;

    socketRef.current = io(CHAT_SERVER_URL, {
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    const socket = socketRef.current;

    socket.on("connect", () => {
      console.log("Chat connected");
      setIsConnected(true);
      socket.emit("register_visitor", { session_id: sessionId });
    });

    socket.on("disconnect", () => {
      console.log("Chat disconnected");
      setIsConnected(false);
    });

    socket.on("chat_started", (data) => {
      console.log("Chat started:", data);
      setConversationId(data.conversation_id);
      localStorage.setItem("fs_chat_conversation", data.conversation_id);

      // Add greeting message
      if (data.greeting) {
        setMessages([data.greeting]);
      }

      setIsLoading(false);
      setShowPreChat(false);
    });

    socket.on("message_sent", (data) => {
      console.log("Message sent:", data);
    });

    socket.on("new_message", (data) => {
      console.log("New message:", data);

      // If it's a visitor message, replace the temp optimistic message
      if (data.message.sender_type === "visitor") {
        setMessages((prev) => {
          // Find and replace the latest temp message with matching content
          const tempIndex = prev.findIndex(
            (m) =>
              m.id.startsWith("temp_") && m.content === data.message.content,
          );
          if (tempIndex !== -1) {
            const updated = [...prev];
            updated[tempIndex] = data.message;
            return updated;
          }
          return [...prev, data.message];
        });
      } else {
        setMessages((prev) => [...prev, data.message]);
      }

      // Show notification badge if chat is closed
      if (!isOpenRef.current && data.message.sender_type !== "visitor") {
        setHasNewMessage(true);
      }

      // Hide typing indicator
      setIsTyping(false);
    });

    socket.on("typing", (data) => {
      if (!data.is_visitor) {
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 3000);
      }
    });

    socket.on("error", (data) => {
      console.error("Chat error:", data);
      setIsLoading(false);
    });

    return () => {
      socket.disconnect();
    };
  }, [sessionId]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Load existing conversation
  useEffect(() => {
    if (CHAT_UNDER_CONSTRUCTION) return;

    if (conversationId && isConnected) {
      fetch(`${CHAT_SERVER_URL}/api/chat/conversation/${conversationId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.conversation?.messages) {
            setMessages(data.conversation.messages);
            setIsFirstMessage(false);
          }
        })
        .catch(console.error);
    }
  }, [conversationId, isConnected]);

  // Handle pre-chat form submit
  const handlePreChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) return;

    setIsLoading(true);

    socketRef.current?.emit("start_chat", {
      session_id: sessionId,
      name: formData.name,
      email: formData.email,
      company: formData.company || undefined,
      page_url: window.location.pathname,
      user_agent: navigator.userAgent,
    });
  };

  // Handle send message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    const content = inputValue.trim();
    if (!content || !conversationId) return;

    // Optimistically add message to UI
    const tempMessage: Message = {
      id: `temp_${Date.now()}`,
      sender_type: "visitor",
      sender_name: formData.name || "You",
      content,
      created_at: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, tempMessage]);
    setInputValue("");

    // Send via socket
    socketRef.current?.emit("visitor_message", {
      conversation_id: conversationId,
      content,
      is_first_message: isFirstMessage,
    });

    if (isFirstMessage) {
      setIsFirstMessage(false);
    }
  };

  // Handle typing indicator (throttled - emits once every 2 seconds)
  const handleTyping = () => {
    if (conversationId && !isTypingEmittedRef.current) {
      isTypingEmittedRef.current = true;

      socketRef.current?.emit("typing", {
        conversation_id: conversationId,
        is_visitor: true,
      });

      // Reset after 2 seconds
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      typingTimeoutRef.current = setTimeout(() => {
        isTypingEmittedRef.current = false;
      }, 2000);
    }
  };

  // Open chat
  const openChat = () => {
    setIsOpen(true);
    setHasNewMessage(false);
    if (!CHAT_UNDER_CONSTRUCTION) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={openChat}
            className="fixed bottom-6 right-6 w-14 h-14 bg-[#043f34] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all z-[9999] flex items-center justify-center"
            type="button"
          >
            <MessageCircle className="w-6 h-6" />
            {hasNewMessage && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center animate-pulse">
                !
              </span>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-6 right-6 w-[380px] ${CHAT_UNDER_CONSTRUCTION ? "" : "h-[550px]"} bg-white rounded-2xl shadow-2xl z-[9999] flex flex-col overflow-hidden`}
          >
            {/* Header */}
            <div className="bg-[#043f34] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">FastScraping</h3>
                  <p className="text-xs text-white/70">
                    {CHAT_UNDER_CONSTRUCTION
                      ? "Live Chat"
                      : isConnected
                        ? "We're online!"
                        : "Connecting..."}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
                type="button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* ========================================== */}
            {/* WIP Mode: Show "under construction" view   */}
            {/* ========================================== */}
            {CHAT_UNDER_CONSTRUCTION ? (
              <WorkInProgressView />
            ) : (
              <>
                {/* Pre-chat Form */}
                {showPreChat ? (
                  <div className="flex-1 p-6 overflow-y-auto bg-[#faf9f7]">
                    <div className="text-center mb-6">
                      <h4 className="font-semibold text-gray-800 text-lg">
                        Start a conversation
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        We typically reply within 5 minutes
                      </p>
                    </div>

                    <form onSubmit={handlePreChatSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#043f34] focus:ring-2 focus:ring-[#043f34]/20 outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#043f34] focus:ring-2 focus:ring-[#043f34]/20 outline-none transition-all"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Company{" "}
                          <span className="text-gray-400">(optional)</span>
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#043f34] focus:ring-2 focus:ring-[#043f34]/20 outline-none transition-all"
                          placeholder="Your company"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 bg-[#043f34] text-white font-semibold rounded-xl hover:bg-[#043f34]/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Starting...
                          </>
                        ) : (
                          "Start Chat"
                        )}
                      </button>
                    </form>

                    {/* Powered by */}
                    <div className="mt-6 text-center">
                      <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        Powered by{" "}
                        <span className="font-medium text-gray-500">
                          FastScraping Team
                        </span>
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto bg-[#faf9f7] space-y-4">
                      {messages.map((msg) => {
                        const isVisitor = msg.sender_type === "visitor";
                        const isBot = msg.sender_type === "bot";

                        return (
                          <div
                            key={msg.id}
                            className={`flex ${isVisitor ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                                isVisitor
                                  ? "bg-[#043f34] text-white"
                                  : isBot
                                    ? "bg-[#b6e5d2] text-[#043f34]"
                                    : "bg-white text-gray-800 border border-gray-100"
                              }`}
                            >
                              <p className="text-sm">{msg.content}</p>
                              <p
                                className={`text-xs mt-1 ${isVisitor ? "text-white/60" : "text-gray-400"}`}
                              >
                                {new Date(msg.created_at).toLocaleTimeString(
                                  [],
                                  {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  },
                                )}
                              </p>
                            </div>
                          </div>
                        );
                      })}

                      {/* Typing Indicator */}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-white rounded-2xl px-4 py-3 border border-gray-100">
                            <div className="flex gap-1">
                              <span
                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0ms" }}
                              />
                              <span
                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                style={{ animationDelay: "150ms" }}
                              />
                              <span
                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                style={{ animationDelay: "300ms" }}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form
                      onSubmit={handleSendMessage}
                      className="p-4 bg-white border-t border-gray-100"
                    >
                      <div className="flex gap-2">
                        <input
                          ref={inputRef}
                          type="text"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={handleTyping}
                          placeholder="Type your message..."
                          className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#043f34] focus:ring-2 focus:ring-[#043f34]/20 outline-none transition-all text-sm"
                        />
                        <button
                          type="submit"
                          disabled={!inputValue.trim()}
                          className="w-10 h-10 bg-[#043f34] text-white rounded-xl flex items-center justify-center hover:bg-[#043f34]/90 transition-all disabled:opacity-50"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ============================================
// Main component with Portal - FIXES HYDRATION ERROR
// ============================================
export default function ChatWidget() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything on server side
  if (!mounted) return null;

  // Use Portal to render directly in document.body
  // This prevents the hydration error
  return createPortal(<ChatWidgetContent />, document.body);
}
