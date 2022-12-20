import React from 'react'
import Card from '../component/UI/Card/Card'
import CountdownTimer from '../component/UI/Countdown/CountdownTimer'
import {visa} from '../Content'

import '../component/UI/Countdown/CountdownTimer.css';

const Visa = (props) => {

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  
  return (

    <div>
      <div
        className='flex flex-auto justify-center align-middle
                   pt-16 md:pt-20 lg:pt-20
                   text-3xl font-extrabold
                   md:text-4xl lg:text-5xl'>{visa.message}</div>

      {/* // Control size of timer box */}
      <div 
        id="visa" 
        className='pt-0 h-48 px-0
                    md:h-20 md:px-20
                    lg:pt-20 lg:h-96 lg:px-48'>
        <Card
          className="bg-contain border-zinc-900 border-8 
                    flex flex-auto justify-center align-middle">
            <CountdownTimer targetDate={dateTimeAfterThreeDays}/>
        </Card>
      </div>
    </div>
  )
}

export default Visa