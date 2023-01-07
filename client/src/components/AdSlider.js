import React, { Component } from "react";
import Slider from "react-slick";
import "../style/slick.css";
import "../style/slick-theme.css";

import adOne from "../assets/adOne.jpg";
import adTwo from "../assets/adTwo.jpg";
import adThree from "../assets/adThree.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={adOne} alt="" />
          </div>
          <div>
            <img src={adTwo} alt="" />
          </div>
          <div>
            <img src={adThree} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
