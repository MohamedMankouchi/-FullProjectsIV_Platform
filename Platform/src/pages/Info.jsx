import React from 'react'
import { HamburgerMenu } from "../components/HamburgerMenu";
import './../styling/info.css'

export const Info = () => {
  return (
    <div>
      <HamburgerMenu/>
<div className='info'>
      <h1>MULTIMEDIA & CREATIEVE TECHNOLOGIE</h1>
      <p>Gepassioneerd door die steeds veranderende geconnecteerde wereld? Ben jij een digitale maker van de toekomst? Of ben je gewoon benieuwd naar wat onze studenten Multimedia & Creatieve Technologie verwezenlijkt hebben dit jaar? Dan ben je hier op het juiste adres!</p>
      </div>

<div className='info2'>
  <h2>Livestream</h2>
<p>Op vrijdag 23 juni worden de beste werken van onze studenten gepresenteerd tijdens onze jaarlijkse Final Show: een show boordevol talent, interviews, en nog veel meer! Tijdens deze livestream worden ook de winnaars aangekondigd voor elke categorie, dit wil je dus zeker niet missen!
</p>
  <h2>Wanneer?</h2>
  <p>23 juni om 19u.</p>
</div>

<div className='info3'>
<h2>INFODAG</h2>


</div>
    </div>
  )
}
export default Info()