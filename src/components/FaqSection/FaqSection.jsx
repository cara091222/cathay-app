import React, { useState, useRef, useEffect } from "react";
import "./FaqSection.scss";

const FaqSection = () => {
  const faqData = [
    {
      category: "會員資格與登入設定",
      items: [
        { q: "下載國泰人壽App須具有保戶身份嗎？", a: "國泰人壽App不需要保戶身分即可下載並註冊。" },
        { q: "我的會員資料有誤，如何進行變更？", a: "(1)手機、E-mail：目前開放具有網路服務資格者，可自行於線上修改，請登入國泰人壽App→更多→查看資訊→進行變更。\n(2)姓名、生日、國籍：請撥打客服專線由專人為您服務，或至服務據點由專人協助變更。" },
        { q: "如何使用快速登入？", a: "先使用帳號密碼登入國泰人壽App→點擊「更多」→「帳戶與App設定」→「快速登入設定」，即可設定生物辨識" },
      ],
    },
    {
      category: "保單服務與繳費資訊",
      items: [
        { q: "欲進行保單驗證，如何查找保單號碼？", a: "可以透過保單文件、繳費通知單、電子保單或Email通知查詢保單號碼，若仍找不到，也可請客服或您的業務員協助。" },
        { q: "如何查詢保單繳費資訊？", a: "登入國泰人壽App→保單總覽→點擊「查看保單」→點擊欲查詢的保單→繳費資訊，即可查看保單繳費資訊。" },
        { q: "如何查看投資型保單績效？", a: "登入國泰人壽App→保單總覽→點擊「資產總覽」區塊牌卡，即可查看投資型保單詳細資訊。" },
      ],
    },
    {
      category: "外溢保單與健康數據",
      items: [
        { q: "如何查看外溢保單達標資訊？", a: "登入國泰人壽App→保單總覽→點擊「查看保單」→點擊任一外溢保單牌卡→切換至「外溢回饋」，即可查看外溢折減回饋資訊。" },
        { q: "如何查詢健康任務或健康數據？", a: "健康相關資訊可至 <a href='https://wellness.cathaylife.com.tw/fitback/' target='_blank' class='faq-link'>「FitBack健康吧」專站</a>，或撥打客服專線由專人為您服務。" },
      ],
    },
  ];

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [openItemIndex, setOpenItemIndex] = useState(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, top: 0, width: 0, height: 0 });

  const tabsRef = useRef(null);
  const tabItemsRef = useRef([]);

  // 1. 檢查箭頭顯示 (手機橫向捲動用)
  const checkScroll = () => {
    const el = tabsRef.current;
    if (!el) return;
    setShowLeftArrow(el.scrollLeft > 10);
    setShowRightArrow(el.scrollWidth > el.clientWidth + el.scrollLeft + 10);
  };

  // 2. 更新白色滑塊位置
  const updateIndicator = () => {
    const activeTab = tabItemsRef.current[activeTabIndex];
    if (activeTab) {
      setIndicatorStyle({
        left: activeTab.offsetLeft,
        top: activeTab.offsetTop,
        width: activeTab.offsetWidth,
        height: activeTab.offsetHeight,
      });
    }
  };

  // 3. 處理點擊：同時觸發置中捲動與滑塊位移
  const handleTabClick = (index, e) => {
    setActiveTabIndex(index);
    setOpenItemIndex(null);

    const container = tabsRef.current;
    const target = e.currentTarget;

    if (container && target) {
      // 置中捲動邏輯 (僅在手機版/橫向捲動時有效)
      const scrollLeft = target.offsetLeft + (target.offsetWidth / 2) - (container.offsetWidth / 2);
      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    updateIndicator();
    checkScroll();
    window.addEventListener("resize", () => {
      updateIndicator();
      checkScroll();
    });
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeTabIndex]);

  const toggleItem = (index) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container-share">
        <div className="padding-share">
          <h2 className="title-main-share center">常見問題</h2>

          <div className="faq-section-container">
            <div className="faq-tabs-outer">
              <div className={`arrow-left ${showLeftArrow ? "is-visible" : ""}`}>
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none"><path d="M9 1L1 9L9 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className={`arrow-right ${showRightArrow ? "is-visible" : ""}`}>
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none"><path d="M1 1L9 9L1 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>

              <div className="faq-tabs-wrap" ref={tabsRef} onScroll={checkScroll}>
                {/* 這是滑動的白色底色塊 */}
                <div 
                  className="tab-active-bg" 
                  style={{
                    width: indicatorStyle.width,
                    height: indicatorStyle.height,
                    transform: `translate(${indicatorStyle.left}px, ${indicatorStyle.top}px)`
                  }}
                />

                {faqData.map((tab, index) => (
                  <h3
                    key={index}
                    ref={(el) => (tabItemsRef.current[index] = el)}
                    className={`faq-tab title-medium-share ${activeTabIndex === index ? "active" : ""}`}
                    onClick={(e) => handleTabClick(index, e)}
                  >
                    {tab.category}
                  </h3>
                ))}
              </div>
            </div>

            <div className="faq-content">
              {faqData[activeTabIndex].items.map((item, index) => (
                <div key={index} className={`faq-item ${openItemIndex === index ? "active" : ""}`}>
                  <div className="item-title" onClick={() => toggleItem(index)}>
                    <h4 className="title-small-share">{item.q}</h4>
                    <div className="arrow">
                      <svg width="11" height="7" viewBox="0 0 11 7" fill="none"><path d="M9.92773 1L5.46345 5.46429L0.999162 1" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                  <div className="item-content">
                    <p dangerouslySetInnerHTML={{ __html: item.a }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;