import CentralRiftKenya from "./CentralRiftKenya"
import Intro from "./Intro"
import Magic from "./Magic"
import NairobiKenya from './NairobiKenya'
import CoastKenya from './CoastKenya'
import MountKenya from './MountKenya'
import NorthernKenya from './NorthernKenya'
import NorthRiftKenya from './NorthRiftKenya'
import SouthernKenya from './SouthernKenya'
import WesternKenya from './WesternKenya'
import ThingsToDo from './ThingsToDo'
import TourismStats from './TourismStats'
import Outro from './Outro'


const MagicalKenya = () => {
  return (
    <div>
      <Magic/>
      <Intro/>
      <NairobiKenya />
      <CoastKenya />
      <CentralRiftKenya />
      <MountKenya />
      <NorthernKenya />
      <NorthRiftKenya />
      <SouthernKenya />
      <WesternKenya />
      <ThingsToDo />
      <TourismStats />
      <Outro />
    </div>
  )
}

export default MagicalKenya