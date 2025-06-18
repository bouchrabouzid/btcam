import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// images
import honkkong from './assets/honkkong.jpg'
import japan from './assets/japan.webp'
import lasVegas from './assets/lasvegas.webp'
import macao from './assets/macao.webp'

export default class DemoCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { img: honkkong, legend: "Honk Kong" },
                { img: japan, legend: "Japan" },
                { img: lasVegas, legend: "Las Vegas" },
                { img: macao, legend: "Macao" },
            ]
        }
    }
    render() {
        return (
            <div style={{ maxWidth: "720px" }} >
                <Carousel >

                    {
                        this.state.items.map(item =>
                            <div>
                                <img src={item.img} />
                                <p className="legend">{item.legend}</p>
                            </div>
                        )
                    }

                </Carousel>
            </div>
        );
    }
}