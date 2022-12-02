import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(DrawSVGPlugin, SplitText);

gsap.defaults({
  duration: 2,
});

export * from "gsap";
export * from "gsap/dist/SplitText";
