import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Expense from '../../img/Expense.png'
import Ecommerce from "../../img/ecommerce.png";
import Restaurant from "../../img/restaurant.png";
import Restaurant1 from "../../img/restaurant1.png";
import MailBox from "../../img/mailbox.png";
import { themeContext } from "../../Context";

const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="portfolio" id="portfolio">
            {/* heading */}
            <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <a href="https://abhismallrestro.netlify.app/" target="_blank">
                        <img src={Restaurant} alt="" />
                    </a>
                </SwiperSlide>


                <SwiperSlide>
                    <a href="https://abhiecomstore.netlify.app/" target="_blank">
                        <img src={Ecommerce} alt="" />
                    </a>
                </SwiperSlide>

                <SwiperSlide>
                    <a href="https://abhirestroapp.netlify.app/" target="_blank">
                        <img src={Restaurant1} alt="" />
                    </a>
                </SwiperSlide>

                <SwiperSlide>
                    <a href="https://abhiexpensetracker.netlify.app/" target="_blank">
                        <img src={Expense} alt="" />
                    </a>
                </SwiperSlide>

                <SwiperSlide>
                    <a href="https://abhiexpenses.netlify.app/" target="_blank">
                        <img src={MailBox} alt="" />
                    </a>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Portfolio;