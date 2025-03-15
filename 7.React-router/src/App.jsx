import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Contact from "./components/Contact"
import UserProfile from "./components/UserProfile"
import NotFound from "./components/NotFound"
import Navbar from "./components/Navbar"
import Analytics from "./pages/Analytics/Analytics"
import Development from "./pages/Analytics/Development"
import UIUX from "./pages/Analytics/UIUX"
import CyberSecurity from "./pages/Analytics/CyberSecurity"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/profile/:id" element={<UserProfile />}></Route>
          <Route path="/analytics" element={<Analytics />}>
              <Route path="/analytics/development" element={<Development />}></Route>
              <Route path="/analytics/cybersecurity" element={<CyberSecurity />}></Route>
              <Route path="/analytics/uiux" element={<UIUX />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
