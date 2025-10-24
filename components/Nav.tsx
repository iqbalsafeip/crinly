"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full z-10000 bg-white/60 backdrop-blur-md dark:bg-slate-900/60 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a className="flex items-center" href="/">
            <Image alt="logo" src={"/logo.png"} width={"200"} height={"40"} />

          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="/about" className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200">
              About
            </a>
            <a href="/whitepaper" className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200">
              Whitepaper
            </a>
            <a href="/roadmap" className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200">
              Roadmap
            </a>
          </div>

          {/* Right side: action + mobile button */}
          <div className="flex items-center gap-3">
            <a
              href="https://x.com/Cyrinly"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block px-4 py-2 rounded-lg text-sm font-medium bg-sky-600 text-white hover:bg-sky-700"
            >
              Follow on X
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block px-4 py-2 rounded-lg text-sm font-medium bg-sky-600 text-white hover:bg-sky-700"
            >
              Buy $CYRINLY
            </a>

            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="md:hidden p-2 rounded-md inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (collapsible) */}
        <div
          id="mobile-menu"
          className={`${open ? "block" : "hidden"} md:hidden mt-3 pb-4 border-t border-slate-200 dark:border-slate-800`}
        >
          <div className="space-y-2">
            <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200">
              About
            </a>
            <a href="/whitepaper" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200">
              Whitepaper
            </a>
            <a href="/roadmap" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200">
              Roadmap
            </a>
            <a href="https://x.com/Cyrinly" className="block w-full text-center mt-1 px-3 py-2 rounded-md text-sm font-medium bg-sky-600 text-white hover:bg-sky-700">
              Follow on X
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
