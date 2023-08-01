import { Outlet } from "react-router"
import Navbar from "../components/shared/Navbar/Navbar"
import Footer from "../components/shared/Footer"

const Main = () => {
  return (
    <>
      <Navbar/>
      <div className="pt-24 min-h-[calc(100vh-68px)]"><Outlet/></div>
       <Footer/>
    </>
  )
}

export default Main
