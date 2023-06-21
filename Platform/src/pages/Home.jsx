import React, { useEffect, useRef, useState } from "react";
import "../styling/home.css";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Float, Lightformer } from "@react-three/drei";
import { HamburgerMenu } from "../components/HamburgerMenu";
import { Scrapertest512 } from "../components/Scrapertest512";
import * as THREE from "three";
import skyImg from "../assets/backkk.jpg";
import { Loader } from "../components/Loader";
import ButtonComponent from "../components/ButtonComponent";
import { Html } from "@react-three/drei";
import Mobilenav from "../components/MobileBtnComp";

// for creating skybox: https://skybox.blockadelabs.com/

const Home = () => {
  const [position, setPosition] = useState([-8.6, -5, 55]);
  const [loader, setLoader] = useState(true);
  const [cameraRigEnabled, setCameraRigEnabled] = useState(false); // State variable to control CameraRig activation

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = (newPosition) => {
    setCameraRigEnabled(true);
    setPosition(newPosition);
  };

  return (
    <>
      {!loader ? (
        <div className="testmenu">
          <Mobilenav onButtonClick={handleButtonClick} />
        </div>
      ) : (
        ""
      )}
      {/*hamburger menu weg doen.*/}
      {/* <HamburgerMenu /> */}

      {loader ? (
        <Loader />
      ) : (
        <Canvas
          id="c"
          camera={{
            position: [30, -20, 45],
          }} // Set new default camera position here
        >
          {cameraRigEnabled && <CameraRig position={position} />}{" "}
          {/* Conditionally render CameraRig */}
          <OrbitControls
            minDistance={20}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.59}
            maxDistance={50}
            enablePan={false}
          />
          {/* building */}
          <Scrapertest512 />
          {/* light */}
          <ambientLight intensity={1} />
          <pointLight color="purple" position={[-10, 0, -10]} intensity={2} />
          <pointLight color="blue" position={[10, 10, 10]} />
          <pointLight color="blue" intensity={2} position={[10, 0, -10]} />
          <pointLight color="purple" position={[-10, 0, 10]} intensity={2} />
          {/* background */}
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

  return null;
}

export default Home;
