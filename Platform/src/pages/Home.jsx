import React, { useEffect, useRef, useState } from "react";
import "../styling/home.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Lightformer } from "@react-three/drei";
import { HamburgerMenu } from "../components/HamburgerMenu";
import { Scrapertest512 } from "../components/Scrapertest512";
import * as THREE from "three";
import skyImg from "../assets/skydome.jpg";
import { Loader } from "../components/Loader";
import ButtonComponent from "../components/ButtonComponent";
import { Html } from "@react-three/drei"; 
import Mobilenav from "../components/MobileBtnComp";



const Home = () => {
  const [position, setPosition] = useState([-8.6, -5, 55]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    

      <HamburgerMenu />
      {loader ? (
        <Loader />
      ) : (
        <Canvas>

          <Html position={[0, 0, 0]}  className="l">
            <ButtonComponent setPosition={setPosition} />
          </Html>

          
          <Html position={[0, 0, 0]}  className="l">
            <Mobilenav setPosition={setPosition} />
          </Html>

          <ambientLight intensity={1} />
          <CameraRig position={position} />
          <pointLight color="blue" position={[10, 10, 10]} />
          <OrbitControls />
          <Stars
            radius={100}
            depth={30}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={3.5}
          />
          {/* <Scrapertest512 /> */}

          <pointLight color="purple" position={[-10, 0, 10]} intensity={1.5} />

          <mesh>
            <sphereGeometry args={[400, 60, 40]} />
            <meshBasicMaterial
              map={new THREE.TextureLoader().load(skyImg)}
              side={THREE.BackSide}
            />
          </mesh>

      </Canvas>
      )}
      

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
