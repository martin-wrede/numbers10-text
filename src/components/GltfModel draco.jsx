import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';


export default function Model({ modelPath, scale = 40, position = [0, 0, 0] }) {
   // draco loader
   const draco = new DRACOLoader();
   //draco.setDecoderPath('three/examples/js/libs/draco/gltf/');
      draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
     draco.setDecoderConfig({ type: 'js' });  // optional for som browsers 
     const dracoLoader = draco; // export
   
     
    //  const gltf = new GLTFLoader(); /// new draco
     gltf.setDRACOLoader( dracoLoader ) /// draco
     const gltfLoader = gltf // export
     
    
  const [hovered, hover] = useState(false);
  const gltf = useLoader(GLTFLoader, modelPath);

  useFrame((state, delta) => (group.current.rotation.y += 0.003));

  return (
    <group ref={group} position={position} scale={hovered ? scale * 1.15 : scale}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <primitive object={gltf.scene} />
    </group>
  );
};
