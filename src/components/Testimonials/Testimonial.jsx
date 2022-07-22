import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/mayank.jpg";
import profilePic2 from "../../img/mitika.jpg";
import profilePic3 from "../../img/mukul.jpg";
import profilePic4 from "../../img/vivek.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Amit has all the qualities of an amazing software developer, but his eagerness to resolve issues and quickly learn from them is what makes him an outstanding person to work with. He will always be an asset to any team or organisation that he is part of due to his ability to provide simple solutions even for complex issues and his positive mindset.",
    },
    {
      img: profilePic2,
      review:
        "We’ve joined our hands on several projects, and Amit Sah is one of the talented software professional. .He is a professional, helpful, positive ,hardworking and dedicated person who along with his strong technical will complete your project in a given time frame. His ability to impart solution to complex problem is remarkable. Amit Sah would become an appreciated member of any team.",
    },
    {
      img: profilePic3,
      review:
        "Amit sah is outgoing and wiling to reach out to people and involve them with projects. I particularly appreciate amit sah team spirit and his willingness to help the office server its stakeholders in a better manner",
    },
    {
      img: profilePic4,
      review:
        "Amit is a very hardworking developer with a strong conviction to solve issues. He is a great learner and always looking for new opportunities to learn in his domain. I have seen Amit grow into the role of backend developer and gain very resourceful experience and he is a great addition to any team",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Colleagues always get </span>
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
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
