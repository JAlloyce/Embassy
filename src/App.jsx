import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
///import Explore from './components/Explore/Explore';
///import MagicalKenya from './components/MagicalKenya/MagicalKenya'

//import Embassy from './components/Embassy'; // Ensure these components exist
//import ConsularServices from './components/ConsularServices'; // Ensure these components exist
//import News from './components/News'; // Ensure these components exist

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/*
          
          <Route path="/" element={<Explore />} />
          <Route path="/" element={<MagicalKenya />} />
          */}

            <Route path="/" element={<HomePage />} />

          {/* 
          <Route path="/magical-kenya" element={<MagicalKenya />} />
          <Route path="/embassy" element={<Embassy />} />
          <Route path="/consular-services" element={<ConsularServices />} />
          <Route path="/news" element={<News />} /> 

          
          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;