import React from "react";
import { HamburgerMenu } from "../components/HamburgerMenu";
import "./../styling/info.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo-icon.svg";
import Icon from "../images/icon.svg";
import Live from "../images/live-icon.svg";
import { Faq } from "../components/Faq";
import { motion } from "framer-motion";
import Neon from "../images/neon.svg";
export const Info = () => {
  const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0.5 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
      },
    },
  };
  return (
    <div className="infowrapper">
      <HamburgerMenu />
      <div className="info">
        <motion.div
          initial={{ x: -350, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.5 }}
          className="info_fs"
        >
          <h1>Praktische info</h1>
          <p className="info_text">
            Gepassioneerd door die steeds veranderende geconnecteerde wereld?
            Ben jij een digitale maker van de toekomst? Of ben je gewoon
            benieuwd naar wat onze studenten Multimedia & Creatieve Technologie
            verwezenlijkt hebben? Dan ben je hier op het juiste adres!
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -450, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 1 }}
          className="neon_img"
        >
          {/* <img src={Neon} alt="" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="554.126"
            height="382.588"
            viewBox="0 0 554.126 382.588"
          >
            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_1247)">
              <path
                id="Path_1247-2"
                data-name="Path 1247"
                d="M310.18,70.484l0,.031-.029-.015-112,166.72L124.4,183.012l114.755-64.974,6.588-43.881L86.154,166.592l-.68.393-6.531,31.926L210.112,301.663l1.311,1.053L326.376,128.444l98.414,56.23L287.808,255.127l-.851.437L280.4,307.8,485.209,205.583l.98-.488,2.19-40.04L350.494,91.879l.051-.079L319.64,75.5Z"
                fill="#fff"
              />
            </g>
            <path
              id="neon-path"
              d="M310.18,70.484l0,.031-.029-.015-112,166.72L124.4,183.012l114.755-64.974,6.588-43.881L86.154,166.592l-.68.393-6.531,31.926L210.112,301.663l1.311,1.053L326.376,128.444l98.414,56.23L287.808,255.127l-.851.437L280.4,307.8,485.209,205.583l.98-.488,2.19-40.04L350.494,91.879l.051-.079L319.64,75.5Z"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      <motion.div
        variants={container}
        whileInView="visible"
        initial="hidden"
        className="infoContainer"
        viewport={{ once: true, amount: 0.7 }}
      >
        <motion.div variants={item} className="container_info">
          <img src={Icon} />
          <div>
            <h2>Infodag</h2>
            <p style={{ textAlign: "left" }}>
              Zin om langs te komen op onze campus? Het kan! Op zaterdag 24 juni
              gooien wij onze deuren open tot 15u, en jij bent uitgenodigd! Kom
              eens proeven van het leven als een student Multimedia
            </p>
          </div>
          <div className="end">
            <p className="wanneer_span">WANNEER?</p>
            <p style={{ textAlign: "left" }}>
              Zaterdag 24 juni van 10u tot 15u
            </p>
            <div className="btn_container">
              <Link
                target="_blank"
                to={
                  "https://www.erasmushogeschool.be/nl/evenementen/infodag-24-juni?gclid=CjwKCAjwyqWkBhBMEiwAp2yUFpR0KtJE8wrpOqFig1Uy5-_ChlzPfIC8Cl1lnY_6uZUUVxr9l-hi9BoCoTsQAvD_BwE"
                }
              >
                <button className="btn_redirect">Infodag</button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="container_info">
          <img src={Live} />
          <div>
            <h2>Livestream</h2>
            <p style={{ textAlign: "left" }}>
              Op vrijdag 23 juni worden de beste werken van onze studenten
              gepresenteerd tijdens onze jaarlijkse Final Show: een show
              boordevol talent, interviews, en nog veel meer! Tijdens deze
              livestream worden ook de winnaars aangekondigd voor elke
              categorie, dit wil je dus zeker niet missen!
            </p>
          </div>
          <div className="end">
            <p className="wanneer_span">WANNEER?</p>
            <p style={{ textAlign: "left" }}>
              Vrijdag 23 juni 19:00 uur
            </p>
            <div className="btn_container">
              <Link target="_blank" to={"https://www.finalshow.be/livestream"}>
                <button className="btn_redirect">Livestream</button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="container_info">
          <img src={Logo} />
          <div>
            <h2>Expo</h2>
            <p style={{ textAlign: "left" }}>
              Welkom bij de Final Show expositie! Hier vind je verschillende
              projecten van afstuderende studenten in alle categorieën. Alle
              eindwerken zijn ook online te bekijken in onze showcase!
            </p>
          </div>
          <div className="end">
            <p className="wanneer_span">WANNEER?</p>
            <p style={{ textAlign: "left" }}>
            Vrijdag 23 juni van 17u10 tot 21u <br />
            Zaterdag 24 juni van 10u30 tot 15</p>
            <div className="btn_container">
              <Link to={"https://fp4-showcase.be/"} target="_blank">
                <button className="btn_redirect">Showcase</button>
              </Link>
            </div>{" "}
          </div>
        </motion.div>
      </motion.div>

      <div className="location">
        <h2>Waar je moet zijn</h2>
        <ul>
          <li>
            Onze Final Show en de infodag gaan door op Kaai campus in
            Anderlecht. Nijverheidskaai.
          </li>
          <li>
            Vind de campus via{" "}
            <a
              href="https://www.google.be/maps/place/Erasmushogeschool+Brussel/@50.8419576,4.3209419,17z/data=!4m14!1m7!3m6!1s0x47c3c40f19faf0f9:0x4ef5b683135ecb1e!2sErasmushogeschool+Brussel!8m2!3d50.842239!4d4.322808!16zL20vMDMwNl83!3m5!1s0x47c3c40f19faf0f9:0x4ef5b683135ecb1e!8m2!3d50.842239!4d4.322808!16zL20vMDMwNl83?entry=ttu"
              className="linkto"
              target="_blank"
            >
              Google Maps
            </a>{" "}
            of via de bereikbaarheidsfiches (
            <a
              href="https://www.erasmushogeschool.be/sites/ehb/files/inline-files/Kaai-plan.pdf"
              className="linkto"
              target="_blank"
            >
              plan
            </a>{" "}
            of{" "}
            <a
              href="https://www.erasmushogeschool.be/sites/ehb/files/inline-files/Kaai-tekst.pdf"
              className="linkto"
              target="_blank"
            >
              tekst
            </a>
            ).
          </li>
        </ul>
      </div>

      <div className="opleiding">
        <h2>Over de opleiding</h2>
        <ul>
          <li>
            Wil je leren programmeren en ontwerpen om zelf je websites en apps
            te maken?
          </li>
          <li>
            Interesse in het maken van 3D games voor Virtual Reality of
            Metaverse?
          </li>

          <li>
            Wil je kunnen vliegen en filmen met drones of een virtuele
            filmstudio maken?
          </li>

          <li>
            Zou je graag Motion Graphics kunnen maken en videobeelden monteren
            en bewerken?
          </li>

          <li>
            Meer info{" "}
            <a
              href="https://www.erasmushogeschool.be/nl/opleidingen/multimedia-creatieve-technologie"
              className="linkto"
              target="_blank"
            >
              over
            </a>{" "}
            de opleiding.
          </li>
        </ul>
      </div>
      <Faq />
    </div>
  );
};
export default Info;
