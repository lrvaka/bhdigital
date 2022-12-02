import { useRef, useState, useEffect, ReactEventHandler } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Mesh } from "three";
import { useTexture, RoundedBox } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CameraController = () => {
  const { camera, gl } = useThree();
  const viewport = useThree((state) => state.viewport);

  const sizes = { width: 0, height: 0 };
  const cursor = { x: 0, y: 0 };

  const changeCursorCords = (event) => {
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
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef(null);

  // Hold state for hovered and clicked events

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.1 * delta;
    ref.current.rotation.y += 0.1 * delta;
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh {...props} ref={ref}>
      <RoundedBox args={[2, 2, 2]} radius={0.25} smoothness={25}>
        <meshMatcapMaterial matcap={matcap1} />
      </RoundedBox>
    </mesh>
  );
}

export default function HeroBackground() {
  return (
    <Canvas style={{ position: "absolute" }} className="absolute top-0 left-0">
      <CameraController />
      <Box position={[1, 0.5, 2]} />
    </Canvas>
  );
}
