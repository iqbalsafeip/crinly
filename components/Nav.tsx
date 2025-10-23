"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun, Menu, X, DollarSign, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import DownloadWhitepaperSimple from "./Download";
import Taggy from "./Taggy";

export const Nav: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-[1000]
        backdrop-blur-lg bg-white/20 dark:bg-black/20
        border-b border-white/10 dark:border-gray-800/60
        shadow-[0_0_30px_rgba(0,0,0,0.1)]
      "
    >
      <nav
        className="
          flex items-center justify-between
          max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-16
        "
      >
        

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            onClick={() => window.open("https://pump.fun/coin/FtDW33WhcLshkZw4G37GMNqWYQgv4sfTDzqbKjX9pump", "_blank", "noopener,noreferrer")}
            variant="ghost"
            className="
              flex items-center gap-2 w-full justify-center rounded-full
              bg-blue-100/30 dark:bg-blue-500/10
              hover:bg-blue-200/50 dark:hover:bg-blue-500/30
              transition-all
            "
          >
            <DollarSign className="size-4" /> Buy $TAG
          </Button>
          <Button
            onClick={() => window.open("https://x.com/TaggyAssistant", "_blank", "noopener,noreferrer")}
            variant="ghost"
            className="
              flex items-center gap-2 w-full justify-center rounded-full
              bg-blue-100/30 dark:bg-blue-500/10
              hover:bg-blue-200/50 dark:hover:bg-blue-500/30
              transition-all
            "
          >
            <Twitter className="size-4" /> Follow on X
          </Button>

          <DownloadWhitepaperSimple />

          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="ghost"
            className="flex items-center gap-2 rounded-full px-4 py-2 border border-transparent hover:border-blue-400/30 transition-all"
          >
            {theme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
            <span>{theme === "dark" ? "Light" : "Dark"} Mode</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            onClick={() => setMenuOpen(!menuOpen)}
            variant="ghost"
            className="p-2 rounded-md"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className="
            md:hidden flex flex-col items-center gap-4 py-4
            backdrop-blur-lg bg-white/10 dark:bg-black/40
            border-t border-white/10 dark:border-gray-800/60
            animate-slideDown
          "
        >
          <Button
            onClick={() => window.open("#", "_blank", "noopener,noreferrer")}
            variant="ghost"
            className="
              flex items-center gap-2 w-11/12 justify-center rounded-full
              bg-blue-100/30 dark:bg-blue-500/10
              hover:bg-blue-200/50 dark:hover:bg-blue-500/30
              transition-all
            "
          >
            <DollarSign className="size-4" /> Buy $TAG
          </Button>

          <div className="w-11/12">
            <DownloadWhitepaperSimple />
          </div>

          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="ghost"
            className="
              flex items-center gap-2 w-11/12 justify-center rounded-full
              bg-transparent hover:bg-blue-200/10
            "
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
      )}

      {/* Taggy AI floating bottom-left */}

      <style jsx>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.25s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Nav;
