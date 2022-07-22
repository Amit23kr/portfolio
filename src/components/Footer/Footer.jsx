import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Amitsah2393@gmail.com</span>
        <div className="f-icons">
        <a href="https://github.com/Amit23kr">
            <Gitub color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/people/Amit-Sah/100077351465617/">
           <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://www.instagram.com/amkr2_3/">
           <Insta color="white" size={"3rem"} />
          </a>
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
