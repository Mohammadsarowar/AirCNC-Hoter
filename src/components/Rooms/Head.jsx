import React from 'react';
import Heading from '../Heading/Heading';

const Head = ({roomData}) => {
    return (
        <div>
            <Heading 
        title={roomData?.title}
        subtitle={roomData?.location}
        />
        <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
            <img className='object-cover w-full' alt='header img' src={roomData?.image}/>
        </div>
        </div>
    );
};

export default Head;