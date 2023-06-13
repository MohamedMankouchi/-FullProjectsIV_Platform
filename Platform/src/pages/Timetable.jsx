import React from 'react'
import { HamburgerMenu } from '../components/HamburgerMenu'
import "../styling/timetable.css";
import background from '../images/timetableback.png'
import poster1 from '../images/poster1.png'


export const Timetable = () => {
  return (
    
     <div className='timetable'>
          <HamburgerMenu/>

   <div className='timetable-cover'>
    <div className='tb-poster'>
      <img src={poster1} alt="" />
    </div>
<div className='timetable-info'>


  <h3>Vrijdag 23 juni</h3>
  <p>17:00 Opening deuren </p>
  <p>17:10 Expo</p>
  <p>18:45 Countdown</p>
  <p>19:00 Livestream Final Show</p>
  <p>20:15 Receptie / Expo</p>
  <p>21:00 Afsluit</p>
  <h3>Zaterdag 24 juni</h3>
  <p>10:00 Start infodag</p>
  <p>10:30 Expo</p>
  <p>15:00 Einde infodag</p>
</div>
   </div>
   </div>
  )
}
export default Timetable()