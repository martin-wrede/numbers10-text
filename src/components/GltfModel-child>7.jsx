import React, { useRef, useMemo, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

function Mesh({ mesh, scale, onPointerOver, onPointerOut }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    meshRef.current.rotation.y += 0.003;
  });

  return (
    <mesh
      ref={meshRef}
      geometry={mesh.geometry}
      material={mesh.material}
      scale={hovered ? scale * 1.15 : scale}
      onPointerOver={() => {
        setHovered(true);
        onPointerOver();
      }}
      onPointerOut={() => {
        setHovered(false);
        onPointerOut();
      }}
    />
  );
}

export default function GltfModel({ modelPath, scale = 40, position = [0, 0, 0] }) {
  const draco = useMemo(() => {
    const draco = new DRACOLoader();
    draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    draco.setDecoderConfig({ type: 'js' }); // optional for some browsers
    return draco;
  }, []);

  const gltf = useGLTF(modelPath, draco);

  return (
    <group position={position}>
      
      {[...Array(9)].map((_, i) => (
        // show only Blender object layer 8,9 with box
        // Array(9) max is needed to work
       ( i > 7)  &&
        <Mesh
          key={i+5}
          mesh={gltf.scene.children[i]}
          scale={scale}
          onPointerOver={() => console.log(`Pointer over object ${i}`)}
          onPointerOut={() => console.log(`Pointer out of object ${i}`)}
        />
      ))}
    </group>
  );
}
