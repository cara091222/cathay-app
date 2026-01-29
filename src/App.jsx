import React, { useEffect } from 'react'; // 記得引入 useEffect
import AppHeader from './components/AppHeader/AppHeader.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import FeaturesSection from './components/FeaturesSection/FeaturesSection.jsx';
import ProcedureSection from './components/ProcedureSection/ProcedureSection.jsx';
import EventsSection from './components/EventsSection/EventsSection.jsx';
import FaqSection from './components/FaqSection/FaqSection.jsx';
import NoticeSection from './components/NoticeSection/NoticeSection.jsx';
import FooterSection from './components/FooterSection/FooterSection.jsx';

function App() {
  useEffect(() => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  // 暴力置頂：多執行幾次以應付圖片加載導致的高度變化
  const forceScrollTop = () => {
    window.scrollTo(0, 0);
  };

  forceScrollTop(); // 載入瞬間執行
  
  // 分別在 50ms, 100ms, 300ms 處強行拉回頂部
  [50, 100, 300, 500].forEach(delay => {
    setTimeout(forceScrollTop, delay);
  });
}, []);

  return (
    <div className="App">
      <AppHeader />
      <HeroSection />
      <FeaturesSection />
      <ProcedureSection />
      <EventsSection />
      <FaqSection />
      <NoticeSection />
      <FooterSection />
    </div>
  );
}

export default App;