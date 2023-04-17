import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function GltfModel({ modelPath, scale = 40, position = [0, 0, 0] }) {
  const group = useRef();
  const gltf = useGLTF(modelPath);
  const [hovered, hover] = useState(false);

  // Rotate mesh every frame
  useFrame(() => {
    group.current.rotation.y += 0.003;
  });

  return (
    <group ref={group} position={position}>
      <mesh
        geometry={gltf.scene.children[0].geometry}
        material={gltf.scene.children[0].material}
        scale={hovered ? scale * 1.15 : scale}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      />
    </group>
  );
}
