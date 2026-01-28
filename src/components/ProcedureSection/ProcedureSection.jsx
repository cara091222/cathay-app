import React, { useState, useEffect, useRef } from "react";
import "./ProcedureSection.scss";
import ProcedureBg from "../../assets/features/features_bg.svg";
import ProcedureCircle from "../../assets/images/circle3.png";

// 註冊流程
import DefaultImg from "../../assets/procedure/QRcode.webp";
import Register1 from "../../assets/procedure/register1.webp";
import Register2 from "../../assets/procedure/register2.webp";
import Register3 from "../../assets/procedure/register3.webp";
import Register3_2 from "../../assets/procedure/register4.webp";
import Register4 from "../../assets/procedure/register5.webp";
import Register5 from "../../assets/procedure/register6.webp";
import Register6 from "../../assets/procedure/register7.webp";

function ProcedureSection() {
  const [activeStep, setActiveStep] = useState(null);
  const [activeDetail, setActiveDetail] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1360);

  // --- 手機版增加滑動效果 ---
  const mobileDetailTabsRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const mobileNavTabsRef = useRef(null);
  const [navIndicatorStyle, setNavIndicatorStyle] = useState({
    left: 0,
    width: 0,
  });

  // 手機版在組件內新增一個狀態，記錄目前這組圖片載入成功的數量
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 1366) {
      setActiveStep(0);
      setActiveDetail(0);
    }

    const handleResize = () => {
      const desktop = window.innerWidth >= 1360;
      setIsDesktop(desktop);
      // 桌機 → 手機 時才補預設
      if (!desktop && activeStep === null) {
        setActiveStep(0);
        setActiveDetail(0);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // 只初始化，避免每次點擊觸發

  // --- 增加：當 activeDetail 改變時計算底線位置 ---
  useEffect(() => {
    if (!isDesktop && mobileDetailTabsRef.current) {
      const activeTab = mobileDetailTabsRef.current.querySelector(
        ".procedure-detail-tab.active"
      );
      if (activeTab) {
        setIndicatorStyle({
          left: activeTab.offsetLeft,
          width: activeTab.offsetWidth,
        });
        activeTab.scrollIntoView({
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeDetail, activeStep, isDesktop]);

  //  手機版主選單滑度效果
  useEffect(() => {
    if (!isDesktop && mobileNavTabsRef.current) {
      const activeTab = mobileNavTabsRef.current.querySelector(
        ".procedure-tab-item.active"
      );
      if (activeTab) {
        // 計算位置供滑塊使用
        setNavIndicatorStyle({
          left: activeTab.offsetLeft,
          width: activeTab.offsetWidth,
        });

        // 自動捲動
        activeTab.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeStep, isDesktop]);

  // 手機版主選單箭頭設定
  const handleArrowClick = (direction) => {
    const totalSteps = INSTRUCTIONS.length;

    if (direction === "next") {
      // 往右點：如果不是最後一個，就跳下一個；如果是最後一個，可以選擇循環或不動
      if (activeStep < totalSteps - 1) {
        toggleStep(activeStep + 1);
      }
    } else if (direction === "prev") {
      // 往左點：如果不是第一個，就跳上一個
      if (activeStep > 0) {
        toggleStep(activeStep - 1);
      }
    }
  };

  // 內容
  const INSTRUCTIONS = [
    {
      title: "註冊流程",
      text: "輕鬆完成註冊，開啟專屬您的國泰人壽數位服務體驗",
      details: [
        {
          unmber: "1",
          zh: "步驟ㄧ、",
          title: "點選馬上註冊",
          images: [Register1],
        },
        { unmber: "2", zh: "步驟二、", title: "閱讀聲明", images: [Register2] },
        {
          unmber: "3",
          zh: "步驟三、",
          title: "填寫基本資料",
          images: [Register3, Register3_2],
        },
        {
          unmber: "4",
          zh: "步驟四、",
          title: "輸入OTP驗證",
          images: [Register4],
        },
        { unmber: "5", zh: "步驟五、", title: "設定密碼", images: [Register5] },
        { unmber: "6", zh: "步驟六、", title: "閱讀聲明", images: [Register6] },
      ],
    },
    {
      title: "臉部辨識登入",
      text: "透過設定Face ID，自動完成身分驗證",
      details: [
        {
          unmber: "1",
          zh: "步驟ㄧ、",
          title: "點選快速登入",
          images: [Register1],
        },
        {
          unmber: "2",
          zh: "步驟二、",
          title: "使用密碼登入",
          images: [Register2],
        },
        {
          unmber: "3",
          zh: "步驟三、",
          title: "選擇Face ID登入",
          images: [Register3, Register3_2],
        },
        { unmber: "4", zh: "步驟四、", title: "閱讀聲明", images: [Register4] },
        { unmber: "5", zh: "步驟五、", title: "臉部掃描", images: [Register5] },
        { unmber: "6", zh: "步驟六、", title: "設定成功", images: [Register6] },
        { unmber: "7", zh: "步驟七、", title: "設定成功", images: [Register6] },
      ],
    },
    {
      title: "手勢圖形登入",
      text: "以手勢預設圖形，快速完成身分確認",
      details: [
        {
          unmber: "1",
          zh: "步驟ㄧ、",
          title: "點選馬上註冊",
          images: [Register1],
        },
        { unmber: "2", zh: "步驟二、", title: "閱讀聲明", images: [Register2] },
        {
          unmber: "3",
          zh: "步驟三、",
          title: "填寫基本資料",
          images: [Register3, Register3_2],
        },
        {
          unmber: "4",
          zh: "步驟四、",
          title: "輸入OTP驗證",
          images: [Register4],
        },
        { unmber: "5", zh: "步驟五、", title: "設定密碼", images: [Register5] },
        { unmber: "6", zh: "步驟六、", title: "閱讀聲明", images: [Register6] },
      ],
    },
    {
      title: "忘記密碼",
      text: "透過簡易驗證安全重設登入密碼，保障帳戶安全",
      details: [
        {
          unmber: "1",
          zh: "步驟ㄧ、",
          title: "點選馬上註冊",
          images: [Register1],
        },
        { unmber: "2", zh: "步驟二、", title: "閱讀聲明", images: [Register2] },
        {
          unmber: "3",
          zh: "步驟三、",
          title: "填寫基本資料",
          images: [Register3, Register3_2],
        },
        {
          unmber: "4",
          zh: "步驟四、",
          title: "輸入OTP驗證",
          images: [Register4],
        },
        { unmber: "5", zh: "步驟五、", title: "設定密碼", images: [Register5] },
        { unmber: "6", zh: "步驟六、", title: "閱讀聲明", images: [Register6] },
      ],
    },
    {
      title: "小樹點綁定",
      text: "加入小樹會員，一起進入小樹生活圈",
      details: [
        {
          unmber: "1",
          zh: "步驟ㄧ、",
          title: "點選馬上註冊",
          images: [Register1],
        },
        { unmber: "2", zh: "步驟二、", title: "閱讀聲明", images: [Register2] },
        {
          unmber: "3",
          zh: "步驟三、",
          title: "填寫基本資料",
          images: [Register3, Register3_2],
        },
        {
          unmber: "4",
          zh: "步驟四、",
          title: "輸入OTP驗證",
          images: [Register4],
        },
        { unmber: "5", zh: "步驟五、", title: "設定密碼", images: [Register5] },
        { unmber: "6", zh: "步驟六、", title: "閱讀聲明", images: [Register6] },
      ],
    },
  ];

  const toggleStep = (index) => {
    setActiveStep(index);

    if (!isDesktop) {
      setActiveDetail(0); // ← A 策略：每次回到第一個步驟
    } else {
      setActiveDetail(null);
    }
  };

  const handleBack = () => {
    setActiveStep(null);
    setActiveDetail(null);
  };

  return (
    <div className="procedure-section" id="ProcedureSection">
      <div className="procedure-section-container">
        <h2 className="title-main-share">操作流程說明</h2>
        {/* 桌機版 */}
        <div className="procedure-layout desktop-model">
          {/* ---------------- 左側區域 ---------------- */}
          <div className="procedure-left">
            {INSTRUCTIONS.map((step, stepIndex) => {
              // 只有桌機模式才隱藏其他 tab
              if (
                isDesktop &&
                activeStep !== null &&
                activeStep !== stepIndex
              ) {
                return null;
              }

              return (
                <div key={stepIndex} className="procedure-step">
                  {/* 第一層 TAB */}
                  <button
                    className={
                      "procedure-step-header" +
                      (activeStep === stepIndex ? " active" : "")
                    }
                    onClick={() => toggleStep(stepIndex)}
                    disabled={isDesktop && activeStep === stepIndex}
                  >
                    <div className="title-arrow">
                      <h3 className="title-medium-share">{step.title}</h3>
                      {activeStep === null && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                        >
                          <circle
                            cx="15"
                            cy="15"
                            r="14.5"
                            transform="matrix(-1 0 0 1 30 0)"
                            stroke="#1F1F1F"
                          />
                          <path
                            d="M13.3931 10.7137L17.8574 15.178L13.3931 19.6423"
                            stroke="#1F1F1F"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <p className="title-small-share">{step.text}</p>
                  </button>
                  {/* 展開內容 */}
                  {(isDesktop
                    ? activeStep === stepIndex
                    : stepIndex === activeStep || activeStep === null) && (
                    <div className="procedure-step-body">
                      <div className="procedure-detail-tabs">
                        {step.details.map((detail, detailIndex) => (
                          <button
                            key={detailIndex}
                            className={
                              "procedure-detail-tab" +
                              (activeDetail === detailIndex ? " active" : "")
                            }
                            onClick={() => setActiveDetail(detailIndex)}
                          >
                            <div className="title-wrap">
                              <span className="unit-zh">{detail.zh}</span>
                              {detail.title}
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="8"
                              height="12"
                              viewBox="0 0 8 12"
                              fill="none"
                            >
                              <path
                                d="M1.00023 1.0006L6.109 5.88942L1.22019 10.9982"
                                stroke="#5C5C5C"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </button>
                        ))}
                      </div>

                      {activeStep !== null && (
                        <button className="back-button" onClick={handleBack}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                          >
                            <circle
                              cx="15"
                              cy="15"
                              r="14.5"
                              transform="matrix(-1 0 0 1 30 0)"
                              stroke="#1F1F1F"
                            />
                            <path
                              d="M17.7679 19.2324L13.3036 14.7681L17.7679 10.3039"
                              stroke="#1F1F1F"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          返回
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {/* ---------------- 右側圖片區 ---------------- */}
          <div className="procedure-right">
            <div className="image-container">
              {activeStep !== null && activeDetail !== null ? (
                INSTRUCTIONS[activeStep].details[activeDetail].images
                  .slice(0, 2)
                  .map((img, index, arr) => (
                    <img
                      key={img + index}
                      src={img}
                      alt={`流程圖片 ${index + 1}`}
                      className="fade-in"
                      style={{
                        width: arr.length === 1 ? "100%" : "50%",
                      }}
                    />
                  ))
              ) : (
                <img
                  src={DefaultImg}
                  alt="預設流程圖"
                  className="fade-in"
                  style={{ width: "100%" }}
                />
              )}
            </div>
          </div>
        </div>
        {/* 手機版 */}
        <div className="procedure-layout mobile-model">
          {/* ---------------- 1. 第一層 TAB 導覽列 ---------------- */}
          <div className="nav-container-wrapper">
            {/* 左箭頭：連動到前一個 Tab */}
            <div
              className={`arrow-left ${activeStep === 0 ? "is-hidden" : ""}`}
              onClick={() => activeStep > 0 && handleArrowClick("prev")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
              >
                <path
                  d="M9 1L1 9L9 17"
                  stroke="#1F1F1F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="procedure-tabs-nav" ref={mobileNavTabsRef}>
              {/* 綠色滑動底色塊 */}
              <div
                className="active-bg-slider"
                style={{
                  transform: `translateX(${navIndicatorStyle.left}px)`,
                  width: `${navIndicatorStyle.width}px`,
                }}
              />
              {INSTRUCTIONS.map((step, stepIndex) => (
                <button
                  key={`tab-${stepIndex}`}
                  className={`procedure-tab-item ${
                    activeStep === stepIndex ? "active" : ""
                  }`}
                  onClick={() => toggleStep(stepIndex)}
                >
                  <div className="title-arrow">
                    <h3 className="title-medium-share">{step.title}</h3>
                  </div>
                </button>
              ))}
            </div>
            {/* 右箭頭：連動到下一個 Tab */}
            <div
              className={`arrow-right ${
                activeStep === INSTRUCTIONS.length - 1 ? "is-hidden" : ""
              }`}
              onClick={() =>
                activeStep < INSTRUCTIONS.length - 1 && handleArrowClick("next")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
              >
                <path
                  d="M1 1L9 9L1 17"
                  stroke="#1F1F1F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* ---------------- 2. 內容展示區 (Body) ---------------- */}
          {activeStep !== null && (
            <div className="procedure-content-body">
              {/* 這裡抓取目前選中的資料數據 */}
              <p className="step-description-full">
                {INSTRUCTIONS[activeStep].text}
              </p>
              <div className="body-main-layout">
                {/* 第二層次級 Tab */}
                <div
                  className="procedure-detail-tabs"
                  ref={mobileDetailTabsRef}
                >
                  {INSTRUCTIONS[activeStep].details.map(
                    (detail, detailIndex) => (
                      <button
                        key={detailIndex}
                        className={`procedure-detail-tab ${
                          activeDetail === detailIndex ? "active" : ""
                        }`}
                        onClick={() => setActiveDetail(detailIndex)}
                      >
                        <div className="title-wrap">
                          <span className="unit-number">{detail.unmber}</span>
                          {detail.title}
                        </div>
                      </button>
                    )
                  )}
                  {/* --- 滑動底線本體 --- */}
                  <div
                    className="tab-indicator"
                    style={{
                      transform: `translateX(${indicatorStyle.left}px)`,
                      width: `${indicatorStyle.width}px`,
                    }}
                  />
                </div>
                <div className="scrollbar-line"></div>
                {/* 圖片區塊 */}
                <div className="procedure-right">
                  <div className="image-container">
                    {activeDetail !== null ? (
                      <>
                        {INSTRUCTIONS[activeStep].details[
                          activeDetail
                        ].images.map((img, idx, arr) => (
                          <img
                            key={`${activeStep}-${activeDetail}-${idx}`} // 加入 key 確保切換時重刷 DOM
                            src={img}
                            alt="step"
                            // 當圖片載入完成，計數器 +1
                            onLoad={() => setLoadedCount((prev) => prev + 1)}
                            // 核心邏輯：只有當 loadedCount 等於該組圖片總數時，才套用顯示類名
                            className={`fade-in ${
                              loadedCount >= arr.length
                                ? "is-visible"
                                : "is-hidden"
                            }`}
                          />
                        ))}
                      </>
                    ) : (
                      <img src={DefaultImg} alt="default" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="procedure-bg">
        <img src={ProcedureBg} alt="" />
      </div>
      <div className="procedure-circle">
        <img src={ProcedureCircle} alt="" />
      </div>
    </div>
  );
}

export default ProcedureSection;
