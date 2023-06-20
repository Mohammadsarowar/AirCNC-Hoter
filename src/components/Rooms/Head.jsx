import React from 'react';
import Heading from '../Heading/Heading';

const Head = () => {
    return (
        <div>
            <Heading 
        title='Veluvana Bail - owl Bamboo House'
        subtitle='sidemen Indonesia'
        />
        <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
            <img className='object-cover w-full' alt='header img' src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600'/>
        </div>
        </div>
    );
};

export default Head;