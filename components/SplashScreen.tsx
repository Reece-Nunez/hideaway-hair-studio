"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<"logo" | "transition" | "done" | "skip">("logo");
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const logoRef = useRef<HTMLDivElement>(null);
  const hasCheckedStorage = useRef(false);

  // Check if splash has already been shown this session
  useEffect(() => {
    if (hasCheckedStorage.current) return;
    hasCheckedStorage.current = true;

    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (hasSeenSplash) {
      setPhase("skip");
      onComplete();
    } else {
      sessionStorage.setItem("hasSeenSplash", "true");
    }
  }, [onComplete]);

  useEffect(() => {
    if (phase === "skip") return;

    // Calculate the position the logo needs to move to (navbar logo position)
    // Header: py-6 (24px top padding)
    // Nav: full width with px-6 (24px) lg:px-12 (48px) padding
    // Logo: h-10 (40px) w-48 (192px)
    const calculateTargetPosition = () => {
      if (!logoRef.current) return;

      const logoRect = logoRef.current.getBoundingClientRect();
      const logoCenterX = logoRect.left + logoRect.width / 2;
      const logoCenterY = logoRect.top + logoRect.height / 2;

      const windowWidth = window.innerWidth;
      const horizontalPadding = windowWidth >= 1024 ? 48 : 24; // lg:px-12 : px-6
      const verticalPadding = 24; // py-6

      // Logo in navbar: h-10 (40px height), w-48 (192px width)
      // When splash logo scales to 0.5, it becomes ~140px wide (from 280px)
      // We want the center of the scaled logo to align with center of navbar logo
      const navbarLogoWidth = 192;
      const navbarLogoHeight = 40;

      const targetX = horizontalPadding + (navbarLogoWidth / 2);
      const targetY = verticalPadding + (navbarLogoHeight / 2);

      setTargetPosition({
        x: targetX - logoCenterX,
        y: targetY - logoCenterY,
      });
    };

    calculateTargetPosition();
    window.addEventListener("resize", calculateTargetPosition);
    return () => window.removeEventListener("resize", calculateTargetPosition);
  }, [phase]);

  useEffect(() => {
    if (phase === "skip") return;

    // Phase 1: Show logo for 1 second
    const logoTimer = setTimeout(() => {
      setPhase("transition");
    }, 1000);

    // Phase 2: Transition animation takes ~0.8s, then complete
    const completeTimer = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 1800);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, phase]);

  if (phase === "done" || phase === "skip") return null;

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "transition" ? 0 : 1 }}
        transition={{ duration: 0.6, delay: phase === "transition" ? 0.4 : 0 }}
        className="fixed inset-0 z-[100] bg-charcoal"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            ref={logoRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              phase === "logo"
                ? { opacity: 1, scale: 1, x: 0, y: 0 }
                : {
                    opacity: 1,
                    scale: 0.5,
                    x: targetPosition.x,
                    y: targetPosition.y
                  }
            }
            transition={
              phase === "logo"
                ? { duration: 0.6, ease: "easeOut" }
                : { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
            }
          >
            <Image
              src="/logo-white.png"
              alt="Hideaway Hair Studio"
              width={280}
              height={80}
              className="h-20 w-auto"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
