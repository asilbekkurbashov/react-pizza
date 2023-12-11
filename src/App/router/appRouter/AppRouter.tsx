import { Route, Routes } from "react-router-dom"
import RootLayout from "../layout/RootLayout"
import Home from "@/pages/home/Home"
import Favourite from "@/pages/favourite/Favourite"
import Deliver from "@/pages/deliver/Deliver"

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/deliver" element={<Deliver/>}/>
        <Route path="/favourite" element={<Favourite/>}/>
      </Route>
    </Routes>
  )
}

export default AppRouter