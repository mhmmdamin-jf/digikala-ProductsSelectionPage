import { useEffect, useRef } from "react";
import { exitSearchBox } from "./SeachBoxSlice";
import { useDispatch } from 'react-redux';
export default function SearchBox() {
      const dispatcher = useDispatch();
      function foc() {
            let searchIn = boxSide.current.firstChild.firstChild;
            searchIn.focus();
      }
      const boxSide = useRef(document.querySelector('#searchBox'));
      let searchSec = document.querySelector('#searchBox');

      function closeHandler(e) {
            if (!(e.target.parentElement.parentElement === boxSide.current)) {
                  dispatcher(exitSearchBox());
            }
      }

      useEffect(function () {
            searchSec = document.querySelector('#searchBox');
            boxSide.current = (searchSec);
            document.addEventListener('mousedown', (e) => closeHandler(e));
            foc();
            return (function () {
                  document.removeEventListener('mousedown', (e) => closeHandler(e));
            })
      }, []);

      return (
            <section ref={boxSide} id="searchBox" className="search py-4 bg-light-1 d-flex flex-row justify-content-center" >
                  <div className='px-2 px-4-lg py-2 border-bottom border-2 w-95 border-primary pointer '>
                        <input id='#searchIn' className="search-box-in bg-light-1"></input>
                        <img className="search-img-popup" src='images/svgexport-3.svg' />
                        <span className='search-text-popup'>جستجو</span>
                  </div>
            </section >
      )
}