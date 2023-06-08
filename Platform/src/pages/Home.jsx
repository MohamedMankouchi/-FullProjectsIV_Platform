import React from 'react';
import '../styling/home.css';
import { Buildings } from '../components/Buildings';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { Sky } from "@react-three/drei";



const Home = () => {
    const [position, setPosition] = useState([2, 1, 0])

  return (
    <>
    <Canvas>
      
<Sky distance={1000} sunPosition={[0, 1, 0]} inclination={2} azimuth={5.25}  />

            <ambientLight intensity={1} />
                    <CameraRig position={position} />

            <pointLight position={[10, 10, 10]} />

            <OrbitControls />

        

      <Buildings />
    </Canvas>

          <button onClick={() => setPosition([2, 1, 3])}>clikkkkkkkkkck</button>
          <button onClick={() => setPosition([-2, 1, 1])}>punt c</button>

</>
  );
  
};

function CameraRig({ position: [x, y, z] }) {
  useFrame((state) => {
    state.camera.position.lerp({ x, y, z }, 0.1)
    state.camera.lookAt(0, 0, 0)
  })
}

export default Home;
