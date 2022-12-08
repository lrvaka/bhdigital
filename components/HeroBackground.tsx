import {
  useRef,
  useState,
  useEffect,
  ReactEventHandler,
  MouseEventHandler,
} from "react";
import { Canvas, ThreeElements, useFrame, useThree } from "@react-three/fiber";
import { CanvasTexture, Mesh } from "three";
import { useTexture, RoundedBox } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap, SplitText } from "../utils/gsap";

const CameraController = () => {
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

    window.addEventListener("mousemove", changeCursorCords);

    controls.enabled = false;

    return () => {
      controls.dispose();
      window.removeEventListener("mousemove", changeCursorCords);
    };
  }, [camera, gl, viewport]);
  return null;
};

function Box({ ...props }) {
  const [matcap1] = useTexture(["./matcap1.png"]);

  const ref = useRef<Mesh>(null!);

  useEffect(() => {
    console.log(ref.current);
    let ctx = gsap.context(() => {
      gsap.from(ref.current.scale, { duration: 10, x: 0, y: 0 });
    }, ref);

    return () => ctx.revert(); // cleanup
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.1 * delta;
    ref.current.rotation.y += 0.1 * delta;
  });

  return (
    <mesh {...props} ref={ref}>
      <RoundedBox args={[2, 2, 2]} radius={0.25} smoothness={25}>
        <meshMatcapMaterial matcap={matcap1} />
      </RoundedBox>
    </mesh>
  );
}

interface HeroBackgroundProps {
  landingPage?: Boolean;
}

export default function HeroBackground({ landingPage }: HeroBackgroundProps) {
  return (
    <Canvas style={{ position: "absolute" }} className="absolute top-0 left-0">
      <CameraController />
      <Box position={landingPage ? [-0.5, 0, 2] : [1, 0.5, 2]} />
    </Canvas>
  );
}
