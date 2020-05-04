import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Head from '../components/Head';
import { Link } from "react-dom";
import {RoomContext} from '../context.js';
import StyledWorker from '../components/StyledWorker.js';


export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state ={
            filler: this.props.match.params.filler,
            defaultBcg: defaultBcg
        };
    }
    static contextType = RoomContext;
    
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.filler);
        if(!room){
            return (
                <div className="error">
                    <h3>no such room could be found</h3>
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
            </div>
            ); 
        }
        const {name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = room;
        const [main, ...defaultImages] = images;
        console.log(defaultImages);

        return (
            <>
                <StyledWorker img={images[0] || this.state.defaultBcg}>
                    <Head title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">
                            back to rooms
                        </Link>
                    </Head>
                </StyledWorker>
                <section className="single-room">
                    <div className="single-room-images">
                        {images.map((item,index)=>{
                            return <img key={index} src={item} alt={name}/>
                            })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price : ${price}</h6>
                            <h6>size : ${size} SQFT</h6>
                            <h6>
                                max capacity :
                                {capacity > 1 ? `${capacity} people` :
                                `${capacity} person `} 
                            </h6>
                            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                            <h6>{breakfast && "free breakfast  included"} </h6>
                        </article>
                    </div>
                </section>
                <section>
                    <h6>extras</h6>
                    <ul className="room-extras">
                        {extras.map((item,index)=> (
                            <li key={index}>- {item}</li>
                        ))}
                    </ul>  
                </section>
            </>
        );
    }
}
