import Image from "next/image";
import React from "react";

type Props = {
  src?: string;            // path ke gambar, default /taggy.png
  alt?: string;
  sizeVW?: number;         // ukuran responsif dalam vw (mis. 18 = 18vw)
  maxWidthPx?: number;     // batas maksimum ukuran (px)
  minWidthPx?: number;     // batas minimum ukuran (px)
  zIndex?: number;
  float?: boolean;         // apakah ada animasi mengapung
};

export default function Taggy({
  src = "/bg.webp",
  alt = "Taggy AI",
  sizeVW = 18,
  maxWidthPx = 200,
  minWidthPx = 100,
  zIndex = 9999,
  float = true,
}: Props) {
  // hitung inline style yang fleksibel untuk <img> (menghindari layout issues Image)
  const style: React.CSSProperties = {
    width: `${sizeVW}vw`,
    maxWidth: `${maxWidthPx}px`,
    minWidth: `${minWidthPx}px`,
    height: "auto",
    pointerEvents: "none",
    userSelect: "none",
  };

  return (
    <>
      <div className="taggy-root" aria-hidden="true">
        {/* Gunakan <Image> jika mau optimization; di sini pakai Image tapi style inline */}
        <Image
          src={src}
          alt={alt}
          width={maxWidthPx}
          height={maxWidthPx}
          style={style}
          draggable={false}
          priority={false}
        />
      </div>

      <style jsx>{`
        .taggy-root {
          position: fixed;
          left: 0;
          bottom: 0;
          z-index: ${zIndex};
          display: block;
          transform-origin: left bottom;
          /* sedikit offset agar tak nempel ke edge langsung (opsional) */
          padding: 12px;
          pointer-events: none; /* pastikan tidak menangkap click */
        }

        /* animasi floating halus; hormati prefer-reduced-motion */
        @media (prefers-reduced-motion: no-preference) {
          .taggy-root img {
            transition: transform 300ms ease;
            animation: float 4.5s ease-in-out infinite;
          }

          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-6px);
            }
            100% {
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </>
  );
}
