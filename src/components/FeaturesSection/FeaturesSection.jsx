import React, { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "./FeaturesSection.scss";
// 圖片
import Feature1 from "../../assets/features/features1.webp";
import Icon1 from "../../assets/features/features1_icon.webp";
import Feature2 from "../../assets/features/features2.webp";
import Icon2 from "../../assets/features/features2_icon.webp";
import Feature3 from "../../assets/features/features3.webp";
import Icon3 from "../../assets/features/features3_icon.webp";
import Feature4 from "../../assets/features/features4.webp";
import Icon4 from "../../assets/features/features4_icon.webp";
import Feature5 from "../../assets/features/features5.webp";
import Icon5 from "../../assets/features/features5_icon.webp";
import Feature6 from "../../assets/features/features6.webp";
import Icon6 from "../../assets/features/features6_icon.webp";
import Feature7 from "../../assets/features/features7.webp";
import Feature8 from "../../assets/features/features8.webp";

const FeaturesSection = () => {
  const swiperRef = useRef(null);

  const featuresData = [
    {
      title: "輕鬆掌握全家人保單",
      subtitle: "靈活切換個人家庭視角",
      img: Feature1,
      icon: Icon1,
      iconStyle: { width: "29%", bottom: "-6%", left: "11%" },
    },
    {
      title: "保單、保費隨時查看",
      subtitle: "即時掌握繳費資訊",
      img: Feature2,
      icon: Icon2,
      iconStyle: { width: "54%", bottom: "5%", left: "1%" },
    },
    {
      title: "保障資訊一目了然",
      subtitle: "讓保障內容更清晰透明",
      img: Feature3,
      icon: Icon3,
      iconStyle: { width: "23%", bottom: "-6%", left: "32%" },
    },
    {
      title: "保單借款隨借隨還",
      subtitle: "滿足多元財務需求",
      img: Feature4,
      icon: Icon4,
      iconStyle: { width: "32%", bottom: "15%", right: "7%" },
    },
    {
      title: "快速掌握保險資產",
      subtitle: "投資績效隨時追蹤",
      img: Feature5,
      icon: Icon5,
      iconStyle: { width: "54%", bottom: "-5%", left: "7%" },
    },
    {
      title: "健康習慣一起養成",
      subtitle: "讓健康有利於你",
      img: Feature6,
      icon: Icon6,
      iconStyle: { width: "23%", bottom: "-6%", right: "32%" },
    },
    {
      title: "共享小樹生活圈",
      subtitle: "質感享樂多一點",
      img: Feature7,
    },
    {
      title: "國泰人壽，榮耀見證",
      subtitle: "專業實力值得信賴",
      img: Feature8,
    },
  ];

  useEffect(() => {
    if (swiperRef.current) {
      const portfolioSwiper = new Swiper(swiperRef.current, {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true, // 確保中間對齊
        loop: true,
        speed: 800,
        slidesPerView: 2.2,

        coverflowEffect: {
          rotate: 0, // 不旋轉
          stretch: 390, // Slide 之間的拉伸
          depth: 400, // 滑塊的深度效果
          modifier: 0.5, // 效果倍率，這會強化大小差異
          slideShadows: false,
          scale: 1,
        },

        breakpoints: {
          360: {
            slidesPerView: 1.2, 
            coverflowEffect: {
              stretch: 420, 
              // depth: 200, 
              // scale: 1,
            },
          },
          768: {
            slidesPerView: 1.3, 
            coverflowEffect: {
              stretch: 515, 
              // scale: 1,
            },
          },
          1024: {
            slidesPerView: 2.8, 
            coverflowEffect: {
              stretch: 159, 
            },
          },
          1440: {
            slidesPerView: 2.2, 
          },
        },

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      return () => {
        if (portfolioSwiper) portfolioSwiper.destroy();
      };
    }
  }, []);

  return (
    <div className="features-section">
      <div className="container-share">
        {/* 確保容器寬度是 100% */}
        <div
          className="swiper features-swiper"
          ref={swiperRef}
          style={{ width: "100%" }}
        >
          <div className="swiper-wrapper features-wrapper">
            {/* 重要：不要 slice(0, 5)，讓 7 張都跑出來，Loop 才會正常 */}
            {featuresData.map((item, index) => (
              <div className="swiper-slide features-slider" key={index}>
                <h2 className="title-main-share">{item.title}</h2>
                <h3 className="title-medium-share">{item.subtitle}</h3>
                <div className="img">
                  <img className="mockup" src={item.img} alt={item.title} />
                </div>
                <div className="icon-wrap" style={item.iconStyle}>
                  <img src={item.icon} alt="" className="icon-img" />
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
