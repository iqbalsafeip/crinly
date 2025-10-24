"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CyrinlyRoadmap() {
  const roadmap = [
    {
      phase: "Phase 1 — Foundation (Q4 2025)",
      points: [
        "Concept creation and development of Cyrinly AI core.",
        "Launch of official website and community channels.",
        "Whitepaper release and introduction of $CYRINLY token.",
        "Initial testing of emotional intelligence and adaptive modules."
      ]
    },
    {
      phase: "Phase 2 — Integration (Q1 2026)",
      points: [
        "Deployment of Cyrinly Beta across supported platforms.",
        "Launch of Cyrinly API and SDK for developers.",
        "Partnership integrations with community and Web3 projects.",
        "Introduction of user-driven persona customization."
      ]
    },
    {
      phase: "Phase 3 — Expansion (Q2–Q3 2026)",
      points: [
        "Advanced adaptive learning engine release.",
        "Launch of Cyrinly companion app.",
        "Governance activation and staking model for $CYRINLY.",
        "Integration with decentralized data and AI agents."
      ]
    },
    {
      phase: "Phase 4 — Evolution (2027 and Beyond)",
      points: [
        "Full multi-agent collaboration between Cyrinly instances.",
        "AI-to-AI communication and emotional resonance layer.",
        "Cross-platform ecosystem expansion and long-term sustainability roadmap.",
        "Research and development toward self-adaptive consciousness framework."
      ]
    }
  ];

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
          Cyrinly Roadmap
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-slate-300 max-w-2xl mx-auto"
        >
          Follow the evolution of <span className="text-blue-400 font-semibold">Cyrinly</span> and its journey toward becoming a fully aware digital intelligence. The official ticker for Cyrinly is <span className="text-blue-400 font-semibold">$CYRINLY</span>.
        </motion.p>
      </section>

      {/* Roadmap Timeline */}
      <div className="max-w-5xl mx-auto space-y-12">
        {roadmap.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/10 transition"
          >
            <div className="absolute -left-4 top-8 h-8 w-8 bg-blue-500 rounded-full shadow-md hidden md:block" />
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">{item.phase}</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/whitepaper"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-blue-500/30 transition"
        >
          Read Cyrinly Whitepaper
        </a>
      </div>
    </div>
  );
}