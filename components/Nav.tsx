"use client";

import { Button } from "./ui/button";
import { Moon, Sun, DollarSign } from "lucide-react";
import Github from "./logos/GitHub";
import pkg from "@/package.json";
import { useTheme } from "next-themes";
import Taggy from "./Taggy";
import DownloadWhitepaperSimple from "./Download";
import FuturisticBackground from "./Background";

export const Nav = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={"fixed top-0 right-0 px-4 py-2 flex items-center h-14 z-50"}
    >
      <div className={"ml-auto flex items-center gap-1"}>
        <Button
  onClick={() => window.open("#", "_blank", "noopener,noreferrer")}
  variant="ghost"
  className="relative ml-auto flex items-center gap-2 rounded-full px-5 py-2.5
             overflow-hidden font-medium tracking-wide
             transition-all duration-300 ease-in-out
             text-blue-600 dark:text-blue-200
             bg-blue-100/40 hover:bg-blue-200/60
             dark:bg-blue-500/10 dark:hover:bg-blue-500/20
             border border-blue-300/50 dark:border-blue-500/30
             shadow-md hover:shadow-blue-400/50 dark:shadow-blue-800/50"
>
  {/* Glow layer */}
  <span className="absolute inset-0 bg-blue-400 opacity-0 blur-lg 
                   transition-opacity duration-500 group-hover:opacity-20 dark:group-hover:opacity-30" />

  {/* Moving light sweep */}
  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 
                   bg-gradient-to-r from-transparent via-blue-400/50 to-transparent 
                   animate-[shine_2s_linear_infinite]" />

  {/* Icon & Text */}
  <DollarSign className="size-4 relative z-10 text-blue-500 dark:text-blue-300" />
  <span className="relative z-10">Buy $TAGGY</span>

  <style jsx>{`
    @keyframes shine {
      0% {
        transform: translateX(-100%);
      }
      50% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  `}</style>
</Button>
<DownloadWhitepaperSimple />
<Taggy />

        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5 rounded-full"}
        >
          <span>
            {theme === "dark" ? (
              <Sun className={"size-4"} />
            ) : (
              <Moon className={"size-4"} />
            )}
          </span>
          <span>{theme === 'dark' ? "Light" : "Dark"} Mode</span>
        </Button>
      </div>
    </div>
  );
};
