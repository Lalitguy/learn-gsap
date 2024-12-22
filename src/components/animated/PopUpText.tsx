import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  timeline?: GSAPTimeline;
};

function PopUpText({ children, className, delay, timeline }: props) {
  const textRef = useRef<HTMLParagraphElement>(null);

  const gs = timeline || gsap;
  useGSAP(() => {
    gs.from(textRef.current, {
      y: 20,
      duration: 0.4,
      ...(delay ? { delay } : {}),
    });
  });

  return (
    <div style={{ overflow: "hidden" }}>
      <p ref={textRef} className={className || ""}>
        {children}
      </p>
    </div>
  );
}

export default PopUpText;
