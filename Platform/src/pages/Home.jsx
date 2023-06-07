import React from 'react';
import '../styling/home.css';
import { Buildings } from '../components/Buildings';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


const Home = () => {
  return (
    <Canvas>
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} />

            <OrbitControls />
          
        

      <Buildings />
    </Canvas>
  );
};

export default Home;
