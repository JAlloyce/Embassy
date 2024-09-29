import CentralRiftKenya from "./CentralRiftKenya"
import Intro from "./Intro"
import MagicList from "./MagicList"
import NairobiKenya from './NairobiKenya'
import CoastKenya from './CoastKenya'
import MountKenya from './MountKenya'
import NorthernKenya from './NorthernKenya'
import NorthRiftKenya from './NorthRiftKenya'
import SouthernKenya from './SouthernKenya'
import WesternKenya from './WesternKenya'
import ThingsToDo from './ThingsToDo'


const MagicalKenya = () => {
  return (
    <div>
      <MagicList/>
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
    </div>
  )
}

export default MagicalKenya