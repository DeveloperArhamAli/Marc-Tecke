import { Outlet } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { MouseFollower } from "./components/MouseFolllower"

function App() {
  return (
    <>
      <Navbar />
      <MouseFollower />
      <Outlet />
      <Footer />
    </>
  )
}

export default App