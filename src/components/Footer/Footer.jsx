import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linked from "@iconscout/react-unicons/icons/uil-linkedin"

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%", height: "50%" }} />
      <div className="f-content">
        <span>Connect with me...</span>
        <div className="f-icons">
          <a href='https://www.instagram.com/meabhiarya1/' target='_blank' >
            <Insta color="white" size={"3rem"} />
          </a>

          <a href='https://facebook.com/meabhiarya1' target='_blank'>
            <Facebook color="white" size={"3rem"} />
          </a>

          <a href='https://github.com/meabhiarya1' target='_blank'>
            <Gitub color="white" size={"3rem"} />
          </a>

          <a href='https://www.linkedin.com/in/meabhiarya1/' target='_blank'>
            <Linked color="white" size={"3rem"} />
          </a>

        </div>
        <span className="span">All rights reserved &#169;2023 </span>
      </div>
    </div>
  );
};

export default Footer;