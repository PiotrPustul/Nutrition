import React, { Component } from 'react';
import image from "../../images/about-author.jpg";

export default class AboutAuthor extends Component {
    render() {
        return (
            <section className="about-author" id="omnie">
                <div className="wrapper">
                    <img src={image} className="about-author__img" alt="author" />
                    <div className="about-author__wrapper">
                        <h3 className="about-author__title">
                            Plan your food
                        </h3>
                        <p className="about-author__txt">
                            We share our knowledge and experience. We show you how, with little effort, you can integrate a healthy diet into your entire lifestyle. With us, you will learn how to meet your individual nutritional needs with healthy products.

                        <br></br>
                            <br></br>

                            During individual meetings we learn about your needs and look for the right solutions to achieve the best results for your health You decide which of them will become a permanent part of your everyday life style.
                            Nutrition Education is a practical way to make healthy eating a part of your lifestyle. We combine knowledge with practice to make a real difference to your health. We pass on the knowledge about nutrition so that it can serve you to permanently change your habits and shape new eating habits.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}
