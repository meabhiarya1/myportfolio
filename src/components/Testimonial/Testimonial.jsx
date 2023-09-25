import React,{useContext} from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { themeContext } from "../../Context";

function Testimonial() {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const clients = [
        {
            img: profilePic1,
            review:
            'Your implementation of the search algorithm was efficient and clean. I particularly appreciated how you added comments to make it easier for others to understand the code.',
        },
        {
            img: profilePic2,
            review:
                "I saw that how you resolved the database issue earlier. You worked quickly and effectively to address it. Great job!",
        },
        {
            img: profilePic3,
            review:
                "Your ability to brainstorm innovative solutions during our team meetings has been a game-changer. Your creative problem-solving skills have really made an impact.",
        },
        {
            img: profilePic4,
            review:
                "I wanted to let you know how much I appreciated your help with optimizing the API. Your expertise in performance tuning was invaluable.",
        },
    ];


    return (
        <div className="t-wrapper" id="testimonial">
            <div className="t-heading">
                <span>Clients always get </span>
                <span>Exceptional Work </span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

            </div>
            <Swiper
                // install Swiper modules
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span style={{ color: darkMode ? "white" : "" }}>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    )
}

export default Testimonial;