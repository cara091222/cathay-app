import AppHeader from './components/AppHeader/AppHeader.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import FeaturesSection from './components/FeaturesSection/FeaturesSection.jsx';
import ProcedureSection from './components/ProcedureSection/ProcedureSection.jsx';
import EventsSection from './components/EventsSection/EventsSection.jsx';


function App() {
  

  return (
    <div className="App">
      <AppHeader />
      <HeroSection />
      <FeaturesSection/>
      <ProcedureSection />
      <EventsSection/>
    </div>
  )
}

export default App
