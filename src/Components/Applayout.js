import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import HeaderV2 from "./Header/Header-v2"

function Applayout() {
      return (
            <div className="w-full">
                  <HeaderV2 />
                  {/* <BrowserRouter>
            <Routes>
                  <Route path='/home' index element={<Home />} />
                  <Route path='/productselect' element={<Products />} />
            </Routes>
      </BrowserRouter> */}
                  {/* <Products /> */}
                  <Outlet />
                  <Footer />
            </div>)
}

export default Applayout