import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import PortfolioSection from './component/myPortfolio';
import Skills from './component/Skill';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <PortfolioSection />
      <Skills />
      <Footer />
      {/* <Services /> */}
    </div>
  );
}

export default App;
