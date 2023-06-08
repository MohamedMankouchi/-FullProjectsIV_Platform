import React from "react";
import "../styling/home.css";
import { Buildings } from "../components/Buildings";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { Sky } from "@react-three/drei";
import {HamburgerMenu}  from "../components/HamburgerMenu";

const Home = () => {
  const [position, setPosition] = useState([2, 1, 0]);

  return (
    <>

    <HamburgerMenu/>
      <Canvas>
        <ambientLight intensity={1} />
        <CameraRig position={position} />
        <pointLight position={[10, 10, 10]} />
        <Sky distance={1000} sunPosition={[0, 1, 0]} inclination={2} azimuth={5.25}  />
        <OrbitControls />

        <Buildings />
      </Canvas>
      
      <div className='knops'>
        <div className='button1'>
          <button onClick={() => setPosition([0, 0.5, 1])}>Info</button>
        </div>
        <div className='button2'>
          <button onClick={() => setPosition([-0.9, 0.5, 0])}>Timetable</button>
        </div>
        <div className='button3'>
          <button onClick={() => setPosition([0, 0.4, -1])}>Live Show</button>
        </div>

        <div className='button4'>
          <button onClick={() => setPosition([0, 1, 0])}>Showroom</button>
        </div>
      </div>
      
    </>
  );
};

function CameraRig({ position: [x, y, z] }) {
  useFrame((state) => {
    state.camera.position.lerp({ x, y, z }, 0.03, "easeInOut");
    state.camera.lookAt(0, 0, 0);
  });
}

export default Home;
