import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

// 導入樣式 
import "swiper/css";
import "swiper/css/pagination";
import "./FeaturesSection.scss";

// 圖片導入
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
import FeatureBg from "../../assets/features/features_bg.svg";
import FeatureCircle from "../../assets/images/circle2.png";

const FeaturesSection = () => {
  const swiperRef = useRef(null);

  const featuresData = [
    {
      title: "輕鬆掌握全家人保單",
      subtitle: "靈活切換個人家庭視角",
      img: Feature1,
      icon: Icon1,
      iconStyle: { width: "48%", bottom: "-6%", left: "-13%" },
    },
    {
      title: "保單、保費隨時查看",
      subtitle: "即時掌握繳費資訊",
      img: Feature2,
      icon: Icon2,
      iconStyle: { width: "90%", bottom: "11%", left: "-27%" },
    },
    {
      title: "保障資訊一目瞭然",
      subtitle: "讓保障內容更清晰透明",
      img: Feature3,
      icon: Icon3,
      iconStyle: { width: "40%", bottom: "-6%", left: "18%" },
    },
    {
      title: "保單借款隨借隨還",
      subtitle: "滿足多元財務需求",
      img: Feature4,
      icon: Icon4,
      iconStyle: { width: "53%", bottom: "17%", right: "-18%" },
    },
    {
      title: "快速掌握保險資產",
      subtitle: "投資績效隨時追蹤",
      img: Feature5,
      icon: Icon5,
      iconStyle: { width: "85%", bottom: "-5%", left: "-24%" },
    },
    {
      title: "健康習慣一起養成",
      subtitle: "讓健康有利於你",
      img: Feature6,
      icon: Icon6,
      iconStyle: { width: "40%", bottom: "-6%", right: "17%" },
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
        modules: [Pagination, Autoplay],
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        speed: 800,
        grabCursor: true,
        watchSlidesProgress: true,

        autoplay: {
          delay: 2500,
          disableOnInteraction: false, // 用戶操作後不停止自動播放
          pauseOnMouseEnter: true, // 滑鼠移入時暫停
        },

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        on: {
          progress: function (swiper) {
            // 1. 改用 window.innerWidth 確保偵測的是螢幕寬度
            const w = window.innerWidth;
            // 2. 將參數判斷移出迴圈，增加效能
            let trans, scaleM, threshold;

            if (w >= 1500) {
              // 超大螢幕
              trans = 53;
              scaleM = 0.13;
              threshold = 2.5;
            } else if (w >= 1400) {
              // 中大螢幕
              trans = 60;
              scaleM = 0.13;
              threshold = 2.5;
            } else if (w >= 1200) {
              // 中大螢幕
              trans = 65;
              scaleM = 0.13;
              threshold = 2.5;
            } else if (w >= 992) {
              // 一般桌機
              trans = 53;
              scaleM = 0.13;
              threshold = 2.5;
            } else if (w >= 768) {
              // 平板
              trans = 60;
              scaleM = 0.15;
              threshold = 2.5;
            } else if (w >= 414) {
              // 大手機
              trans = 60;
              scaleM = 0.18;
              threshold = 1.5;
            } else {
              // 小型手機
              trans = 68;
              scaleM = 0.22;
              threshold = 1.5;
            }

            // 3. 執行投影片變形
            for (let i = 0; i < swiper.slides.length; i++) {
              const slide = swiper.slides[i];
              const progress = slide.progress;
              const absProgress = Math.abs(progress);

              const scale = 1 - absProgress * scaleM;
              const translateX = progress * trans;
              const zIndex = 10 - Math.floor(absProgress);
              const opacity = absProgress > threshold ? 0 : 1;

              slide.style.opacity = opacity.toString();
              slide.style.zIndex = zIndex.toString();
              slide.style.transform = `translate3d(${translateX}%, 0, 0) scale(${scale})`;
            }
          },
          setTransition: function (swiper, speed) {
            for (let i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transitionDuration = `${speed}ms`;
            }
          },
        },
      });

      return () => {
        if (portfolioSwiper) portfolioSwiper.destroy();
      };
    }
  }, []);

  return (
    <div className="features-section" id="FeaturesSection">
      <div className="container-share">
        <div className="swiper features-swiper" ref={swiperRef}>
          <div className="swiper-wrapper features-wrapper">
            {featuresData.map((item, index) => (
              <div className="swiper-slide features-slider" key={index}>
                <h2 className="title-main-share">{item.title}</h2>
                <h3 className="title-medium-share">{item.subtitle}</h3>
                <div className="img-box">
                  <img className="mockup" src={item.img} alt={item.title} />
                  {item.icon && (
                    <div className="icon-wrap" style={item.iconStyle}>
                      <img src={item.icon} alt="" className="icon-img" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* 分頁器 */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
      <div className="features-bg">
        <img src={FeatureBg} alt="" />
      </div>
      <div className="feature-circle">
        <img src={FeatureCircle} alt="Decorative Circle" />
      </div>
    </div>
  );
};

export default FeaturesSection;
