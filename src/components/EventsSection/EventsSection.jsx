import React, { useState, useEffect } from "react";
// 導入 Swiper React 組件與模組
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// 導入 Swiper 必要樣式
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./EventsSection.scss";
import Event1 from "../../assets/events/event-1.webp";
import Event2 from "../../assets/events/event-2.webp";

const EventsSection = () => {
  // 1. 將 Swiper 配置數值抽離
  const [swiperSettings, setSwiperSettings] = useState(null);

  // 2. 使用 useEffect 初始化或動態調整數值
  useEffect(() => {
    const config = {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true, 
      },
      pagination: {
        clickable: true,
      },
      navigation: false, 
      modules: [Autoplay, Pagination, Navigation],
    };

    setSwiperSettings(config);
  }, []);

  const eventsData = [
    {
      id: 1,
      image: Event1,
      link: "#",
      title: "【首次登入】10,000組100點小樹點(生活)等你抽！",
      infoItems: [
        { label: "活動時間", desc: "即日起至2/25止" },
        {
          label: "活動內容",
          desc: "於活動期間內，客戶首次成功登入國泰人壽App，即可抽100點小樹點(生活)兌換序號，共5,000組",
        },
      ],
      contentItems: [
        {
          title: "領獎作業與領獎期限：",
          list: [
            "本公司將於2025年12月31日前以國泰人壽會員email通知得獎者&寄出獎項。",
            "獲得獎項為【100 點小樹點(生活)】兌換序號乙組。",
            "獲得獎項為【100 點小樹點(生活)】兌換序號乙組。",
            "獲得獎項為【100 點小樹點(生活)】兌換序號乙組。",
            "獲得獎項為【100 點小樹點(生活)】兌換序號乙組。",
            "獲得獎項為【100 點小樹點(生活)】兌換序號乙組。",
            "獲得獎項為【100 點小樹點(生活)】兌換序號乙組。",
          ],
        },
      ],
    },
    {
      id: 2,
      image: Event2,
      link: "#",
      title: "【首次登入】10,000組100點小樹點(生活)等你抽！",
      infoItems: [
        { label: "活動時間", desc: "即日起至2/25止" },
        {
          label: "活動內容",
          desc: "於活動期間內，客戶首次成功登入國泰人壽App，即可抽100點小樹點(生活)兌換序號，共5,000組",
        },
      ],
      contentItems: [
        {
          title: "領獎作業與領獎期限：",
          list: [
            "本公司將於2025年12月31日前以國泰人壽會員email通知得獎者&寄出獎項。",
            "獲得獎項為【100 點小樹點(生活)】兌換序號乙組。",
            "獲得獎項為【100 點小樹點(生活)】兌換序號乙組。",
            "獲得獎項為【100 點小樹點(生活)】兌換序號乙組。",
            "獲得獎項為【100 點小樹點(生活)】兌換序號乙組。",
            "獲得獎項為【100 點小樹點(生活)】兌換序號乙組。",
            "獲得獎項為【100 點小樹點(生活)】兌換序號乙組。",
          ],
        },
        {
          title: "領獎作業與領獎期限：",
          list: [
            "本公司將於2025年12月31日前以國泰人壽會員email通知得獎者&寄出獎項。",
            "獲得獎項為【100 點小樹點(生活)】兌換序號乙組。",
            "獲得獎項為【100 點小樹點(生活)】兌換序號乙組。",
            "獲得獎項為【100 點小樹點(生活)】兌換序號乙組。",
            "獲得獎項為【100 點小樹點(生活)】兌換序號乙組。",
            "獲得獎項為【100 點小樹點(生活)】兌換序號乙組。",
            "獲得獎項為【100 點小樹點(生活)】兌換序號乙組。",
          ],
        },
      ],
    },
  ];

  // 如果 settings 還沒加載完成，先回傳 null 或 loading
  if (!swiperSettings) return null;

  return (
    <div className="events-section">
      <div className="container-share">
        <div className="padding-share">
          <h2 className="title-main-share center">活動專區</h2>
          <Swiper {...swiperSettings} className="events-swiper">
            {eventsData.map((event) => (
              <SwiperSlide key={event.id} className="events-slide">
                <a href={event.link} className="slide-link">
                  <div className="img-cover">
                    <img src={event.image} alt={event.title} />
                  </div>
                  <div className="content">
                    <h3 className="title-medium-share">{event.title}</h3>
                    <div className="info">
                      {event.infoItems.map((item, idx) => (
                        <div className="info-item" key={idx}>
                          <h4 className="info-title">{item.label}</h4>
                          <p className="info-desc">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="lists">
                      {event.contentItems.map((cItem, idx) => (
                        <div className="lists-item" key={idx}>
                          <p className="lists-title">{cItem.title}</p>
                          <ol className="lists-list">
                            {cItem.list.map((text, liIdx) => (
                              <li key={liIdx}>{text}</li>
                            ))}
                          </ol>
                        </div>
                      ))}
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
