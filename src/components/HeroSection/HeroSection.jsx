import React from "react";
import "./HeroSection.scss";
// 圖片
import PhoneLeft from "../../assets/images/phone_left.webp";
import PhoneRight from "../../assets/images/phone_Right.webp";
import PhoneRightMobile from "../../assets/images/phone_right_mobile.webp";
import HeroCircle from "../../assets/images/circle1.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-container">
        <div className="phone-area">
          <div className="phone-left">
            <img src={PhoneLeft} alt="Phone Left" />
          </div>
          <div className="phone-right">
            <img src={PhoneRight} alt="Phone Right" className="phone-right-desk" />
            <img src={PhoneRightMobile} alt="Phone Right" className="phone-right-mobile" />
          </div>
          <div className="desc-wrap">
            <p className="descA">掌握全家人的保單</p>
            <p className="descB">保障資訊一目了然</p>
            <p className="descC">保單借款隨借隨還</p>
          </div>
        </div>
        <div className="content">
          <h1 className="title">國泰人壽App</h1>
          <h2 className="subtitle title-main-share">
            提供您簡單、聰明又安全的<br></br>數位保險體驗
          </h2>
          <a href="" className="btn">立即點擊下載</a>
        </div>
      </div>
      <video
        src="/assets/videos/wave_bg.mp4"
        autoPlay 
        muted // 鏡音播放
        playsInline // 防止在 iOS 上跳出全螢幕
        preload="auto"
        className="hero-video"
        disablePictureInPicture
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
