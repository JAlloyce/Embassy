import Hero from './Hero'
import ExploreKenya from "./ExploreKenya";
import News from "./News";
import Contact from "./Contact";
import Vision from './Vision';

const HomePage = () => {
  return (
    <div>
        <Hero />               
        <News />               
        <ExploreKenya />      
        <Vision />              
        <Contact />            
    </div>
  );
}

export default HomePage;