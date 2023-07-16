import React from 'react';

import Calender from './Calender';
import Button from '../Button/Button';

const RoomReservation = () => {

    return (
        <div className=' bg-white rounded-lg border-[1px] border-neutral-200 overflow-hidden '>
        <div className='flex flex-col gap-1 p-4'>
        <div className='text-2xl font-semibold'>$ 200
         <p className='font-light text-neutral-600'>Night</p>
        </div>
       
        <hr/>
        <div className='flex justify-center'>  <Calender/></div>
          
            <hr/>
            <div><Button label='Reserve'></Button></div><hr/>
            <div className='p-4 text-lg flex flex-row items-center justify-between font-semibold'>
                <div>Total</div>
                <div>$300</div>
            </div>
        </div>
            
        </div>
    );
};

export default RoomReservation;