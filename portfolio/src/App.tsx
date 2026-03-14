import HeroSection from './components/HeroSection';
import DemoOne from './components/demo';
import CustomCursor from './components/CustomCursor';
import FeaturedProjects from './components/FeaturedProjects';
import Qualifications from './components/Qualifications';
import Experiences from './components/Experiences';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <CustomCursor />
      <Navbar />
      <section id="home"><HeroSection /></section>
      <section id="projects"><FeaturedProjects /></section>
      <DemoOne />
      <section id="qualification"><Qualifications /></section>
      <section id="experience"><Experiences /></section>
      <section id="review"><Testimonials /></section>
      <section id="contact"><Footer /></section>
    </div>
  );
}

export default App;
