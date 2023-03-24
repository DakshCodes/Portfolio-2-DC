import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Component/Nav';
import { Banner } from './Component/Banner';
import { Skills } from './Component/Skills';
import { Projects } from './Component/Projects';
import { Footer } from './Component/Footer';
import { Contact } from './Component/Contact';

import '../src/styles/navbar.css';
import '../src/styles/banner.css';
import '../src/styles/Contact.css';
import '../src/styles/footer.css';
import '../src/styles/projects.css';
import '../src/styles/skills.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;