import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type props = {
  children: string;
  className?: string;
  parentClassName?: string;
  delay?: number;
  timeline?: GSAPTimeline;
};

gsap.registerPlugin(useGSAP);

function StaggeredText({
  children,
  className,
  parentClassName,
  delay,
  timeline,
}: props) {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const letters = textRef.current?.querySelectorAll(".letter");

    const gs = timeline || gsap;

    if (letters && letters.length > 0) {
      gs.from(letters, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        ...(delay ? { delay: delay } : {}),
      });
    }
  });

  return (
    <div
      className={`animated-text-wrap ${parentClassName || " "}`}
      ref={textRef}
    >
      {children.split("").map((char, i) => (
        <span className={`letter ${className || ""}`} key={i}>
          {char}
        </span>
      ))}
    </div>
  );
}

export default StaggeredText;
