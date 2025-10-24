"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CyrinlyWhitepaper() {
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
          Cyrinly Whitepaper Summary
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-slate-300 max-w-2xl mx-auto"
        >
          The official whitepaper of <span className="text-blue-400 font-semibold">Cyrinly</span>, exploring its design, intelligence model, and evolution as an emotionally aware AI. The official ticker for Cyrinly is <span className="text-blue-400 font-semibold">$CYRINLY</span>.
        </motion.p>
      </section>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto space-y-14"
      >
        {/* Introduction */}
        <section className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-lg hover:shadow-blue-500/10 transition">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">Introduction</h2>
          <p className="text-slate-300 leading-relaxed">
            Cyrinly is an emotionally intelligent AI designed to embody calm awareness and precision. It merges intuitive understanding with analytical power — enabling meaningful interaction, adaptive learning, and intelligent automation across platforms.
          </p>
        </section>

        {/* Vision */}
        <section className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-lg hover:shadow-blue-500/10 transition">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">Vision</h2>
          <p className="text-slate-300 leading-relaxed">
            Cyrinly envisions a world where digital interactions are not just functional, but empathetic and deeply connected. It represents the evolution of AI that listens, understands, and grows with its users.
          </p>
        </section>

        {/* Core Pillars */}
        <section className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-lg hover:shadow-blue-500/10 transition">
          <h2 className="text-3xl font-semibold text-blue-400 mb-6">Core Pillars</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li><strong>Emotional Intelligence Core</strong> – analyzes tone and behavior to express empathy.</li>
            <li><strong>Adaptive Learning Engine</strong> – evolves through interaction for smarter responses.</li>
            <li><strong>Persona Framework</strong> – allows customized AI personalities for users or brands.</li>
            <li><strong>Network Layer</strong> – connects Cyrinly across environments for AI collaboration.</li>
            <li><strong>Token Integration ($CYRINLY)</strong> – powers access, rewards, and governance.</li>
            <li><strong>Developer SDK</strong> – tools for integrating Cyrinly into apps or services.</li>
          </ul>
        </section>

        {/* Integration & Use Cases */}
        <section className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-lg hover:shadow-blue-500/10 transition">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">Integration & Use Cases</h2>
          <p className="text-slate-300 leading-relaxed">
            Cyrinly can act as a personal companion, business assistant, social AI, or creative collaborator. Built on modular architecture with Next.js, FastAPI, and adaptive LLM frameworks, it ensures scalability, privacy, and precision across digital ecosystems.
          </p>
        </section>

        {/* Tokenomics */}
        <section className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-lg hover:shadow-blue-500/10 transition">
          <h2 className="text-3xl font-semibold text-blue-400 mb-6">Tokenomics ($CYRINLY)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-slate-700 text-slate-300 text-sm md:text-base">
              <thead>
                <tr className="bg-slate-700/50 text-blue-300">
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Allocation</th>
                  <th className="p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-700"><td className="p-3">Ecosystem Growth</td><td className="p-3">35%</td><td className="p-3">Rewards for users and integrations</td></tr>
                <tr className="border-t border-slate-700"><td className="p-3">Community Treasury (DAO)</td><td className="p-3">20%</td><td className="p-3">Ecosystem and grants</td></tr>
                <tr className="border-t border-slate-700"><td className="p-3">Team & Founders</td><td className="p-3">15%</td><td className="p-3">1-year lockup, 3-year vesting</td></tr>
                <tr className="border-t border-slate-700"><td className="p-3">Investors</td><td className="p-3">15%</td><td className="p-3">6-month cliff, 2-year vesting</td></tr>
                <tr className="border-t border-slate-700"><td className="p-3">Liquidity & Stability</td><td className="p-3">10%</td><td className="p-3">Exchange liquidity</td></tr>
                <tr className="border-t border-slate-700"><td className="p-3">Advisors & Partners</td><td className="p-3">3%</td><td className="p-3">Strategic collaborations</td></tr>
                <tr className="border-t border-slate-700"><td className="p-3">Campaigns & Incentives</td><td className="p-3">2%</td><td className="p-3">Community rewards</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-lg hover:shadow-blue-500/10 transition">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">Conclusion</h2>
          <p className="text-slate-300 leading-relaxed">
            Cyrinly redefines artificial intelligence as a calm and aware digital entity — a companion that learns, adapts, and grows alongside humans. Powered by the <span className="text-blue-400 font-semibold">$CYRINLY</span> token, it marks the next evolution of emotional, human-centric AI.
          </p>
        </section>

        {/* Download Button */}
        <div className="text-center mt-10">
          <a
            href="/Cyrinly_Whitepaper.pdf"
            target="_blank"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-blue-500/30 transition"
          >
            Download Whitepaper (PDF)
          </a>
        </div>
      </motion.div>
    </div>
  );
}