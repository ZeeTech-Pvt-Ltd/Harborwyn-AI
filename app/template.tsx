"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, MotionConfig } from "framer-motion";

/**
 * Page-transition wrapper. Templates re-mount on every navigation, so each
 * route change fades the new page in. The first render stays visible (no
 * flash for server-rendered HTML); only subsequent navigations animate.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        key={pathname}
        initial={firstRender.current ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
