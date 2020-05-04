import React from 'react';
import Worker from '../components/Worker.js';
import Head from '../components/Head.js';
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer.js';

const Rooms = () => {
    return (  
        <>      
        <Worker Worker="roomsWork">
            <Head title="our rooms">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Head>
        </Worker>
        <RoomsContainer />
        </>
    );
};

export default  Rooms;
