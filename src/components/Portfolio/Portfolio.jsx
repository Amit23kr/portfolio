import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/gwc-project1.png";
import Litta from '../../img/litta-projectNew.png'
import MusicApp from "../../img/Notifications.png";
import AutoAllocation from "../../img/delinet.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={HOC} alt="" style={{height: "220px"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Litta} alt="" style={{height: "220px"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" style={{height: "220px"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={AutoAllocation} alt="" style={{height: "220px"}}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
