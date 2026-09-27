import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, type ReactNode } from "react";
import { EASE } from "./reveal";

/** Soft blue glow that follows the cursor across the whole page. */
export function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 size-[28rem] rounded-full bg-primary/10 blur-3xl"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      onPointerMove={undefined}
      ref={(node) => {
        if (!node) return;
        const move = (e: PointerEvent) => {
          x.set(e.clientX);
          y.set(e.clientY);
        };
        window.addEventListener("pointermove", move, { passive: true });
      }}
    />
  );
}

/** Card that tilts in 3D toward the cursor. */
export function TiltCard({
  children,
  className,
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), {
    stiffness: 200,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), {
    stiffness: 200,
    damping: 18,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        px.set((e.clientX - rect.left) / rect.width);
        py.set((e.clientY - rect.top) / rect.height);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Button/link that springs up on hover and presses down on tap. */
export function Springy({
  children,
  className,
  href,
  target,
  rel,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className={className}
      whileHover={{ y: -4, scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.a>
  );
}

/** Icon wrapper that spins/pops when the parent group is hovered. */
export function PopIcon({ children }: { children: ReactNode }) {
  return (
    <motion.span
      className="inline-flex"
      whileHover={{ rotate: 12, scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
    >
      {children}
    </motion.span>
  );
}
