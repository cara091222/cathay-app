import React, { useEffect, useRef } from "react";
import "./HeroSection.scss";
import Marquee from '../Marquee/Marquee.jsx';

// 圖片導入
import PhoneLeft from "../../assets/images/phone_left.webp";
import PhoneRight from "../../assets/images/phone_right.webp";
import PhoneRightMobile from "../../assets/images/phone_right_mobile.webp";
import HeroCircle from "../../assets/images/circle1.png";

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // --- 影片播放邏輯 ---
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true; // 確保在 iOS 不會跳出播放器

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("自動播放被攔截:", error);
        });
      }
    }
  }, []);
  return (
    <div className="hero-section">
      <Marquee />
      <div className="hero-section-container">
        <div className="phone-area">
          <div className="phone-left">
            <img src={PhoneLeft} alt="Phone Left" />
          </div>
          <a
            href="https://www.cathaylife.com.tw/cathaylife/services/CathayLife-APP"
            className="phone-right"
          >
            <img
              src={PhoneRight}
              alt="Phone Right"
              className="phone-right-desk"
            />
            <img
              src={PhoneRightMobile}
              alt="Phone Right"
              className="phone-right-mobile"
            />
          </a>
          <div className="desc-wrap">
            <p className="descA">掌握全家人的保單</p>
            <p className="descB">保障資訊一目瞭然</p>
            <p className="descC">保單借款隨借隨還</p>
          </div>
        </div>
        <div className="content">
          <h1 className="title">國泰人壽App</h1>
          <h2 className="subtitle title-main-share">
            提供您簡單、聰明又安全的
            <br />
            數位保險體驗
          </h2>
          <a
            href="https://www.cathaylife.com.tw/cathaylife/services/CathayLife-APP"
            className="btn"
          >
            立即點擊下載
          </a>
        </div>
      </div>

      {/* 背景影片 */}
      <video
        ref={videoRef}
        src="/assets/videos/wave_bg.mp4"
        autoPlay
        playsInline 
        preload="auto"
        className="hero-video"
        disablePictureInPicture
        style={{ pointerEvents: 'none' }}
      />

      <div className="hero-circle">
        <img src={HeroCircle} alt="Decorative Circle" />
      </div>
      <div className="scroll-down">
        <span>scroll</span>
        <div className="line-wrap"></div>
      </div>
    </div>
  );
};

export default HeroSection;
