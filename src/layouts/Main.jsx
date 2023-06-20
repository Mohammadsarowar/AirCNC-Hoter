import { Outlet } from "react-router"
import Navbar from "../components/shared/Navbar/Navbar"
import Footer from "../components/shared/Footer"

const Main = () => {
  return (
    <>
      <Navbar/>
      <div className="pt-28 pb-20"><Outlet/></div>
       <Footer/>
    </>
  )
}

export default Main
