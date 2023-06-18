import { Outlet } from "react-router"
import Navbar from "../components/shared/Navbar/Navbar"

const Main = () => {
  return (
    <div>
      <Navbar/>
      <div className="pt-28 pb-20"><Outlet/></div>
   
    </div>
  )
}

export default Main