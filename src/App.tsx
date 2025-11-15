import { Outlet } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { MouseFollower } from "./components/MouseFolllower"
import Layout from "./components/Layout"

function App() {
  return (
    <>
      <Navbar />
      <MouseFollower />
      <Layout>
        <Outlet />
      </Layout>
      <Footer />
    </>
  )
}

export default App