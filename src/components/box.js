import React, { useRef, useState, Suspense, useEffect} from 'react'
import { Canvas, useFrame, useThree, extend } from 'react-three-fiber'
import palettes from 'nice-color-palettes';
import random from 'canvas-sketch-util/random';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './box.css';

extend({OrbitControls})

function Controls() {
    const controls =useRef()
    const {camera, gl } = useThree()
    useFrame(() => controls.current.update())
    return <orbitControls ref={controls} args={[camera, gl.domElement]} enableDamping dampingFactor={0.1} rotateSpeed={0.5} />
}

function swapPalette() {
   const palette = random.pick(palettes);
   console.log('palette change');
   return palette;
}
function Box(props) {

    const [colorset, changeColor] = useState(props.palette)
    useEffect(() => { 
      console.log('re-render');
      changeColor(props.palette) },
       [props.palette]);
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    //const texture = useLoader(THREE.TextureLoader, image)
    // Set up state for the hovered and active state
    const t = Math.sin(.5 * Math.PI * 2);
    // Rotate mesh every frame, this is outside of React without overhead

    useFrame(() => {
      mesh.current.rotation.x = mesh.current.rotation.y += t *80000000000000;
      mesh.current.rotation.z = mesh.current.rotation.x += t *80000000000000;
      mesh.current.rotation.y = mesh.current.rotation.z += t *80000000000000;
     
    })
    
    
    return (
      <mesh
        {...props}
        ref={mesh}
        key= {props.palette}
        onClick={(e) => changeColor(swapPalette)}      >
        <boxBufferGeometry args={[.25, .25, .25]} />
        <meshStandardMaterial attach="material"  color={random.pick(colorset)}/>
       {/*  <meshStandardMaterial attachArray="material"  color={random.pick(colorset)}/>
        <meshStandardMaterial attachArray="material"  color={random.pick(colorset)}/>
        <meshStandardMaterial attachArray="material"  color={random.pick(colorset)}/>
        <meshStandardMaterial attachArray="material"  color={random.pick(colorset)}/>
        <meshStandardMaterial attachArray="material"  color={random.pick(colorset)}/>
        <meshStandardMaterial attachArray="material"  color={random.pick(colorset)}/>  */}
      </mesh>
    )
  }


  function Boxes(){
    const palette = random.pick(palettes);
    const [color, randomizeColor] = useState(palette)

    return(
    <div className='canvas-layout'>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={<>Loading...</>}>
        <Box palette= {color} position={[0.5, 0.5, .75]} />
        <Box palette= {color} position={[-0.5, -0.5, 1.25]} />
        <Box palette= {color} position={[-1, -1, 1.5]} />
        <Box palette= {color} position={[1, 1, .5]} />
        <Box palette= {color} position={[-1, 1, .5]} />
        <Box palette= {color} position={[0, 0, 1]} />
        <Box palette= {color} position={[-0.5, 0.5, .75]} />
        <Box palette= {color} position={[0.5, -0.5, 1.25]} />
        <Box palette= {color} position={[1, -1, 1.5]} />
        </Suspense>
        <Controls/>
      </Canvas> 
      <div className='settings-layout'>
        <button className= 'setting-buttons' onClick={(e) => randomizeColor(swapPalette)} >Change palette </button>
      </div>
    </div>
    )
  }

  export default Boxes;