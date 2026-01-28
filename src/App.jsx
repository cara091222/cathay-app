import AppHeader from './components/AppHeader/AppHeader.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import FeaturesSection from './components/FeaturesSection/FeaturesSection.jsx';
import ProcedureSection from './components/ProcedureSection/ProcedureSection.jsx';
import EventsSection from './components/EventsSection/EventsSection.jsx';
import FaqSection from './components/FaqSection/FaqSection.jsx';
import NoticeSection from './components/NoticeSection/NoticeSection.jsx';
import FooterSection from './components/FooterSection/FooterSection.jsx';


function App() {
  

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
  )
}

export default App
