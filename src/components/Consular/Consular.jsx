import ConsularList from "./ConsularList"
import Visa from "./Visa"
import Passports from './Passports'
import GoodConduct from './GoodConduct'
import Marriage from './Marriage'
import Pets from './Pets'
import Birth from './Birth'
import DocAuth from "./DocAuth"
import DocLeg from "./DocLeg"
import Downloads from "./Downloads"

const Consular = () => {
  return (
    <div>
        <ConsularList /> 
        <Visa />
        <Passports />
        <GoodConduct />
        <Marriage />
        <Pets />
        <Birth />
        <DocAuth />
        <DocLeg />
        <Downloads />
    </div>
  )
}

export default Consular