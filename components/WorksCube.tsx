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
import * as THREE from "three";
import {
  Canvas,
  ThreeElements,
  ThreeEvent,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { CanvasTexture, Mesh } from "three";
import { useTexture, RoundedBox, Effects } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap, ScrollTrigger } from "../utils/gsap";

const CameraController = ({
  canvasRef,
}: {
  canvasRef: RefObject<HTMLCanvasElement>;
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

    if (canvasRef && canvasRef.current) {
      canvasRef.current.addEventListener("mousemove", changeCursorCords);
    }

    controls.enabled = false;

    return () => {
      controls.dispose();
      canvasRef.current.removeEventListener("mousemove", changeCursorCords);
    };
  }, [camera, gl, viewport]);

  return null;
};

function Box({
  position,
  matCap,
  canvasRef,
  ...props
}: {
  position: [number, number, number];
  matCap: string;
  canvasRef: RefObject<HTMLCanvasElement>;
}) {
  const [matcap] = useTexture([matCap]);

  const ref = useRef<Mesh>(null!);

  useEffect(() => {
    const animation = gsap.to(ref.current.rotation, {
      y: Math.PI * 2,
      x: Math.PI * 2,
      ease: "power4.out",
    });

    ScrollTrigger.create({
      trigger: canvasRef.current,
      animation: animation,
      scrub: true,
    });
  }, []);

  // useFrame((state, delta) => {
  //   ref.current.rotation.x += 0.1 * delta;
  //   ref.current.rotation.y += 0.1 * delta;
  // });

  return (
    <mesh position={position} ref={ref}>
      <RoundedBox args={[3, 3, 3]} radius={0.2} smoothness={25}>
        <meshMatcapMaterial matcap={matcap} />
      </RoundedBox>
    </mesh>
  );
}

export default function WorksCube({
  matCap,
  name,
}: {
  matCap: string;
  name: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return (
    <Canvas id={name} ref={canvasRef} className="absolute">
      {/* <CameraController canvasRef={canvasRef} /> */}
      <Box canvasRef={canvasRef} position={[0, 0, 1.5]} matCap={matCap} />
    </Canvas>
  );
}
