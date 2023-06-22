/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Scrapertest512.glb --transform
*/

import React, { useRef, useState } from "react";
import { useGLTF, Html, Billboard } from "@react-three/drei";
import "../styling/home.css";
import info from "../assets/Billboard.gif";
import clickme from "../icon/hand-pointer.png";
import clicked from "../icon/Group 805.svg";
import poster from "../images/poster1.png";
import timetable from "../assets/timetableee.gif";
import livestream from "../assets/Bilboard2.gif";
import showcase from "../assets/square.gif";
import clickmerood from "../icon/Icon awesome-hand-pointer.png";
import wasabi from "../images/logo-wasabi.png";
import smartschool from "../images/logo-smartschool2.png";
import springbok from "../images/logo-springbok.png";

export function Scrapertest512(props) {
  const { nodes, materials } = useGLTF(
    "./models/Scrapertest512-transformed.glb"
  );

  function handleMouseDown(event) {
    event.preventDefault();
  }

  function handleMouseMove(event) {
    event.preventDefault();
  }

  function handleMouseUp(event) {
    event.preventDefault();
  }

  return (
    <group {...props} dispose={null}>
      <group position={[0, -20, 0]}>
        <group
          position={[-0.6, 24.94, -7.9]}
          rotation={[-Math.PI, 0, 3.15]}
          scale={1.75}
        >
          <Html
            className="kk"
            castShadow
            receiveShadow
            occlude="blending"
            transform
          >
            <a href="/timetable">
              <button
                className="imagebuilding"
                style={{
                  width: "249px",
                  height: "500px",
                  cursor: "pointer",
                  objectFit: "cover",
                }}
              >
                <img
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  src={timetable}
                  alt="embed"
                />
              </button>
              <a href="/timetable">
                <img
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  style={{ width: "50px" }}
                  className="clickme"
                  src={clickme}
                  alt=""
                />
                <button
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  class="click-me-button"
                >
                  <span>timetable</span>
                </button>
              </a>
            </a>
          </Html>
        </group>

        <group
          position={[-0.6, 24.94, -7.4]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={1.75}
        >
          <mesh
            geometry={nodes.KB3D_CBP_Billboard_O_Main.geometry}
            material={materials.KB3D_CBP_AtlasDGBannerA}
          />
          <mesh
            geometry={nodes.KB3D_CBP_Billboard_O_Main_1.geometry}
            material={materials.KB3D_CBP_SteelGalvanGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_Billboard_O_Main_2.geometry}
            material={materials.KB3D_CBP_SteelOld}
          />
          <mesh
            geometry={nodes.KB3D_CBP_Billboard_O_Main_3.geometry}
            material={materials.KB3D_CBP_SteelPanelBright}
          />
        </group>
        <group position={[-0.53, 6.94, 8.84]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_RoofStructure.geometry}
            material={materials.KB3D_CBP_LightsC}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_RoofStructure_1.geometry}
            material={materials.KB3D_CBP_SteelOld}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_RoofStructure_2.geometry}
            material={materials.KB3D_CBP_SteelPanelGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_RoofStructure_3.geometry}
            material={materials.KB3D_CBP_SteelPanelShiny}
          />
        </group>
        <mesh
          geometry={
            nodes.KB3D_CBP_CyberBunny_A_C_1_KB3D_CBP_CyberBunny_A_PowerExhaustC
              .geometry
          }
          material={materials.KB3D_CBP_SteelGalvanGray}
          position={[-0.5, 43.43, -6.5]}
        />
        <mesh
          geometry={
            nodes.KB3D_CBP_CyberBunny_A_C_1_KB3D_CBP_CyberBunny_A_PowerExhaustB
              .geometry
          }
          material={materials.KB3D_CBP_SteelGalvanGray}
          position={[1.32, 43.2, -6.31]}
        />
        <mesh
          geometry={
            nodes.KB3D_CBP_CyberBunny_A_C_1_KB3D_CBP_CyberBunny_A_PowerExhaustA
              .geometry
          }
          material={materials.KB3D_CBP_SteelGalvanGray}
          position={[-0.38, 47.04, 0.15]}
        />
        <mesh
          geometry={
            nodes.KB3D_CBP_CyberBunny_A_C_1_KB3D_CBP_CyberBunny_A_Hvac.geometry
          }
          material={materials.KB3D_CBP_SteelGalvanGray}
          position={[-7.56, 24.14, -2.84]}
        />
        <mesh
          geometry={
            nodes.KB3D_CBP_CyberBunny_A_C_1_KB3D_CBP_CyberBunny_A_Hologram
              .geometry
          }
          material={materials.KB3D_CBP_AtlasHoloC}
          position={[-0.54, 27.42, 7.86]}
        />

        <group position={[-0.54, 27.42, 7.96]} scale={1.75}>
          <Html
            className="kk"
            castShadow
            receiveShadow
            occlude="blending"
            transform
          >
            <img
              style={{
                width: "180px",
                height: "540px",
                objectFit: "cover",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              src={poster}
              alt="embed"
            />
            <h1
              style={{
                position: "absolute",
                top: "22%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "18px",
                fontFamily: "pirulen",
                fontWeight: "bold",
                zIndex: "100",
              }}
            >
              finalshow
            </h1>
          </Html>
        </group>
        <group position={[-2.02, 47.16, -1.75]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_Helipad.geometry}
            material={materials.KB3D_CBP_LightsC}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_Helipad_1.geometry}
            material={materials.KB3D_CBP_SteelPanelBright}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_Helipad_2.geometry}
            material={materials.KB3D_CBP_SteelPanelDarkBlue}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_Helipad_3.geometry}
            material={materials.KB3D_CBP_SteelPanelDarkDirt}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_Helipad_4.geometry}
            material={materials.KB3D_CBP_SteelPanelGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_Helipad_5.geometry}
            material={materials.KB3D_CBP_SteelPanelPaintYellow}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_Helipad_6.geometry}
            material={materials.KB3D_CBP_WireTrim}
          />
        </group>
        <mesh
          geometry={
            nodes.KB3D_CBP_CyberBunny_A_C_1_KB3D_CBP_CyberBunny_A_CablesC
              .geometry
          }
          material={materials.KB3D_CBP_WireTrim}
          position={[-7.46, 10.66, -1.11]}
        />
        <mesh
          geometry={
            nodes.KB3D_CBP_CyberBunny_A_C_1_KB3D_CBP_CyberBunny_A_CablesB
              .geometry
          }
          material={materials.KB3D_CBP_WireTrim}
          position={[6.23, 5.24, -2.63]}
        />
        <mesh
          geometry={
            nodes.KB3D_CBP_CyberBunny_A_C_1_KB3D_CBP_CyberBunny_A_CablesA
              .geometry
          }
          material={materials.KB3D_CBP_WireTrim}
          position={[5.94, 9.75, 4.66]}
        />
        <group position={[-0.53, 44.89, 0.45]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingB.geometry}
            material={materials.KB3D_CBP_FloorRoofTopA}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingB_1.geometry}
            material={materials.KB3D_CBP_SteelGalvanGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingB_2.geometry}
            material={materials.KB3D_CBP_SteelPanelDarkDirt}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingB_3.geometry}
            material={materials.KB3D_CBP_SteelPanelGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingB_4.geometry}
            material={materials.KB3D_CBP_SteelPanelPaintYellow}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingB_5.geometry}
            material={materials.KB3D_CBP_SteelPanelShiny}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingB_6.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteD}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingB_7.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteDFlat}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingB_8.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteDirt}
          />
        </group>
        <group position={[-0.55, 21.76, -0.16]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingA.geometry}
            material={materials.KB3D_CBP_AtlasDetails}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingA_1.geometry}
            material={materials.KB3D_CBP_ConcreteLeaks}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingA_2.geometry}
            material={materials.KB3D_CBP_FloorRoofTopA}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingA_3.geometry}
            material={materials.KB3D_CBP_GlassCyanC}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingA_4.geometry}
            material={materials.KB3D_CBP_LightsC}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingA_5.geometry}
            material={materials.KB3D_CBP_SteelGalvanGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingA_6.geometry}
            material={materials.KB3D_CBP_SteelOld}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingA_7.geometry}
            material={materials.KB3D_CBP_SteelPanelBright}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingA_8.geometry}
            material={materials.KB3D_CBP_SteelPanelDark}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingA_9.geometry}
            material={materials.KB3D_CBP_SteelPanelDarkDirt}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingA_10.geometry}
            material={materials.KB3D_CBP_SteelPanelGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingA_11.geometry}
            material={materials.KB3D_CBP_SteelPanelGrayB}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingA_12.geometry}
            material={materials.KB3D_CBP_SteelPanelPaintBeige}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingA_13.geometry}
            material={materials.KB3D_CBP_SteelPanelPaintYellow}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingA_14.geometry}
            material={materials.KB3D_CBP_SteelPanelShiny}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingA_15.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteD}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingA_16.geometry}
            material={materials.KB3D_CBP_AtlasHoloB}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BuildingA_17.geometry}
            material={materials.KB3D_CBP_ConcreteBaseDirtyB}
          />
        </group>
        <group position={[6.22, 7.35, 1.58]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardN.geometry}
            material={materials.KB3D_CBP_AtlasDGBannerA}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardN_1.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteD}
          />
        </group>

        <group rotation={[0, -7.9, 0]} position={[-7.87, 27.15, 2.41]}>
          <Html
            className="kk"
            castShadow
            receiveShadow
            occlude="blending"
            transform
          >
            <a href="/livestream">
              <button
                className="imagebuilding"
                style={{
                  width: "200px",
                  height: "760px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  src={livestream}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  style={{ maxHeight: "100%" }}
                  alt="embed"
                />
              </button>
              <a href="/info">
                {" "}
                <button
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  class="click-me-button-livestream"
                >
                  <span>livestream om 19u</span>
                </button>
              </a>
            </a>
            {/* <img                onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp} style={{width:'100px'}}  className='clickme' src={clickme} alt="" /> */}
          </Html>
        </group>

        <group position={[-8.52, 27.15, 2.41]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardM.geometry}
            material={materials.KB3D_CBP_AtlasDGBannerA}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardM_1.geometry}
            material={materials.KB3D_CBP_SteelGalvanGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardM_2.geometry}
            material={materials.KB3D_CBP_SteelOld}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardM_3.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteD}
          />
        </group>
        <group position={[-7.51, 9.19, 1.24]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardL.geometry}
            material={materials.KB3D_CBP_AtlasDGBannerA}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardL_1.geometry}
            material={materials.KB3D_CBP_SteelOld}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardL_2.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteD}
          />
        </group>

        <group position={[-0.44, 0.08, 0.59]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_Sidewalk.geometry}
            material={materials.KB3D_CBP_ConcretePaintYellow}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_Sidewalk_1.geometry}
            material={materials.KB3D_CBP_StreetTilesC}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_Sidewalk_2.geometry}
            material={materials.KB3D_CBP_StreetTilesGrayC}
          />
        </group>

        <group scale={10} position={[-0.44, -0.6, 0.59]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_Sidewalk.geometry}
            material={materials.KB3D_CBP_ConcretePaintYellow}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_Sidewalk_1.geometry}
            material={materials.KB3D_CBP_StreetTilesC}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_Sidewalk_2.geometry}
            material={materials.KB3D_CBP_StreetTilesGrayC}
          />
        </group>

        <group position={[7.94, 12.28, 4.42]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardI.geometry}
            material={materials.KB3D_CBP_AtlasDGBannerB}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardI_1.geometry}
            material={materials.KB3D_CBP_SteelGalvanGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardI_2.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteD}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardI_3.geometry}
            material={materials.KB3D_CBP_WireTrim}
          />
        </group>
        <group position={[-8.91, 12.23, -6.81]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardH.geometry}
            material={materials.KB3D_CBP_AtlasDGBannerA}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardH_1.geometry}
            material={materials.KB3D_CBP_SteelOld}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardH_2.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteD}
          />
        </group>

        <group position={[6.8, 28.9, 0.52]} rotation={[0, 1.56, 0]} scale={4.9}>
          <Html
            className="kk"
            castShadow
            receiveShadow
            occlude="blending"
            transform
          >
            <a href="/info">
              <button
                className="imagebuilding"
                style={{
                  width: "60px",
                  height: "155px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              >
                <img src={info} style={{ maxHeight: "100%" }} alt="embed" />
              </button>
              <img
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                style={{ width: "20px" }}
                className="clickme"
                src={clickme}
                alt=""
              />
              <a href="/info">
                {" "}
                <button
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  class="click-me-button-info"
                >
                  <span>info</span>
                </button>{" "}
              </a>
            </a>
          </Html>
        </group>

        {/* hier */}
        <group position={[6.42, 28.9, 0.52]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardG.geometry}
            material={materials.KB3D_CBP_AtlasDGBannerA}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardG_1.geometry}
            material={materials.KB3D_CBP_SteelGalvanGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardG_2.geometry}
            material={materials.KB3D_CBP_SteelOld}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardG_3.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteD}
          />
        </group>

        {/* springbock */}
        <group rotation={[0, 1.6, 0]} position={[6.41, 5.3, -1.81]}>
          <Html
            className="kk"
            castShadow
            receiveShadow
            occlude="blending"
            transform
          >
            <a href="https://www.springbokagency.com/" target="_blank">
              <img
                style={{
                  width: "200px",
                  height: "40px",
                  objectFit: "cover",
                  background: "black",
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                src={springbok}
                alt="embed"
              />
            </a>
          </Html>
        </group>
        {/* smartschool */}
        <group rotation={[0, 1.6, 0]} position={[6.41, 6.9, 1.81]}>
          <Html
            className="kk"
            castShadow
            receiveShadow
            occlude="blending"
            transform
          >
            <a href="https://www.smartschool.be/" target="_blank">
              <img
                style={{
                  width: "200px",
                  height: "40px",
                  objectFit: "cover",
                  background: "black",
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                src={smartschool}
                alt="embed"
              />
            </a>
          </Html>
        </group>

        {/* <group position={[6.41, 5.63, 1.81]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardF.geometry}
            material={materials.KB3D_CBP_AtlasDGBannerB}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardF_1.geometry}
            material={materials.KB3D_CBP_SteelGalvanGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardF_2.geometry}
            material={materials.KB3D_CBP_SteelOld}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardF_3.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteD}
          />
        </group> */}

        <group rotation={[0, -1.56, 0]} position={[-8, 6.45, -1]}>
          <Html
            className="kk"
            castShadow
            receiveShadow
            occlude="blending"
            transform
          >
            <a href="https://www.multimedia.brussels/">
              <button
                className="imagebuilding"
                style={{
                  width: "300px",
                  height: "300px",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              >
                <img src={showcase} style={{ maxHeight: "100%" }} alt="embed" />
              </button>
              <img
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                style={{ width: "60px", top: "70%" }}
                className="clickme"
                src={clickmerood}
                alt=""
              />
              <button
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                style={{ width: "20px" }}
                class="click-me-button-showcase"
              >
                <span>showcase</span>
              </button>
            </a>
          </Html>
        </group>

        <group position={[-7.52, 5.45, -3.24]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardE.geometry}
            material={materials.KB3D_CBP_AtlasDGBannerB}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardE_1.geometry}
            material={materials.KB3D_CBP_SteelGalvanGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardE_2.geometry}
            material={materials.KB3D_CBP_SteelOld}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardE_3.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteD}
          />
        </group>

        {/* <group position={[6.22, 7.23, -1.44]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardD.geometry}
            material={materials.KB3D_CBP_AtlasDGBannerB}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardD_1.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteD}
          />
        </group> */}
        <group position={[-7.31, 7.34, -2.44]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardC.geometry}
            material={materials.KB3D_CBP_AtlasDGBannerB}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardC_1.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteD}
          />
        </group>
        <group position={[6.75, 9.8, -4.81]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardB.geometry}
            material={materials.KB3D_CBP_AtlasDGBannerB}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardB_1.geometry}
            material={materials.KB3D_CBP_SteelOld}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardB_2.geometry}
            material={materials.KB3D_CBP_SteelPanelBright}
          />
        </group>
        <group position={[5.92, 20.01, -8.3]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardA.geometry}
            material={materials.KB3D_CBP_AtlasDGBannerB}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardA_1.geometry}
            material={materials.KB3D_CBP_SteelOld}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardA_2.geometry}
            material={materials.KB3D_CBP_SteelPanelBright}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardA_3.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteD}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardA_4.geometry}
            material={materials.KB3D_CBP_WireTrim}
          />
        </group>

        <group position={[-3.89, 50.71, 3.87]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_AntennaB.geometry}
            material={materials.KB3D_CBP_LightsC}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_AntennaB_1.geometry}
            material={materials.KB3D_CBP_SteelGalvanGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_AntennaB_2.geometry}
            material={materials.KB3D_CBP_SteelPanelBright}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_AntennaB_3.geometry}
            material={materials.KB3D_CBP_SteelPanelGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_AntennaB_4.geometry}
            material={materials.KB3D_CBP_SteelPanelPaintBeige}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_AntennaB_5.geometry}
            material={materials.KB3D_CBP_SteelPanelShiny}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_AntennaB_6.geometry}
            material={materials.KB3D_CBP_WireTrim}
          />
        </group>
        <group position={[4.24, 50.15, -4.06]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_AntennaA.geometry}
            material={materials.KB3D_CBP_SteelPanelBright}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_AntennaA_1.geometry}
            material={materials.KB3D_CBP_SteelPanelShiny}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_AntennaA_2.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteD}
          />
        </group>
        <group position={[-0.27, 5.89, -6.78]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_ACunitC.geometry}
            material={materials.KB3D_CBP_SteelGalvanGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_ACunitC_1.geometry}
            material={materials.KB3D_CBP_SteelOld}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_ACunitC_2.geometry}
            material={materials.KB3D_CBP_SteelPanelGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_ACunitC_3.geometry}
            material={materials.KB3D_CBP_SteelPanelShiny}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_ACunitC_4.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteD}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_ACunitC_5.geometry}
            material={materials.KB3D_CBP_WireTrim}
          />
        </group>
        <group position={[2.93, 47.62, -2.4]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_ACunitB.geometry}
            material={materials.KB3D_CBP_AtlasDetails}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_ACunitB_1.geometry}
            material={materials.KB3D_CBP_SteelGalvanGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_ACunitB_2.geometry}
            material={materials.KB3D_CBP_SteelOld}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_ACunitB_3.geometry}
            material={materials.KB3D_CBP_SteelPanelBright}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_ACunitB_4.geometry}
            material={materials.KB3D_CBP_SteelPanelGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_ACunitB_5.geometry}
            material={materials.KB3D_CBP_SteelPanelShiny}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_ACunitB_6.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteD}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_ACunitB_7.geometry}
            material={materials.KB3D_CBP_WireTrim}
          />
        </group>
        <group position={[0.18, 47.56, 3.81]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_ACunitA.geometry}
            material={materials.KB3D_CBP_SteelGalvanGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_ACunitA_1.geometry}
            material={materials.KB3D_CBP_SteelPanelBright}
          />
        </group>
        <group position={[-7.83, 11.55, 4.16]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardK.geometry}
            material={materials.KB3D_CBP_AtlasDGBannerA}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardK_1.geometry}
            material={materials.KB3D_CBP_SteelOld}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardK_2.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteD}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardK_3.geometry}
            material={materials.KB3D_CBP_WireTrim}
          />
        </group>

        {/* wasabi */}
        <group
          rotation={[0, 1.6, 0]}
          position={[6.3, 10.5, -2]}
          style={{ borderRadius: "50%" }}
        >
          <Html
            className="kk"
            castShadow
            receiveShadow
            occlude="blending"
            transform
          >
            <a href="https://www.studiowasabi.be/" target="_blank">
              <img
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  background: "black",
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                src={wasabi}
                alt="embed"
              />
            </a>
          </Html>
        </group>

        <group position={[6.41, 10.74, 2.45]}>
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardJ.geometry}
            material={materials.KB3D_CBP_AtlasDGBannerA}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardJ_1.geometry}
            material={materials.KB3D_CBP_SteelGalvanGray}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardJ_2.geometry}
            material={materials.KB3D_CBP_SteelOld}
          />
          <mesh
            geometry={nodes.KB3D_CBP_CyberBunny_A_BillboardJ_3.geometry}
            material={materials.KB3D_CBP_SteelPanelWhiteD}
          />
        </group>
      </group>

      <mesh
        geometry={nodes.StaticMeshActor_4_StaticMeshComponent0.geometry}
        material={materials.KB3D_CBD_SteelGalvanGray}
        position={[49.7, 535.6, 743.6]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.StaticMeshActor_6_StaticMeshComponent0.geometry}
        material={materials.KB3D_CBP_SteelPanelWhiteD}
        position={[50.24, 511.28, 749.53]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.25}
      />
    </group>
  );
}

useGLTF.preload("./models/Scrapertest512-transformed.glb");
