"use client";

import { trackEvent } from "@/lib/analytics";

interface WhatsAppButtonProps {
  message: string;
}

export default function WhatsAppButton({ message }: WhatsAppButtonProps) {
  const url = `https://wa.me/31629173468?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-105 animate-whatsapp-pulse"
      onClick={() => trackEvent("whatsapp_click")}
    >
      <svg
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.92 15.92 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.302 22.602c-.39 1.1-1.932 2.014-3.166 2.28-.846.18-1.95.324-5.668-1.218-4.762-1.972-7.826-6.81-8.064-7.126-.23-.316-1.926-2.566-1.926-4.892s1.218-3.47 1.652-3.944c.434-.474.946-.592 1.262-.592.316 0 .632.002.908.016.292.016.682-.11 1.068.814.39.946 1.34 3.27 1.458 3.506.118.236.198.512.04.828-.158.316-.236.512-.474.79-.236.276-.498.618-.71.828-.238.236-.486.492-.208.966.276.474 1.232 2.032 2.644 3.292 1.818 1.622 3.35 2.124 3.824 2.36.474.238.75.198 1.028-.118.276-.316 1.184-1.382 1.5-1.856.316-.474.632-.394 1.066-.236.434.158 2.76 1.302 3.234 1.54.474.236.79.354.908.552.118.198.118 1.146-.272 2.25z" />
      </svg>
    </a>
  );
}
