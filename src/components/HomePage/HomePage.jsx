import Hero from './Hero'
import ExploreKenya from "./ExploreKenya";
import News from "./News";
import Contact from "./Contact";
import Vision from './Vision';
//import Quicklinks from './Quicklinks';

const HomePage = () => {
  return (
    <div>
        <Hero />               
        <News />               
        <ExploreKenya />      
        <Vision /> 
        <Contact />   

        {/* 
        <Quicklinks />             
        */}
    </div>
  );
}

export default HomePage;