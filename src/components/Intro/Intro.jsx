import React, { useContext } from "react";
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Facebook from '../../img/Facebook.png';
import myimg1 from '../../img/myImg1.jpg';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { motion } from 'framer-motion';
import { Link } from "react-scroll";
import { themeContext } from "../../Context";

const Intro = () => {

    const transition = { duration: 2, type: "spring" };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='intro' id="Intro">

            {/* left side */}
            <div className='i-left'>
                <div className='i-name'>
                    <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
                    <span>Abhishek</span>
                    <span>Frontend Developer with clear concept in building and
                        maintaining responsive web applications using HTML, CSS, JavaScript, React and also I have good problem solving skills that make me efficeint to complete my work on time. Apart of that I am also learning Backend development to be a Full Stack developer. I have many more skills and worked in many area of this sector you can check out in below parts also.
                    </span>
                </div>
                <Link to="contact" smooth={true} spy={true}>
                    <button className="button i-button s-button">Hire me</button>
                </Link>
                
                <div className='i-icons'>
                    <a href='https://www.instagram.com/meabhiarya1/' target='_blank' >
                        <img src={Instagram} alt='instagram' />
                    </a>
                    <a href='https://github.com/meabhiarya1' target='_blank'>
                        <img src={Github} alt='github' />
                    </a>

                    <a href='https://www.linkedin.com/in/meabhiarya1/' target='_blank'>
                        <img src={LinkedIn} alt='linkedin' />
                    </a>
                </div>
            </div>

            {/* //right side */}
            <div className='i-right'>
                <img src={Vector1} alt='' />
                <img src={Vector2} alt='' />
                <img src={myimg1} alt='' />
                <img src={glassesimoji} alt='' />
                <img src={glassesimoji} alt='' />
                <div style={{ top: "-4%", left: '60%' }}>

                    {/* <motion.img
                        initial={{ left: "-36%" }}
                        whileInView={{ left: "-24%" }}
                        transition={transition}
                        src={glassesimoji}
                        alt=""
                    /> */}

                    <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
                </div>
                <div style={{ top: "18rem", left: '0rem' }}>
                    <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
                </div>

                {/* blur div */}
                <div className='blur' style={{ background: "rgb(238 210 255)" }}>
                </div>

                <div className='blur' style={{
                    background: "#C1F5FF",
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}>
                </div>
            </div>
        </div>
    )
}

export default Intro;