export default function FuturisticBackgroundSmooth() {
  return (
    <div
      className="fixed inset-0 w-full h-full -z-50 overflow-hidden 
                 bg-gradient-to-br from-[#0a0f25] via-[#101936] to-[#1a1f3f]"
    >
      {/* Subtle moving gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-[160px] animate-orb1" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/15 rounded-full blur-[180px] animate-orb2" />
      <div className="absolute top-1/2 right-1/3 w-[22rem] h-[22rem] bg-cyan-400/10 rounded-full blur-[140px] animate-orb3" />

      {/* Subtle particle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:60px_60px]" />

      {/* Light beam sweep (soft) */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-0 animate-shine" />

      <style jsx>{`
        /* Smooth light sweep */
        @keyframes shine {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          50% {
            opacity: 0.2;
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }

        /* Slow-floating orbs */
        @keyframes orb1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(40px, -30px) scale(1.05);
          }
        }

        @keyframes orb2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-50px, 40px) scale(1.08);
          }
        }

        @keyframes orb3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, 50px) scale(1.1);
          }
        }

        .animate-shine {
          animation: shine 16s linear infinite;
        }
        .animate-orb1 {
          animation: orb1 24s ease-in-out infinite;
        }
        .animate-orb2 {
          animation: orb2 28s ease-in-out infinite;
        }
        .animate-orb3 {
          animation: orb3 32s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
