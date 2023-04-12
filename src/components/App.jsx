import Header from './Header/Header';
import HighlightBar from './HighlightBar/HighlightBar';
import Welcome from './Welcome/Welcome';
import ContactSection from './ContactSection/ContactSection';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

import './App.scss';

function App() {

  return (
    <div className="App">
      <Header />
      <HighlightBar />
      <Welcome />
      <ContactSection />
      <Footer />
      <NavBar />
    </div>
  );
}

export default App;
