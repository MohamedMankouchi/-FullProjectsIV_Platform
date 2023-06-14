import React from "react";
import { HamburgerMenu } from "../components/HamburgerMenu";
import "./../styling/info.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo-icon.svg";
import Icon from "../images/icon.svg";
import Live from "../images/live-icon.svg";

export const Info = () => {
  return (
    <div className="infowrapper">
      <HamburgerMenu />
      <div className="info">
        <h1>Praktische info</h1>
        <p className="info_text">
          Gepassioneerd door die steeds veranderende geconnecteerde wereld? Ben
          jij een digitale maker van de toekomst? Of ben je gewoon benieuwd naar
          wat onze studenten Multimedia & Creatieve Technologie verwezenlijkt
          hebben? Dan ben je hier op het juiste adres!
        </p>
      </div>
      <div className="infoContainer">
        <div className="container_info">
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
        </div>

        <div className="container_info">
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
              Zaterdag 24 juni van 10u tot 15u
            </p>
            <div className="btn_container">
              <Link target="_blank" to={"https://www.finalshow.be/livestream"}>
                <button className="btn_redirect">Livestream</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container_info">
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
              Zaterdag 24 juni van 10u tot 15u
            </p>
            <div className="btn_container">
              <Link to={""}>
                <button className="btn_redirect">Showcase</button>
              </Link>
            </div>{" "}
          </div>
        </div>
      </div>

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
            of via de bereikbaarheidsfiches ({" "}
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
    </div>
  );
};
export default Info;
