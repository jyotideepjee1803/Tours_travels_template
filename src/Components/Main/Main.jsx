import React, {useEffect} from "react";
import './main.css'

import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'

import img from '../../assets/img.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id:1, 
        imgSrc : img,
        destTitle: 'Bora Bora',
        location : 'New Zealand',
        fees: '$700',
        description: 'The empitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id:2, 
        imgSrc : img2,
        destTitle: 'Machu Picchu',
        location : 'Peru',
        fees: '$600',
        description: 'More than 7,000 feet above sea level in the Andes Mountains, it was named one of the New Seven Wonders of the World in 2007 and is a UNESCO heritage site'
    },
    {
        id:3, 
        imgSrc : img3,
        destTitle: 'Golconda Fort',
        location : 'India',
        fees: '$600',
        description: "The inner fort contains ruins of palaces, mosques and a hill top pavilion, which rises about 130 meters high and gives a bird's eye view of other buildings."
    },
    {
        id:4, 
        imgSrc : img,
        destTitle: 'Bora Bora',
        location : 'New Zealand',
        fees: '$700',
        description: 'The empitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id:5, 
        imgSrc : img2,
        destTitle: 'Machu Picchu',
        location : 'Peru',
        fees: '$600',
        description: 'More than 7,000 feet above sea level in the Andes Mountains, it was named one of the New Seven Wonders of the World in 2007 and is a UNESCO heritage site'
    },
    {
        id:6, 
        imgSrc : img3,
        destTitle: 'Golconda Fort',
        location : 'India',
        fees: '$600',
        description: "The inner fort contains ruins of palaces, mosques and a hill top pavilion, which rises about 130 meters high and gives a bird's eye view of other buildings."
    },
    {
        id:7, 
        imgSrc : img,
        destTitle: 'Bora Bora',
        location : 'New Zealand',
        fees: '$700',
        description: 'The empitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id:8, 
        imgSrc : img2,
        destTitle: 'Machu Picchu',
        location : 'Peru',
        fees: '$600',
        description: 'More than 7,000 feet above sea level in the Andes Mountains, it was named one of the New Seven Wonders of the World in 2007 and is a UNESCO heritage site'
    },
    {
        id:9, 
        imgSrc : img3,
        destTitle: 'Golconda Fort',
        location : 'India',
        fees: '$600',
        description: "The inner fort contains ruins of palaces, mosques and a hill top pavilion, which rises about 130 meters high and gives a bird's eye view of other buildings."
    }
]

function Main(){
    //scroll animation :
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos = "fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {/* map data */}
                
                {
                    Data.map(({id, imgSrc, destTitle, location, fees, description}) => {
                        return (
                            <div key={id} data-aos = "fade-up" className="singleDestination">
                                    <div className="imageDiv">
                                        <img src={imgSrc} alt={destTitle} />
                                    </div>
                                    <div className="cardInfo">
                                        <h4 className="destTitle">{destTitle}</h4>
                                        <span className="continent flex">
                                            <HiOutlineLocationMarker className="icon"/>
                                            <span className="name">{location}</span>
                                        </span>

                                        <div className="fees flex">
                                            <div className="price">
                                                <h5>{fees}</h5>
                                            </div>
                                        </div>

                                        <div className="desc">
                                            <p>{description}</p>
                                        </div>

                                        <button className="btn flex">
                                            DETAILS <HiOutlineClipboardCheck className="icon"/>
                                        </button>
                                    </div>
                            </div>
                        )

                    })
                }
            </div>
        </section>
    )
}

export default Main;