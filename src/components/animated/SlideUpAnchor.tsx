import gsap from "gsap";
import { ReactNode, useRef } from "react";

type slideUpProps = {
  children: ReactNode;
  className: string;
  href: string;
};

function SlideUpAnchor({ children, className, href }: slideUpProps) {
  const slideBox = useRef<HTMLDivElement>(null);

  const slideUp = () => {
    const children = slideBox.current?.children;

    if (children && children.length === 2) {
      gsap.to(children[0], {
        y: "-100%",
        duration: 0.2,
      });
      gsap.to(children[1], {
        y: "-100%",
        duration: 0.2,
      });
    }
  };

  const slideDown = () => {
    const children = slideBox.current?.children;

    if (children && children.length === 2) {
      gsap.to(children[0], {
        y: "0%",
        duration: 0.2,
      });
      gsap.to(children[1], {
        y: "0%",
        duration: 0.2,
      });
    }
  };
  return (
    <a
      className={className}
      href={href}
      onMouseEnter={slideUp}
      onMouseLeave={slideDown}
    >
      <div className="slideUpBox" ref={slideBox}>
        <div>{children}</div>
        <div>{children}</div>
      </div>
    </a>
  );
}

export default SlideUpAnchor;
