import SlideUpAnchor from "./animated/SlideUpAnchor";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

function NavBar() {
  const logoRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.to(logoRef.current, {
        filter: "invert(100%)",
        scrollTrigger: {
          trigger: ".patch-wrap",
          scroller: "body",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
      gsap.to(".nav-order-btn", {
        color: "rgb(24,24,24)",
        background: "rgba(0, 0, 0, 0.1)",
        scrollTrigger: {
          trigger: ".patch-wrap",
          scroller: "body",
          start: "top 20%",
          end: "top 0",
          scrub: 2,
        },
      });
    });
  });
  return (
    <header className="nav-bar">
      <div className="nav-bar-inner">
        <a href="#">
          <img
            src="/assets/logo-new.png"
            className="logo"
            alt="logo"
            ref={logoRef}
          />
        </a>

        <SlideUpAnchor className="nav-order-btn" href="#">
          Order now
        </SlideUpAnchor>
      </div>
    </header>
  );
}

export default NavBar;
