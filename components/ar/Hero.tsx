"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        textAlign: "center",
        zIndex: 5,
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 800,
            letterSpacing: 4,
            marginBottom: 20,
          }}
        >
          ZYNO AI
        </h1>

        <p
          style={{
            fontSize: 24,
            color: "#94a3b8",
            marginBottom: 40,
          }}
        >
          Experience the Future
        </p>

<button
  onClick={() => alert("Welcome to ZYNO AI")}
  style={{
    padding: "18px 42px",
    borderRadius: 999,
    border: "none",
    background: "linear-gradient(90deg,#06b6d4,#3b82f6)",
    color: "white",
    fontSize: 22,
    fontWeight: 700,
    cursor: "pointer",
  }}
>
  ✨ Enter ZYNO AI
</button>
      </motion.div>
    </div>
  );
}