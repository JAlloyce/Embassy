import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
import HomePage from './components/HomePage/HomePage';
import News from './components/News/News'; 
import Embassy from './components/Embassy/Embassy'; 

// Import the images object
import images from './assets/images';

// Consular
import ConsularList from './components/Consular/ConsularList';
import Visa from './components/Consular/Visa';
import Passports from './components/Consular/Passports';
import GoodConduct from './components/Consular/GoodConduct';
import Marriage from './components/Consular/Marriage';
import Pets from './components/Consular/Pets';
import Birth from './components/Consular/Birth';
import DocAuth from './components/Consular/DocAuth';
import DocLeg from './components/Consular/DocLeg';
import Downloads from './components/Consular/Downloads';

// Explore
import Agriculture from './components/Explore/Agriculture'
import Culture from './components/Explore/Culture'
import Nairobi from './components/Explore/Nairobi'
import Education from './components/Explore/Education'
import ForeignAffairs from './components/Explore/ForeignAffairs'
import Sports from './components/Explore/Sports'
import Tourism from './components/Explore/Tourism'
import Trade from './components/Explore/Trade'

// MagicalKenya
import MagicList from './components/MagicalKenya/MagicList';
import Intro from './components/MagicalKenya/Intro';
import NairobiKenya from './components/MagicalKenya/NairobiKenya';
import CoastKenya from './components/MagicalKenya/CoastKenya';
import CentralKenya from './components/MagicalKenya/CentralRiftKenya';
import MountKenya from './components/MagicalKenya/MountKenya';
import NorthernKenya from './components/MagicalKenya/NorthernKenya';
import NorthRiftKenya from './components/MagicalKenya/NorthRiftKenya';
import SouthernKenya from './components/MagicalKenya/SouthernKenya';
import WesternKenya from './components/MagicalKenya/WesternKenya';
import ThingsToDo from './components/MagicalKenya/ThingsToDo'
import GettingAround from './components/MagicalKenya/GettingAround';

function App() {
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div>
          {/* Set the favicon using the imported logo */}
          <link rel="icon" type="image/png" href={images.Logo} />
          
          {/* Language Switcher */}
          <div className="fixed top-4 right-4 z-50">
            <LanguageSwitcher />
          </div>

          <Routes>
            <Route path="/" element={<HomePage />} />

            {/*Consular Services*/}
            <Route path="/consular" element={<ConsularList />} />
            <Route path="/consular/visa" element={<Visa />} />
            <Route path="/consular/passports" element={<Passports />} />
            <Route path="/consular/good-conduct" element={<GoodConduct />} />
            <Route path="/consular/marriage" element={<Marriage />} />
            <Route path="/consular/pets" element={<Pets />} />
            <Route path="/consular/birth" element={<Birth />} />
            <Route path="/consular/doc-auth" element={<DocAuth />} />
            <Route path="/consular/doc-leg" element={<DocLeg />} />
            <Route path="/consular/downloads" element={<Downloads />} />

            {/*Explore*/}
            <Route path="/explore/agriculture" element={<Agriculture />} />
            <Route path="/explore/culture" element={<Culture />} />
            <Route path="/explore/nairobi" element={<Nairobi />} />
            <Route path="/explore/education" element={<Education />} />
            <Route path="/explore/foreign-affairs" element={<ForeignAffairs />} />
            <Route path="/explore/sports" element={<Sports />} />
            <Route path="/explore/tourism" element={<Tourism />} />
            <Route path="/explore/trade" element={<Trade />} />

            {/*Magical Kenya*/}
            <Route path="/magical-kenya" element={<MagicList />} />
            <Route path="/magical-kenya/getting-around" element={<GettingAround />} />
            <Route path="/magical-kenya/intro" element={<Intro />} />
            <Route path="/magical-kenya/nairobi" element={<NairobiKenya />} />
            <Route path="/magical-kenya/coast" element={<CoastKenya />} />
            <Route path="/magical-kenya/central-rift" element={<CentralKenya />} />
            <Route path="/magical-kenya/mount-kenya" element={<MountKenya />} />
            <Route path="/magical-kenya/northern-kenya" element={<NorthernKenya />} />
            <Route path="/magical-kenya/north-rift" element={<NorthRiftKenya />} />
            <Route path="/magical-kenya/southern-kenya" element={<SouthernKenya />} />
            <Route path="/magical-kenya/western-kenya" element={<WesternKenya />} />
            <Route path="/magical-kenya/things-to-do" element={<ThingsToDo />} />
            
            {/*Other*/}
            <Route path="/news" element={<News />} />
            <Route path="/embassy" element={<Embassy />} />

            {/* Catch-all route to redirect to homepage */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;