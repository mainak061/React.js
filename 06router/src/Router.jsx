import { createBrowserRouter, createRoutesFromElements, Route } from "react-router"
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Github from "./components/Github/Github.jsx"
import { gitInfoLoader } from "./components/Github/GitLoader"
import Home from "./components/Home/Home.jsx"
import User from "./components/User/User.jsx"
import Layout from './Layout.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route
      loader={gitInfoLoader}
      path='github' element={<Github/>} />
    </Route>
  )
)
export default router;