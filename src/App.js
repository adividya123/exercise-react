import './stylesheet/style.css'
// import component
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import About from './components/aboutme';
import Worked from'./components/worked';
import Porto from './components/porto';

function App() {
  return (
    <>
    {/* Section 1. Navbar */}
    <Navbar />
    {/* Section 2. Jumbotron*/}
    <Jumbotron />
    {/* Section 3.About me */}
    <About />
    {/* Section 4. Worked */}
    <Worked />
    {/* Section 5. Porto */}
    <Porto />
    </>
  );
}

export default App;
