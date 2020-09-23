import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Carousela extends Component {
    state = {}
    render() {
        return (

            <section className="carousel__container">
                <div className="wrapper">
                    <Carousel showThumbs={false} infiniteLoop>
                        <div className="carousel__slide">
                            <h2>FOR US, HEALTHY EATING IS AN EVERYDAY PART OF THE LIFESTYLE</h2>
                            <p>During individual meetings we learn about your needs and look for the right solutions to achieve the best results for your health You decide which of them will become a permanent part of your everyday life style!</p>
                        </div>
                        <div className="carousel__slide">
                            <h2>PROFESSIONALIZM</h2>
                            <p>We are experienced specialists. We will share with you current and reliable knowledge about healthy eating Awareness of your body's needs will allow us to plan an individual nutrition profile for you and help shape your eating habits!</p>
                        </div>
                        <div className="carousel__slide">
                            <h2>COMPREHENSIVE APPROACH</h2>
                            <p>Using modern diagnostic tests, we combine prevention with nutritional knowledge to support you in the process of change You will get to know your body better, understand its needs and plan healthy eating for you and your family!</p>
                        </div>
                    </Carousel>
                </div>
            </section>
        );
    }
}
export default Carousela;