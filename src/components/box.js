import React, { useRef, useState } from 'react'
import { useFrame, useLoader } from 'react-three-fiber'
import * as THREE from 'three'
import image from '../assets/david.jpg'

function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    const texture = useLoader(THREE.TextureLoader, image)
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={hovered ? 'hotpink' : 'orange'} map={texture}/>
      </mesh>
    )
  }

export default Box;

/* export default function CanvasBox() {
    return (
        <div>
            <Canvas>
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
            </Canvas>
        </div>
    )
} */