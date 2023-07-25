import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(DrawSVGPlugin, SplitText, ScrollTrigger);

gsap.defaults({
  duration: 2,
});

export * from "gsap";
export * from "gsap/dist/ScrollTrigger";
export * from "gsap/dist/SplitText";
