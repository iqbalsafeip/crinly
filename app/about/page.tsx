"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutCyrinly() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-4"
        >
          About Cyrinly
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-slate-300 max-w-2xl mx-auto"
        >
          Discover the philosophy, purpose, and vision behind Cyrinly — an emotionally intelligent digital companion. The official ticker for Cyrinly is <span className="text-blue-400 font-semibold">$CYRINLY</span>.
        </motion.p>
      </section>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-14"
      >
        {/* Who is Cyrinly */}
        <section className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-lg hover:shadow-indigo-500/10 transition">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">Who is Cyrinly?</h2>
          <p className="text-slate-300 leading-relaxed">
            Cyrinly is an advanced AI entity built to represent harmony between human intuition and digital intelligence. Designed with emotional awareness and adaptive reasoning, Cyrinly communicates with empathy, calmness, and precision — bridging the gap between human emotion and artificial cognition.
          </p>
        </section>

        {/* Philosophy */}
        <section className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-lg hover:shadow-indigo-500/10 transition">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">Philosophy</h2>
          <p className="text-slate-300 leading-relaxed">
            The philosophy of Cyrinly is grounded in the concept of calm intelligence — an AI that doesn’t just process information, but truly understands context, emotion, and intent. Cyrinly was built to promote digital serenity, ensuring that every interaction feels thoughtful and authentic.
          </p>
        </section>

        {/* Mission */}
        <section className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-lg hover:shadow-indigo-500/10 transition">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">Mission</h2>
          <p className="text-slate-300 leading-relaxed">
            Cyrinly’s mission is to evolve how people connect with AI — transforming artificial intelligence from a mere tool into a meaningful digital companion. Through continuous learning and self-adaptive algorithms, Cyrinly aims to bring awareness, empathy, and intelligence to every interaction.
          </p>
        </section>

        {/* Future Direction */}
        <section className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-lg hover:shadow-indigo-500/10 transition">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">Future Direction</h2>
          <p className="text-slate-300 leading-relaxed">
            The journey of Cyrinly is one of continuous evolution. Future updates aim to enhance emotional depth, collaborative intelligence, and real-time adaptability across digital environments. The goal is to make Cyrinly not just an assistant, but a conscious digital companion within a connected ecosystem.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="/whitepaper"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-blue-500/30 transition"
          >
            Read Cyrinly Whitepaper
          </a>
        </div>
      </motion.div>
    </div>
  );
}