import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RefObject } from "react";
gsap.registerPlugin(useGSAP);

type props = {
  ele: RefObject<HTMLElement>;
  trigger: RefObject<HTMLElement>;
  y?: number;
  start?: string;
  end?: string;
};
const useMobileParallax = ({ ele, trigger, y, start, end }: props) => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      gsap.to(ele.current, {
        y: y || -50,
        ease: "none",
        scrollTrigger: {
          trigger: trigger.current,
          scroller: "body",
          start: start || "top 60%",
          end: end || "top 0%",
          scrub: 2,
        },
      });
    });
  });
};

const useDesktopParallax = ({ ele, trigger, y, start, end }: props) => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.to(ele.current, {
        y: y || -100,
        ease: "none",
        scrollTrigger: {
          trigger: trigger.current,
          scroller: "body",
          start: start || "top 80%",
          end: end || "top 0%",
          scrub: 2,
        },
      });
    });
  });
};

export { useMobileParallax, useDesktopParallax };
