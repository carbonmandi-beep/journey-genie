"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SupportChatWidget = dynamic(
  () =>
    import("@/components/chat/SupportChatWidget").then(
      (m) => m.SupportChatWidget
    ),
  { ssr: false }
);

export function DeferredSiteExtras() {
  const pathname = usePathname();
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (pathname?.startsWith("/admin")) return;

    let cancelled = false;

    const enableChat = () => {
      if (!cancelled) {
        setShowChat(true);
      }
    };

    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (
      typeof window !== "undefined" &&
      "requestIdleCallback" in window
    ) {
      idleId = window.requestIdleCallback(enableChat, {
        timeout: 2500,
      });
    } else {
      timeoutId = setTimeout(enableChat, 1500);
    }

    return () => {
      cancelled = true;

      if (
        idleId !== undefined &&
        "cancelIdleCallback" in window
      ) {
        window.cancelIdleCallback(idleId);
      }

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [pathname]);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return <>{showChat ? <SupportChatWidget /> : null}</>;
}
