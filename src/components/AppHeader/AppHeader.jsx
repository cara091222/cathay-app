import React, { useState } from "react";
import "./AppHeader.scss";
// 圖片
import logoImg from "../../assets/images/logo.svg";

const Header = () => {
  // 狀態：控制漢堡選單是否開啟
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 狀態：控制哪一個導覽項目是啟用的 (Active)
  const [activeLink, setActiveLink] = useState("");

  // 處理點擊導覽連結
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setActiveLink(href);
    setIsMenuOpen(false);

    const targetElement = document.querySelector(href);

    if (targetElement) {
      // 1. 先判斷目前的螢幕寬度
      const isMobile = window.innerWidth <= 600;

      // 2. 根據寬度決定對齊位置
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: isMobile ? "center" : "center",
      });
    }
  };

  // 處理漢堡選單切換
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="app-header">
      <div className={`app-container ${isMenuOpen ? "menu-show" : ""}`}>
        <div className="app-wrap">
          <div className="app-logo">
            <img src={logoImg} alt="Logo" />
          </div>

          <nav className="app-nav">
            <ul className="nav-wrap">
              {[
                { href: "#FeaturesSection", label: "特色功能" },
                { href: "#ProcedureSection", label: "操作流程" },
                { href: "#EventsSection", label: "活動專區" },
                { href: "#FaqSection", label: "常見問題" },
              ].map((item) => (
                <li key={item.href} className="main-item">
                  <a
                    className={`main-link ${activeLink === item.href ? "active" : ""}`}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* 漢堡選單 */}
            <div
              className={`nav-hamburger ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
