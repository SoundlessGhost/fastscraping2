"use client";

import dynamic from "next/dynamic";

// Dynamic import with SSR disabled - prevents hydration errors
const ChatWidget = dynamic(() => import("./ChatWidget"), {
  ssr: false,
});

export default function ChatWidgetWrapper() {
  return <ChatWidget />;
}
