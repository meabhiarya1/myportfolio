import React, { useContext } from "react";
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { Link } from 'react-scroll'

const Works = () => {

    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='works' id="works">
            {/* left side */}
            <div className="awesome">
                {/* dark Mode */}
                <span style={{ color: darkMode ? "white" : "" }}>
                    Works for All these
                </span>
                <span>Brands & Clients</span>
                <span>
                    I have a good experince in this sector and worked with many clients and companies, apart from that I also worked as a freelancer and done all the projects on time and You can check my testimonial that how customers are happy with my services and some of my projects are also mention below you can check out also.
                </span>
                <Link to="contact" smooth={true} spy={true}>
                    <button className="button s-button">Hire Me</button>
                </Link>
                <div
                    className="blur s-blur1"
                    style={{ background: "#ABF1FF94" }}
                ></div>
            </div>

            {/* right side */}

            <div className="w-right">
                <div className='w-mainCircle'>
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>{" "}
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </div>

                {/* background Circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works