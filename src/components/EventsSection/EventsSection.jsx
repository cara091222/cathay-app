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
import Bg from "../../assets/images/Vector01.png";

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
      // autoplay: {
      //   delay: 3500,
      //   disableOnInteraction: false,
      //   pauseOnMouseEnter: true, 
      // },
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
            "本公司將於2026年3月31日前以國泰人壽會員email通知得獎者&寄出獎項。",
            "獲得獎項為【100點小樹點(生活)】兌換序號乙組。",
            "得獎者聯絡資料以本公司留存之最新資料為準，如本公司查無email、非正確格式、電子信箱遭退信或拒收，視同放棄得獎機會。",
            "如有疑問請洽本公司免付費客服專線：0800-036-599、手機請改撥付費電話：02-4128-010。",
          ],
        },
        {
          title: "注意事項：",
          list: [
            "本活動限自然人參加。",
            "獎項100點小樹點(生活)將以e-mail方式提供兌換序號網址提供，未於指定時間兌換完畢，造成序號網址失效，恕不另行補發參加者（未成年者包含其法定代理人，以下同）於參加本活動時，即表示同意本活動辦法，並充分知悉與同意以下事項：－本公司得因本活動之需要，依個人資料保護相關規定，於參加者同意之期間內，以電子檔或紙本形式於我國境內、外蒐集、處理、利用其個人資料。但本公司於未經參加者之同意下，不得利用參加者之個人資料進行商業行銷行為。參加者可自由選擇是否提供完整個人資訊，惟若資訊不完整者，將無法參加本活動。－參加者可電洽本公司之客服專線(市話請撥打免付費專線：0800-036-599，手機請改撥付費電話: (02)4128-010，針對其個人資料行使請求答覆查詢、提供閱覽、製給複製本、更正、補充、停止蒐集、處理、利用或刪除之權利，亦可至本公司官方網站 >法令政策＞客戶權益與保障 > 個人資料保護法應告知事項-相關活動與服務聯繫 ，進一步了解詳細資訊，俾維護自身權益。",
            "本活動如有任何因電腦、網路、電話、技術或其他不可歸責於本公司之事由，致參加者所寄出、填寫或登錄之資料有遺失、錯誤、無法辨識或毀損等情形，本公司不負任何法律責任。",
            "本公司有權檢視得獎情況是否有人為操作之行為，對於以偽造、詐欺或其他不正當之方式意圖兌領之參加者，本公司有權撤銷其得獎資格或拒絕其參與本活動。",
            "得獎者身分之認定係依本公司資料庫電子郵件所對應（或參加者所填寫、登錄）之身分證字號為主，得獎者須提供正確之身分證影本，並經本公司確認無誤後始得領獎。",
            "本活動實體獎項寄送地址僅限中華民國境內，如得獎者未能於領獎期限前回覆有效國內寄送地址，本公司得取消其得獎資格。",
            "得獎者逾期未領獎或因留存資料不完整或錯誤致無法通知得獎者，視同放棄得獎資格，不接受開立扣繳憑單者，亦同。",
            "本活動獎品不得要求轉換、轉讓或折換現金。",
            "依稅法規定，得獎者若為中華民國境內居住之個人，且年度所得獎項價值累積超過1,000元時，本公司將於次年將受領人姓名、住址、國民身分證統一編號及全年給付金額等，依規定格式，列單申報主管稽徵機關。如所得獎項價值達20,010元（含）時，得獎者須先繳交10%機會中獎稅金，始可領獎。得獎者若為非中華民國境內居住之個人（即在中華民國境內居住未達183天之本國人及外國人），不論得獎獎項價值，均須先就得獎所得扣繳20%機會中獎稅金，始可領獎。若未能依法繳納應繳稅額，即視為喪失得獎資格。本公司為配合財政部所得稅各式憑單免填發作業，不會主動寄送扣繳憑單給中獎者，但會於次年列入本年度之個人綜合所得稅申報。參加者因參加本活動而須支付之任何稅捐皆為參加者之義務，概與本公司無關。前述稅捐法規如有更新或變動者，依修正後之規定辦理。",
            "本公司非獎品製造者或提供者，與各項獎品或服務之製造或提供廠商無任何代理或合夥關係，且本活動獎品之保固期限均依廠商出廠時實際提供者為準。得獎者如因本活動各項獎品、服務或保固發生任何爭議，概與本公司無關。",
            "本公司保有取消、終止、修改或暫停本活動相關內容之權利，並得以公告方式通知參加者。如有未盡事宜，悉依本公司相關規定或解釋辦理。",
            "本公司非獎品製造者或提供者，與各項獎品或服務之製造或提供廠商無任何代理或合夥關係，且本活動獎品之保固期限均依廠商出廠時實際提供者為準。得獎者如因本活動各項獎品、服務或保固發生任何爭議，概與本公司無關。",
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
        { label: "活動時間", desc: "即日起至2026/3/3" },
        {
          label: "活動內容",
          desc: "符合指定活動條件即可參加抽獎，14,800組小樹點(生活)等你抽！",
        },
      ],
      contentItems: [
        {
          title: "線上保單借款利率活動：",
          list: [
            "【國泰人壽App保單借款舊戶抽】2,000組66點小樹點(生活)等你抽！\n活動條件：於活動期間內，使用國泰人壽App進行保單借款，不限金額、筆數，即可抽66點小樹點(生活)，共計2,000組！",
            "【國泰人壽App首借族】8,000組66點小樹點(生活)等你拿！\n活動條件：過去從未透過國泰人壽App進行保單借款，於本活動期間首次以國泰人壽App保單借款，不限金額、筆數，即可獲得66點小樹點(生活)，共計8,000組等你拿！",
            "【國泰人壽App保單借款初體驗】4,800組66點小樹點(生活)等你拿！\n活動條件：過去從未與國泰人壽保單借款(包含國泰人壽App、臨櫃及ATM)，於本活動期間首次保單借款且透過線上借款一次，不限金額、筆數，即可獲得66點小樹點(生活)，共計4,800組等你拿！",
          ],
        },
      ],
    },
  ];

  // 如果 settings 還沒加載完成，先回傳 null 或 loading
  if (!swiperSettings) return null;

  return (
    <div className="events-section" id="EventsSection">
      <div className="container-share">
        <div className="padding-bottom-share">
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
      <div className="bg">
        <img src={Bg} alt="" />
      </div>
    </div>
  );
};

export default EventsSection;
