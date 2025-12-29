import React, { useState,} from 'react';
import './AppHeader.scss';
// 圖片
import logoImg from '../../assets/images/logo.svg'; 

const Header = () => {
  // 狀態：控制漢堡選單是否開啟
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 狀態：控制哪一個導覽項目是啟用的 (Active)
  const [activeLink, setActiveLink] = useState('#HomeAbout');

  // 處理點擊導覽連結
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setActiveLink(href); // 設定 Active 狀態
    setIsMenuOpen(false); // 點擊後自動關閉選單 (手機版)

    // 取得目標元素並平滑捲動 (取代 jQuery animate)
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // 處理漢堡選單切換
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="app-header">
      {/* 透過狀態決定 className */}
      <div className={`app-container ${isMenuOpen ? 'menu-show' : ''}`}>
        <div className="app-wrap">
          <div className="app-logo">
            <img src={logoImg} alt="Logo" />
          </div>

          <nav className="app-nav">
            <ul className="nav-wrap">
              {[
                { href: '#HomeAbout', label: '特色功能' },
                { href: '#HomeInfo', label: '操作流程' },
                { href: '#HomeSwiper', label: '活動專區' },
                { href: '#HomeFAQ', label: '常見問題' },
              ].map((item) => (
                <li key={item.href} className="main-item">
                  <a
                    className={`main-link ${activeLink === item.href ? 'active' : ''}`}
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
              className={`nav-hamburger ${isMenuOpen ? 'active' : ''}`}
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