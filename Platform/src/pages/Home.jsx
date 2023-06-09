import React, { useRef, useState }  from "react";
import "../styling/home.css";
import { Buildings } from "../components/Buildings";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars,Lightformer  } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import {HamburgerMenu}  from "../components/HamburgerMenu";
import { Scrapertest512 } from "../components/Scrapertest512";
import * as THREE from "three";
import skyImg from "../assets/skydome.jpg"


const Home = () => {
  const [position, setPosition] = useState([-8.6, -5, 55]);

    const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)



  return (
    <>
<HamburgerMenu/>
      <Canvas>
        <Sky sunPosition={[100, 20, 100]} />
        <ambientLight intensity={1} />
        <CameraRig position={position} />
        <pointLight color="blue" position={[10, 10, 10]} />
        <OrbitControls />
        <Stars radius={100} depth={30} count={5000} factor={4} saturation={0} fade speed={3.5} />

      <pointLight  color="purple" position={[-10, 0, 10]} intensity={1.5} />


        <Scrapertest512 />
          <mesh>
          <sphereGeometry args={[400, 60, 40]} />
          <meshBasicMaterial
            map={new THREE.TextureLoader().load(skyImg)}
            side={THREE.BackSide}
          />
        </mesh>

          <mesh
      ref={mesh}
      scale={active ? 1.5 : 20}
      position={[5,5,5]}
       onClick={() => setPosition([15, 50, 15])}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      
      <meshStandardMaterial color={hovered ? 'BLACK' : 'DARKGREY'} />
    </mesh>
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
          <button onClick={() => setPosition([15, 50, 15])}>Showroom</button>
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
