import { useHotkeys } from 'react-hotkeys-hook';
import Footer from './Footer/Footer';
import Header from './Header/Header-v2';
import { Products } from './Products/Product-v3';
import { useKey } from './Custom-Hooks/useKey';
import { exitSearchBox, openSearchBox } from './Header/SearchBox/SeachBoxSlice';
import Home from './Home/Home';
import '../index.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cart from './Cart/Cart';
import { Item } from './Item/Item';
import { useEffect } from 'react';
import { Hide } from './Menu/MenuSlice';


export default function App() {
      const { pathname } = useLocation();
      useEffect(function () {
            window.scrollTo(0, 0);
      }, [pathname]);
      const dispatcher = useDispatch();
      useKey('escape', () => dispatcher(exitSearchBox()), false);
      useKey('escape', () => dispatcher(Hide()), false);
      useHotkeys('ctrl+q', (e) => { e.preventDefault(); dispatcher(openSearchBox()); });
      // const router = createBrowserRouter([
      //       {
      //             element: <Applayout />,
      //             children: [
      //                   {
      //                         path: '/home'
      //                         , element: <Home />
      //                   },
      //                   {
      //                         path: '/productselect',
      //                         element: <Products />
      //                   }
      //             ]
      //       }
      // ])
      // return (<RouterProvider router={router} />);
      return (
            <>
                  <Header />
                  <Routes>
                        <Route index path='/' element={<Home id='id' />} />
                        <Route path='/mobiles' element={<Products />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/mobiles/:id' element={<Item />} />
                  </Routes>
                  <Footer />
            </>
      )
}

