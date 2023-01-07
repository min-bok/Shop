import React, { Component } from "react";
import Slider from "react-slick";
import "../style/slick.css";
import "../style/slick-theme.css";

import img from "../assets/adex.png";

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
            <img src={img} alt="" />
          </div>
          <div>
            <h3>2</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
