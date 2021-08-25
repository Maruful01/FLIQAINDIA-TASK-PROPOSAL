import React, { useState } from 'react';
import "./Home.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  Logo1 from '../../Logo/download.jpg';
import  Logo2 from '../../Logo/images.jpg';
import  Logo3 from '../../Logo/2-2-wedding-png-pic.png';
import  Logo4 from '../../Logo/50_School.jpg';
import  Logo5 from '../../Logo/drone.png';
import  Logo6 from '../../Logo/graphic.png';
import  bg from '../../Logo/bgb.png';
import { Helmet } from "react-helmet";

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };
  
    return (
        <section className="slider-component" >
          
         <Slider  className="slider" {...settings} style={{width: "90%", margin: "auto"}}>
          <div>
           <img className="logo-down" src={Logo1} alt="" />
           <br />
          <h4>Wedding Photography</h4>
          </div>

          <div>
          <img src={Logo2} alt="" />
          <br />
          <h4>Beach Photography</h4>
          </div>
          <div>
          <img src={Logo3} alt="" />
          <br />
          <h4>Pre Wedding Short</h4>
          </div>
          <div>
          <img src={Logo4} alt="" />
          <br />
          <h4>Portfolio Short</h4>
          </div>
          <div>
          <img src={Logo5} alt="" />
          <br />
          <h4>Drone Service</h4>
          </div>
          <div>
          <img src={Logo6} alt="" />
          <br />
          <h4>Graphic Design</h4>
          </div>
          <div>
          <img src={Logo1} alt="" />
          </div>
        </Slider>
        <img className="bg-img" src={bg} alt="" />
        <div className="about">
          <h1>About Us</h1>
          <br />
          <h4>Fliqaindia for everyone</h4>
          <br />
          <br />
          <h3>With this belief, we at Fliqaindia started our journey 5 years ago with the belief
           that everyone has the right to quality photography to help them better capture
          and conserve their special moments.
           We have been appreciated and recommended by Start Up India, StartUp Bengal, Imagesbazaar
            and Digital India for our novel initiative. We have partnered with Canvera to give
           you the best service possible. We are also trusted by Justdial, WedMEGood, Shaadisaga, weddingwire and so many well known event organisers.
</h3>

        </div>
        </section>
    );
};

export default Home;