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
    // 1. 強制讓瀏覽器不要記住捲動位置
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. 頁面載入時確保回到頂端
    window.scrollTo(0, 0);
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