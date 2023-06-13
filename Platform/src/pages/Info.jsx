import React from "react";
import { HamburgerMenu } from "../components/HamburgerMenu";
import "./../styling/info.css";
import { Link } from "react-router-dom";

export const Info = () => {
  return (
    <div className="infowrapper">
      <HamburgerMenu />
      <div className="info">
        <h1>MULTIMEDIA & CREATIEVE TECHNOLOGIE</h1>
        <p>
          Gepassioneerd door die steeds veranderende geconnecteerde wereld? Ben
          jij een digitale maker van de toekomst? Of ben je gewoon benieuwd naar
          wat onze studenten Multimedia & Creatieve Technologie verwezenlijkt
          hebben dit jaar? Dan ben je hier op het juiste adres!
        </p>
      </div>

      <div className="info2">
        <h2>Livestream</h2>
        <p>
          Op vrijdag 23 juni worden de beste werken van onze studenten
          gepresenteerd tijdens onze jaarlijkse Final Show: een show boordevol
          talent, interviews, en nog veel meer! Tijdens deze livestream worden
          ook de winnaars aangekondigd voor elke categorie, dit wil je dus zeker
          niet missen!
        </p>
        <h3>Wanneer?</h3>
        <p className="btekst">23 juni om 19u.</p>
       <Link to ='/Livestream'> <button className="buttonshowcase">Livestream</button></Link>
      </div>

<div className='info3'>
<h2>INFODAG</h2>
<p>Zin om langs te komen op onze campus? Het kan! Op zaterdag 25 juni gooien wij onze deuren open tot 15u, en jij bent uitgenodigd! Kom eens proeven van het leven als een student Multimedia & Creatieve Technologie... en wie weet begin jij in september aan onze opleiding!
</p>
<h3>Wanneer?</h3>
<p className='btekst'>Zaterdag 24 juni van 10u tot 15u.</p>
<h3>Waar?</h3>
<p className='btekst'>Campus Kaai, Nijverheidskaai 170, 1070 Anderlecht.
</p>
</div>
<div className='info4'>
<h2>EXPO</h2>
<p>Welkom bij de Final Show expositie! Hier vindt je verschillende projecten van afstuderende studenten in alle vier categorieën: Web & App, Smart Technology, Motion en Extended Reality. Volg de wegwijzers richting de parking van campus Kaai.

Geraak je niet op de campus, maar wil je toch de eindwerken bekijken? Dan hebben we goed nieuws, want alle eindwerken zijn ook online te bekijken in onze showroom!</p>
<h3>WANNEER?</h3>
<p className="btekst">Vrijdag 23 juni van 17u10 tot 21u
Zaterdag 24 juni van 10u30 tot 15u</p>
<h3>WAAR?</h3>
<p className="btekst">Campus Kaai naast het Medialab, Nijverheidskaai 170, 1070 Anderlecht.</p>
<button className="buttonshowcase">Showcase</button>
</div>

<div className="info5">
  <h2>MEER INFO</h2>

  <p>Je vindt alle informatie over Multimedia & Creatieve Technologie door op de onderstaande link te klikken. </p>
  <p>- link toevoegen van site EhB MULTEC Klik hier
</p>
<p>- Onze Final Show en de infodag vindt plaats op onze Kaai campus in Anderlecht.
  Adres: Nijverheidskaai 170, 1070 Anderlecht.</p>
  <p>- Vind de campus via Google Maps of via de bereikbaarheidsfiches (plan of tekst).</p>
</div>






<div className='any-questions'>
  <h2>Any questions?</h2>
  <ul>
    <li>What is the final show?</li>
    <li>Are there any hands-on activities or workshops at the final show?</li>
    <li>When will the open day take place during the final show?</li>
    <li>Can parents and family members attend the final show?</li>
    <li>How can I participate in the final show as a student?</li>
  </ul>
</div>
     
    </div>
  );
};
export default Info;
