import React, { useRef, useState, Suspense, useEffect, useMemo} from 'react'
import { Canvas, useFrame, useThree, extend } from 'react-three-fiber'
import palettes from 'nice-color-palettes/500';
import random from 'canvas-sketch-util/random';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './box.css';
import * as THREE from 'three'


const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()

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

/* function Box(props) {

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
       }
      </mesh>
    )
  } */
  /*  <meshStandardMaterial attachArray="material"  color={random.pick(colorset)}/>
        <meshStandardMaterial attachArray="material"  color={random.pick(colorset)}/>
        <meshStandardMaterial attachArray="material"  color={random.pick(colorset)}/>
        <meshStandardMaterial attachArray="material"  color={random.pick(colorset)}/>
        <meshStandardMaterial attachArray="material"  color={random.pick(colorset)}/>
        <meshStandardMaterial attachArray="material"  color={random.pick(colorset)}/>  */

  function RandomBoxes(props) {
    const [colorset, changeColor] = useState(props.palette)
    const colorArray = useMemo(() => Float32Array.from(new Array(27).fill().flatMap((_, i) => tempColor.set(colorset[i]).toArray())), [colorset])

    useEffect(() => { 
      console.log('re-render');
      changeColor(props.palette) },
       [props.palette]);
    // This reference will give us direct access to the mesh
    const ref = useRef()
    //const texture = useLoader(THREE.TextureLoader, image)
    // Set up state for the hovered and active state
    // Rotate mesh every frame, this is outside of React without overhead

    useFrame(state => {
      const time = state.clock.getElapsedTime()
      ref.current.rotation.x = Math.sin(time / 2)
      ref.current.rotation.y = Math.sin(time / 1)
      let i = 0
      for (let x = 0; x < 3; x++)
        for (let y = 0; y < 3; y++)
          for (let z = 0; z < 3; z++) {
            const id = i++
            tempObject.position.set(1 - x, 1.5 - y, 1.5 - z)
            tempObject.rotation.y = Math.sin(x / 4 + time) + Math.sin(y / 4 + time) + Math.sin(z / 4 + time)
            tempObject.rotation.z = tempObject.rotation.y * 2;
            tempColor.set(colorset[x]).toArray(colorArray, id * 5);
            ref.current.geometry.attributes.color.needsUpdate = true
            tempObject.updateMatrix()
            ref.current.setMatrixAt(id, tempObject.matrix)
          }
      ref.current.instanceMatrix.needsUpdate = true
    })
    
    
    return (
      <instancedMesh
        ref={ref}
        args={[null, null, 27]}>
        <boxBufferGeometry attach="geometry" args={[.25, .25, .25]}>
        <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colorArray, 3]} />
        </boxBufferGeometry>
        <meshPhongMaterial attach="material" vertexColors={THREE.VertexColors} />
      </instancedMesh>
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
        {/* <Box palette= {color} position={[0.5, 0.5, .75]} />
        <Box palette= {color} position={[-0.5, -0.5, 1.25]} />
        <Box palette= {color} position={[-1, -1, 1.5]} />
        <Box palette= {color} position={[1, 1, .5]} />
        <Box palette= {color} position={[-1, 1, .5]} />
        <Box palette= {color} position={[0, 0, 1]} />
        <Box palette= {color} position={[-0.5, 0.5, .75]} />
        <Box palette= {color} position={[0.5, -0.5, 1.25]} />
        <Box palette= {color} position={[1, -1, 1.5]} /> */}
        <RandomBoxes palette={color}></RandomBoxes>
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