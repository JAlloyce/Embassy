import Hero from './Hero';
import ExploreKenya from "./ExploreKenya";
import News from "./News";
import Contact from "./Contact";
import Vision from './Vision';
import Diaspora from './Diaspora';
import Quicklinks from './Quicklinks'; 
import Notices from './Notices'

const HomePage = () => {
  return (
    <div>
        <Hero />               
        <News /> 
        <Notices />
        <Diaspora />              
        <ExploreKenya />      
        <Vision /> 
        <Contact />   
        <Quicklinks /> {/* Include the Quicklinks component */}
    </div>
  );
}

export default HomePage;