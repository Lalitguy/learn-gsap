import StaggeredText from "./animated/StaggeredText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "@studio-freight/react-lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import PopUpText from "./animated/PopUpText";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeroSection = () => {
  const timeline = gsap.timeline();
  useLenis();
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      gsap.to([".hero-text-section", ".mobile-hero-info-wrap"], {
        y: -50,
        scrollTrigger: {
          trigger: ".hero-text-section",
          scroller: "body",
          start: "top 50%",
          end: "top -20%",
          scrub: 3,
        },
      });
    });

    mm.add("(min-width: 768px)", () => {
      gsap.to(".image-container", {
        scale: 1.3,
        scrollTrigger: {
          scroller: "body",
          trigger: ".hero-wrap",
          scrub: 2,
          start: "top top",
          end: "bottom 30%",
          pin: true,
          snap: 3,
          onUpdate: (self) => {
            if (self?.progress >= 0.5) {
              const opacity = (self.progress - 0.5) * 2;
              gsap.to(".hero-text-section-anew", {
                opacity: opacity,
              });
            } else {
              const opacity = 1 - self?.progress * 2;
              gsap.to([".hero-text-section", ".desktop-hero-info-wrap"], {
                opacity: opacity,
                ease: "power1.out",
              });
            }
          },
        },
      });
    });
  });

  return (
    <>
      <section className="hero-wrap">
        <div className="hero-img-section">
          <picture className="image-container">
            <source
              media="(min-width: 768px)"
              srcSet="/assets/hero.webp"
            ></source>
            <img src="/assets/hero_mob.webp" />
          </picture>
        </div>

        <div className="hero-text-section">
          <StaggeredText
            className="hero-text"
            parentClassName="negative-margin"
            delay={0.8}
          >
            Heavn
          </StaggeredText>
          <StaggeredText
            className="bigger-hero-text"
            delay={1.2}
            timeline={timeline}
          >
            One
          </StaggeredText>
        </div>

        <div className="hero-text-section-anew">
          <p>HEAVN One</p>
          <p>
            <span>Brightens up your workday</span>, reduces tiredness and
            improves your sleep.
          </p>
        </div>

        <div className="desktop-hero-info-wrap">
          <PopUpText className="whiter" timeline={timeline}>
            The world's brightest desk luminaire.
          </PopUpText>
          <PopUpText timeline={timeline} className="grayer">
            Scroll to learn more.
          </PopUpText>
        </div>
      </section>
      <div className="mobile-hero-info-wrap">
        <p>The world's brightest desk luminaire.</p>
        <p>
          Brightens up your workday, reduces tiredness and improves your sleep.
        </p>

        <a href="#">Order now</a>
      </div>
    </>
  );
};

export default HeroSection;
