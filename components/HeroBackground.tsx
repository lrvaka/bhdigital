import { useRef, useState, useEffect, ReactEventHandler } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Mesh } from "three";
import { useTexture, RoundedBox } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CameraController = () => {
  const { camera, gl } = useThree();
  const viewport = useThree((state) => state.viewport);

  const sizes: { width: number; height: number } = { width: 0, height: 0 };
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

function Box(props: { position: Array<number> }) {
  const [matcap1] = useTexture(["./matcap1.png"]);
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null!);

  // Hold state for hovered and clicked events

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.1 * delta;
    ref.current.rotation.y += 0.1 * delta;
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh {...props} ref={ref}>
      <RoundedBox
        args={[2, 2, 2]}
        radius={0.25}
        smoothness={25}
        key={undefined}
        attach={undefined}
        onUpdate={undefined}
        position={undefined}
        up={undefined}
        scale={undefined}
        rotation={undefined}
        matrix={undefined}
        quaternion={undefined}
        layers={undefined}
        dispose={undefined}
        material={undefined}
        clear={undefined}
        geometry={undefined}
        morphTargetInfluences={undefined}
        morphTargetDictionary={undefined}
        isMesh={undefined}
        type={undefined}
        updateMorphTargets={undefined}
        raycast={undefined}
        id={undefined}
        uuid={undefined}
        name={undefined}
        parent={undefined}
        modelViewMatrix={undefined}
        normalMatrix={undefined}
        matrixWorld={undefined}
        matrixAutoUpdate={undefined}
        matrixWorldNeedsUpdate={undefined}
        visible={undefined}
        castShadow={undefined}
        receiveShadow={undefined}
        frustumCulled={undefined}
        renderOrder={undefined}
        animations={undefined}
        userData={undefined}
        customDepthMaterial={undefined}
        customDistanceMaterial={undefined}
        isObject3D={undefined}
        onBeforeRender={undefined}
        onAfterRender={undefined}
        applyMatrix4={undefined}
        applyQuaternion={undefined}
        setRotationFromAxisAngle={undefined}
        setRotationFromEuler={undefined}
        setRotationFromMatrix={undefined}
        setRotationFromQuaternion={undefined}
        rotateOnAxis={undefined}
        rotateOnWorldAxis={undefined}
        rotateX={undefined}
        rotateY={undefined}
        rotateZ={undefined}
        translateOnAxis={undefined}
        translateX={undefined}
        translateY={undefined}
        translateZ={undefined}
        localToWorld={undefined}
        worldToLocal={undefined}
        lookAt={undefined}
        add={undefined}
        remove={undefined}
        removeFromParent={undefined}
        getObjectById={undefined}
        getObjectByName={undefined}
        getObjectByProperty={undefined}
        getWorldPosition={undefined}
        getWorldQuaternion={undefined}
        getWorldScale={undefined}
        getWorldDirection={undefined}
        traverse={undefined}
        traverseVisible={undefined}
        traverseAncestors={undefined}
        updateMatrix={undefined}
        updateMatrixWorld={undefined}
        updateWorldMatrix={undefined}
        toJSON={undefined}
        clone={undefined}
        copy={undefined}
        addEventListener={undefined}
        hasEventListener={undefined}
        removeEventListener={undefined}
        dispatchEvent={undefined}
        onClick={undefined}
        onContextMenu={undefined}
        onDoubleClick={undefined}
        onPointerUp={undefined}
        onPointerDown={undefined}
        onPointerOver={undefined}
        onPointerOut={undefined}
        onPointerEnter={undefined}
        onPointerLeave={undefined}
        onPointerMove={undefined}
        onPointerMissed={undefined}
        onPointerCancel={undefined}
        onWheel={undefined}
      >
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
