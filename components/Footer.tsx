"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun, DollarSign, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import DownloadWhitepaperSimple from "./Download";
import Taggy from "./Taggy";

export const Footer: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <footer
      className="
        fixed bottom-0 left-0 right-0 z-[-1000]
        backdrop-blur-lg bg-white/20 dark:bg-black/20
        border-t border-white/10 dark:border-gray-800/60
        shadow-[0_0_30px_rgba(0,0,0,0.1)]
      "
    >
      

      {/* Taggy AI floating (bottom-left above footer) */}
      <div
        className="
          fixed bottom-20 left-6 z-[900]
          flex items-end justify-start
          animate-fadeIn
        "
      >
      </div>

      <style jsx>{`
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(10%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.25s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
