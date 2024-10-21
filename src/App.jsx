import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <body>
        <Home />
        <About />
        <Projects />
        <Contact />
      </body>
    </div>
  );
}

export default App;
