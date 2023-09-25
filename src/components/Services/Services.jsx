import React, { useContext } from "react";
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './resume.pdf';
import { themeContext } from "../../Context";

const Services = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="services" id="services">
            {/* leftside */}
            <div className='awesome'>
                <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
                <span>Services</span>
                <span>FrontEnd Development, Backend Development, <br />Mobile Development, Web Application, Web Designing and Many more... </span>
                <a href={Resume} download>
                    <button className='button s-button'>Downlod CV</button>
                </a>

                <div className='blur s-blur1' style={{ background: "#ABF1FF94" }}></div>
            </div>

            {/* rightside */}
            <div className='cards' id="card1">
                <div style={{ right: '-35rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Designing'}
                        detail={"Figma, Sketch, Adobe Photoshop and Many more.."} />
                </div>
            </div>

            <div className='cards'>
                <div style={{ top: '12rem', right: '-15rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'FrontEnd Developing Skills'}
                        detail={"HTML, CSS, JavaScript, React, NextJs and Many more..."} />
                </div>
            </div>

            <div className='cards'>
                <div style={{ top: '20rem', right: '-45rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'BackEnd Developing Skills'}
                        detail={"NodeJs,   ExpressJs,  MongoDB, MySql and Many more.."} />
                </div>
            </div>
            <div
                className="blur s-blur2" 
                style={{ background: "var(--purple)" }}>
            </div>
        </div>
    );
};

export default Services;