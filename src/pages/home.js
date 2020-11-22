import * as React from 'react';
import './home.css';
import { Canvas } from "react-three-fiber"
import Box from '../components/box'

function Home() {

    return (
        <div className='home-container'>
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
        </div>
    )
}

export default Home;