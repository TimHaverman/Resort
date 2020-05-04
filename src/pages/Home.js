import React from 'react';
import Worker from '../components/Worker.js';
import Head from '../components/Head.js';
import { Link } from "react-router-dom";
import Services from "../components/Services.js";
import FeaturedRooms from "../components/FeaturedRooms.js";


const Home = () => {
    return (
        <>
            <Worker>
                <Head title="luxurious rooms" subtitle="delux rooms starting at $299">
                    <Link to='/rooms'  className="btn-primary">Our rooms</Link>
                </Head>
            </Worker> 
            <Services />
            <FeaturedRooms />
            
        </>//this is shared picture background from App.css
    );
};
export default Home;