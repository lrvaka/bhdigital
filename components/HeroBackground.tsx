import {
  useRef,
  useState,
  useContext,
  useEffect,
  ReactEventHandler,
  MouseEventHandler,
  MutableRefObject,
  RefObject,
} from "react";
import InitialLoadContext from "../store/initialLoad-context";
import { Canvas, ThreeElements, useFrame, useThree } from "@react-three/fiber";
import { CanvasTexture, Mesh } from "three";
import { useTexture, RoundedBox } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap, SplitText } from "../utils/gsap";

type CallbackType = (animation: GSAPTimeline, index: number | string) => void;

interface HeroBackgroundProps {
  landingPage?: Boolean;
  addAnimation?: CallbackType;
  setIsOpen?: (value: boolean) => void;
  isOpen?: boolean;
  heroRef?: RefObject<HTMLDivElement>;
}

const CameraController = ({
  heroRef,
}: {
  heroRef: RefObject<HTMLDivElement> | undefined;
}) => {
  const { camera, gl } = useThree();
  const viewport = useThree((state) => state.viewport);

  const sizes = { width: 0, height: 0 };
  const cursor = { x: 0, y: 0 };

  const changeCursorCords = (event: MouseEvent) => {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = event.clientY / sizes.height - 0.5;
  };

  useFrame((state, delta) => {
    const parallaxX = cursor.x * 1;
    const parallaxY = -cursor.y * 1;
    camera.position.x += (parallaxX - camera.position.x) * 5 * delta;
    camera.position.y += (parallaxY - camera.position.y) * 5 * delta;
  });

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    sizes.width = viewport.width * viewport.factor;
    sizes.height = viewport.height * viewport.factor;

    if (heroRef && heroRef.current) {
      heroRef.current?.addEventListener("mousemove", changeCursorCords);
    }

    controls.enabled = false;

    return () => {
      controls.dispose();
      heroRef?.current?.removeEventListener("mousemove", changeCursorCords);
    };
  }, [camera, gl, viewport]);
  return null;
};

function Box({
  addAnimation,
  isOpen,
  setIsOpen,
  position,
}: {
  addAnimation?: CallbackType;
  setIsOpen?: (value: boolean) => void;
  isOpen?: boolean;
  position?: [number, number, number];
}) {
  const [matcap1] = useTexture(["./matcap1.png"]);

  const ref = useRef<Mesh>(null!);

  useEffect(() => {
    let animation = gsap.timeline();

    let ctx = gsap.context(() => {
      animation = gsap
        .timeline()
        .from(ref.current.scale, { duration: 10, x: 0.5, y: 0.5 });
    }, ref);

    animation.call(
      () => {
        if (setIsOpen) setIsOpen(true);
      },
      [],
      "-=7.5"
    );

    if (addAnimation) addAnimation(animation, ">");

    return () => ctx.revert(); // cleanup
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.1 * delta;
    ref.current.rotation.y += 0.1 * delta;
  });

  return (
    <mesh position={position} ref={ref}>
      <RoundedBox args={[2, 2, 2]} radius={0.25} smoothness={25}>
        <meshMatcapMaterial matcap={matcap1} />
      </RoundedBox>
    </mesh>
  );
}

export default function HeroBackground({
  landingPage,
  addAnimation,
  isOpen,
  setIsOpen,
  heroRef,
}: HeroBackgroundProps) {
  return (
    <Canvas style={{ position: "absolute" }} className="absolute top-0 left-0">
      <CameraController heroRef={heroRef} />
      <Box
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addAnimation={addAnimation}
        position={landingPage ? [-0.5, 0, 2] : [1, 0.5, 2]}
      />
    </Canvas>
  );
}
