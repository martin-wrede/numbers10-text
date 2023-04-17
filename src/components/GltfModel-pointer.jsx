import React, { useRef, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

function Mesh({ mesh, onPointerOver, onPointerOut }) {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.003;
  });

  return (
    <mesh
      ref={meshRef}
      geometry={mesh.geometry}
      material={mesh.material}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
    />
  );
}

export default function GltfModel({ modelPath, scale = 1, position = [0, 0, 0] }) {
  const draco = useMemo(() => {
    const draco = new DRACOLoader();
    draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    draco.setDecoderConfig({ type: 'js' }); // optional for some browsers
    return draco;
  }, []);

  const gltf = useGLTF(modelPath, draco);

  const groupRef = useRef();

  useFrame(() => {
    groupRef.current.rotation.y += 0.003;
  });

  return (
    <group position={position} ref={groupRef} scale={[scale, scale, scale]}>
      {gltf.scene.children.map((child, i) => (
        <Mesh
          key={i}
          mesh={child}
          onPointerOver={() => console.log(`Pointer over object ${i}`)}
          onPointerOut={() => console.log(`Pointer out of object ${i}`)}
        />
      ))}
    </group>
  );
}


