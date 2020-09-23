import React, { Component } from 'react';
import image1 from "../../images/about-app-1.jpg";
import image2 from "../../images/about-app-2.jpg";
import image3 from "../../images/about-app-3.jpg";

export default class AboutApp extends Component {
    render() {
        return (
            <section className="about-app" id="dlaczegowarto">
                <div className="wrapper">
                    <article className="about-app__art">
                        <img className="about-app__art__img" src={image1} alt="water" />
                        <h3 className="about-app__art__title">PRACTICE</h3>
                        <p className="about-app__art__txt">We share our knowledge and experience. We show you how, with little effort, you can integrate a healthy diet into your entire lifestyle. With us, you will learn how to meet your individual nutritional needs with healthy products.</p>
                    </article>
                    <article className="about-app__art">
                        <img className="about-app__art__img" src={image2} alt="vegetables" />
                        <h3 className="about-app__art__title">CUSTOMISED METHODS</h3>
                        <p className="about-app__art__txt">During individual meetings we learn about your needs and look for the right solutions to achieve the best results for your health You decide which of them will become a permanent part of your everyday life style.</p>
                    </article>
                    <article className="about-app__art">
                        <img className="about-app__art__img" src={image3} alt="knife" />
                        <h3 className="about-app__art__title">NUTRITION EDUCATION</h3>
                        <p className="about-app__art__txt">Nutrition Education is a practical way to make healthy eating a part of your lifestyle. We combine knowledge with practice to make a real difference to your health. We pass on the knowledge about nutrition so that it can serve you to permanently change your habits and shape new eating habits.</p>
                    </article>
                </div>
            </section>
        )
    }
}
