import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import "./gameSwiper.css";

// Import required modules
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import GameSlide from "./GameSlide";

function GameSwiper({ games }) {
  const [active, setActive] = useState(false);

  const handleToggleVideo = () => {
    setActive(!active);
  };

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      navigation={true}
      loop={true}
      slidesPerView={"auto"}
      // 🧩 Alternative way to center slides without centeredSlides
      slidesOffsetBefore={window.innerWidth / 4}
      slidesOffsetAfter={window.innerWidth / 4}
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      className="gameSwiper"
    >
      {games.map((game) => (
        <SwiperSlide key={game._id}>
          <GameSlide
            key={game._id}
            game={game}
            active={active}
            toggleVideo={handleToggleVideo}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default GameSwiper;
