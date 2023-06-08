import React from 'react';
import '../styling/home.css';
import { Buildings } from '../components/Buildings';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { Sky } from "@react-three/drei";


const Home = () => {
  const [position, setPosition] = useState([2, 1, 0]);

  return (
    <>
      <Canvas>
        <ambientLight intensity={1} />
        <CameraRig position={position} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Buildings />
      </Canvas>
      <div className='knops'>
        <div className='button1'>
          <button onClick={() => setPosition([0, 0.5, 1])}>punt a</button>
        </div>
        <div className='button2'>
          <button onClick={() => setPosition([-0.9, 0.5, 0])}>punt b</button>
        </div>
        <div className='button3'>
          <button onClick={() => setPosition([0, 0.4, -0.8])}>punt c</button>
        </div>
      </div>
    </>
  );
};

function CameraRig({ position: [x, y, z] }) {
  useFrame((state) => {
    state.camera.position.lerp({ x, y, z }, 0.03, 'easeInOut'); 
    state.camera.lookAt(0, 0, 0);
  });
}

export default Home;
