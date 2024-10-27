import Hero from './Hero'
import ExploreKenya from "./ExploreKenya";
import News from "./News";
import Contact from "./Contact";
import Vision from './Vision';
import Diaspora from './Diaspora';
//import Quicklinks from './Quicklinks';

const HomePage = () => {
  return (
    <div>
        <Hero />               
        <News /> 
        <Diaspora />              
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