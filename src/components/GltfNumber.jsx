import React, { Suspense, useRef, useState, useEffect  }   from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

 export default function GltfNumber({ z, age }) {
    const ref = useRef()
   // const  { nodes, materials } = useGLTF('/zahlen-gold-0-v1-exp.glb')
    const  { nodes, materials } = useGLTF(`zahlen-gold-nr${age}-gruppe.glb`)

    const { viewport, camera } = useThree()
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])
    const [data] = useState({
      x: THREE.MathUtils.randFloatSpread(2),
      y: THREE.MathUtils.randFloatSpread(height),
      rX: Math.random()* Math.PI ,
      rY: Math.random()* Math.PI ,
      rZ: Math.random()* Math.PI 
    })
  
    useFrame((state) => {
        ref.current.rotation.set((data.rX += 0.01) ,(data.rY += 0.01), (data.rZ += 0.01))
        ref.current.position.set(data.x * width , (data.y+=0.045), z)
         if (data.y > height)  data.y = -height 
     // ref.current.position.x = Math.sin(state.clock.elapsedTime*2) // -1 to 1
      // ref.current.rotation.y = Math.sin(state.clock.elapsedTime*2) // -1 to 1   
    })
  
    return (
      <mesh  ref={ref}   
     // geometry={eval(`nodes.nr${age}.geometry`)} 
    // material={eval(`materials.skin${age}`)}  
       
      geometry={nodes[`nr${age}`].geometry}
      material={materials[`skin${age}`]}

     
      rotation={[-Math.PI/2,0,0]} 
      scale={ 0.10}
     material-color="orange"
     material-emissive="orange"
     />
    )
  }
  

   