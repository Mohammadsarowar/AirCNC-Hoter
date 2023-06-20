
import React from 'react';
import Container from '../../components/shared/Containr';

import Head from '../../components/Rooms/Head';
import RoomInfo from '../../components/Rooms/RoomInfo';
import RoomReservation from '../../components/Rooms/RoomReservation';

const RoomDetails = () => {
    return (
        <Container>
          <div className='max-w-screen-lg mx-auto'>
          <div className='flex flex-col gap-6'>
          <Head/>
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
          <RoomInfo/>
          <div className='mb-10 md:col-span-3 origin-first md:order-last'><RoomReservation/></div>
          
          </div>
          
          </div>

          </div>  
        </Container>
    );
};

export default RoomDetails;