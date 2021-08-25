import React from 'react';
import { Helmet } from 'react-helmet';
import './Services.css';
const Services = ({metaContentSecondPage}) => {
    const {title, description} = metaContentSecondPage;
    return (
        <div>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
            <button className="button bg-gr">Login/Signup</button>
            <div className="services">
          <h1>What is Logo design ?</h1>
          <br />
          <h3>
           Logo tells the story of your brand. It enhances your brand image and speaks to your audience.
           Logo design makes the first impression for you in your working environment. Gives your
           business and brand an identity and projects a professional image. It creates memorable visuals
           to the outside world and build loyalty.
           </h3>
        </div>
        <div style={{backgroundColor: "bisque", textAlign: "center", padding: "20px 0px"}}>
        <button className="button">Start designing</button> <button className="button bg-brown">Get a quote</button>
        </div>
        </div>
    );
};

export default Services;