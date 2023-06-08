import React from "react";
import "../styling/home.css";
import { Buildings } from "../components/Buildings";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { Sky } from "@react-three/drei";
import {HamburgerMenu}  from "../components/HamburgerMenu";
import { Scrapertest512 } from "../components/Scrapertest512";

const Home = () => {
  const [position, setPosition] = useState([-8.6, -5, 55]);

  return (
    <>
<HamburgerMenu/>
      <Canvas>
        <ambientLight intensity={1} />
        <CameraRig position={position} />
        <pointLight position={[10, 10, 10]} />
        <Sky distance={1000} sunPosition={[0, 1, 0]} inclination={2} azimuth={5.25}  />
        <OrbitControls />

        <Scrapertest512 />
      </Canvas>
      
      <div className='knops'>
        <div className='button1'>
          <button onClick={() => setPosition([-30,12, 0])}>Info</button>
        </div>
        <div className='button2'>
          <button onClick={() => setPosition([0, 2, -20])}>Timetable</button>
        </div>
        <div className='button3'>
          <button onClick={() => setPosition([30,15, 5])}>Live Show</button>
        </div>

        <div className='button4'>
          <button onClick={() => setPosition([-30, 0, -2])}>Showroom</button>
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
// function CameraRig({ position: [x, y, z] }) {
//   useFrame((state) => {
//     const cameraPosition = state.camera.position;
//     const { x: cameraX, y: cameraY, z: cameraZ } = cameraPosition;

//     // console.log(`Camera Position: y=${cameraY}, z=${cameraZ}, x=${cameraX}`);

    // state.camera.lookAt(0, 0, 0);
  // });

  // return null;
// }
export default Home;
