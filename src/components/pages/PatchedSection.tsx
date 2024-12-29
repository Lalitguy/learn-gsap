import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMobileParallax, useDesktopParallax } from "../hooks/UseParallax";
import { useLenis } from "@studio-freight/react-lenis";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function PatchedSection() {
  const patch = useRef<HTMLDivElement>(null);
  const patchWrap = useRef<HTMLDivElement>(null);
  const sectionWrap = useRef<HTMLDivElement>(null);
  const patchImg = useRef<HTMLImageElement>(null);

  useLenis();
  useMobileParallax({
    ele: sectionWrap,
    trigger: sectionWrap,
  });

  // useDesktopParallax({
  //   ele: patchWrap,
  //   trigger: patchWrap,
  // });

  useDesktopParallax({
    ele: patchImg,
    trigger: patchImg,
    y: 20,
    start: "top bottom",
  });

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(max-width: 767px)", () => {
      gsap.from(patch.current, {
        scale: 50,
        filter: "blur(12px)",
        scrollTrigger: {
          trigger: patchWrap.current,
          scroller: "body",
          scrub: 0.2,
          start: "top 50%",
          end: "top 0%",
        },
      });
    });

    mm.add("(min-width: 768px)", () => {
      gsap.from(patch.current, {
        scale: 50,
        filter: "blur(12px)",
        ease: "none",
        scrollTrigger: {
          trigger: patchWrap.current,
          scroller: "body",
          scrub: 2,
          start: "top 0%",
          end: "+=100%",
          pin: true,
        },
      });
      gsap.from(patch.current, {
        backgroundColor: "#fff",
        ease: "none",
        scrollTrigger: {
          trigger: patchWrap.current,
          scroller: "body",
          scrub: 1,
          start: "top 50%",
          end: "top 10%",
          pinSpacing: false,
        },
      });
    });
  });

  return (
    <div ref={sectionWrap}>
      <MobileHeroInfo />
      <section className=" container patch-wrap" ref={patchWrap}>
        <div className="patch-text-wrap">
          <div className="patch-text-mobile">
            Light that
            <br />
            feels like sun.
          </div>
          <div className="patch-text-desktop">
            <div className="patch-big-healine">
              Light
              <div className="patch-img-container">
                <img
                  src="/public/assets/patch-img.webp"
                  className="patch-img"
                  ref={patchImg}
                />
              </div>
              that
            </div>
            feels like Sun.
          </div>
          <div className="patch-info">
            <p>
              As the first hybrid of desk and daylight luminaire, HEAVN One
              delivers ideal light at any time of day and enhances your
              well-being and performance.
            </p>
          </div>
        </div>
        <div className="patch-section">
          <div className="patch" ref={patch}></div>
        </div>
      </section>
    </div>
  );
}

const MobileHeroInfo = () => {
  return (
    <div className="mobile-hero-info-wrap mobile-parallax container">
      <p>The world's brightest desk luminaire.</p>
      <p>
        Brightens up your workday, reduces tiredness and improves your sleep.
      </p>

      <a href="#">Order now</a>
    </div>
  );
};
export default PatchedSection;
