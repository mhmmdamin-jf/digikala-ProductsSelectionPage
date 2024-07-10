import { memo, useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import SearchBox from "./SearchBox/SearchBox";
import Menu from "../Menu/Menu";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { openSearchBox } from "./SearchBox/SeachBoxSlice";
import { useDispatch } from "react-redux";
import { Show, Hide } from '../Menu/MenuSlice'
import { getHomeItemsData } from "../../services/apiHomeItems";
function Header() {
      const [homeBannerUrl, setHomeBannerUrl] = useState('');
      const dispatcher = useDispatch();
      const openSearch = useSelector(store => store.searchBox.openSearch);
      const boxRef = useRef();
      const handleClick = (e) => {
            if (boxRef.current && !boxRef.current.contains(e.target)) {
                  dispatcher(Hide());
            }
      }
      useEffect(function () {
            const fetchHomeData = async () => {
                  const res = await getHomeItemsData();
                  return new Promise(() => {
                        try { setHomeBannerUrl(res[0].homeTopImage) }
                        catch (err) { console.log('fetching home data : ', err.message) }
                  });
            }
            fetchHomeData();
            document.addEventListener('click', handleClick, { capture: true });
            return () => document.removeEventListener('click', handleClick, { capture: true })
      }
            , [setHomeBannerUrl, getHomeItemsData])
      return (
            <div className="header-nav">
                  <div ref={boxRef}>
                        <Menu />
                  </div>
                  <div className=' d-flex d-none d-md-block'>
                        <img className='img-fluid' src={homeBannerUrl} alt='a' />
                  </div>
                  <div className='container-fluid mt-2 mx-3'>
                        <div className='row align-items-baseline'>
                              <div className='col-md-10 col-lg-1  d-none d-md-block'>
                                    <a href='#'>
                                          <img src='/images/لوگوی دیجیکالا.svg' className='img-fluid mt-2'></img>
                                    </a>
                              </div>
                              <div className='col-sm-6 col-md-12 col-lg-6 box ms-5 '>
                                    {openSearch ?
                                          <SearchBox />
                                          :
                                          <div onClick={() => { dispatcher(openSearchBox()) }} className=' ms-3 ms-md-0 px-4-lg py-2 bg-search pointer position px-1'>
                                                <img src='/images/svgexport-3.svg' />
                                                <span className='search-text'>جستجو</span>
                                                <span className="search-shortcut ms-3 ms-md-0">Ctrl + q</span>
                                          </div>}
                              </div>
                              <div className='mt-2 col-sm-5 col-md-4 col-lg-3 col-xl-2 me-md-auto '>
                                    <div className="row align-items-center">
                                          <div className="col-8 ">
                                                <button className='  signin w-full btn btn-outline-secondary d-flex flex-row justify-content-evenly border border-outline border-2'>
                                                      <div className="col-1">
                                                            <img src='/images/svgexport-6.svg' className=""></img>
                                                      </div>
                                                      <div >
                                                            <span className="txt-small">ورود | ثبت‌نام</span>
                                                      </div>
                                                </button>
                                          </div>
                                          <div className="col-1">
                                                <span className="line-1 py-2"></span>
                                          </div>
                                          <div className="col-2">
                                                <Link to={'/cart'}>
                                                      <img src='/images/svgexport-7.svg'>
                                                      </img>
                                                </Link>
                                          </div>
                                    </div>
                              </div>
                        </div >
                        <div className='row nav-font mt-2 border-bottom '>
                              <div className='col-lg-9 d-md-none d-none d-lg-inline mb-1'>
                                    <ul className="list-group list-group-horizontal align-items-center nav-ul" >
                                          <li onClick={() => dispatcher(Show())} className="pointer txt-underline-op mx-2 d-sm-none d-md-none d-lg-inline">
                                                <img src='/images/svgexport-9.svg'></img>
                                                <span className='mx-1'>دسته بندی کالاها</span>
                                          </li>
                                          <div><span className='line mx-2 mt-2 line-1'></span></div>
                                          <li className="pointer txt-underline-op mt-1 mx-2 d-sm-none d-md-none d-lg-inline d-flex flex-row align-items-center">
                                                <img className='mb-1' src='/images/svgexport-23.svg'></img>
                                                <span className='mx-1 '>شگفت انگیزها </span>
                                          </li>
                                          <li className='pointer txt-underline-op mt-1 mx-2 d-sm-none d-md-none d-lg-inline'>
                                                <img className='mb-1' src='/images/svgexport-24.svg'></img>
                                                <span className='mx-1'>   سوپرمارکت
                                                </span>                                   </li>
                                          <li className='pointer txt-underline-op mt-1 mx-2 d-sm-none d-md-none d-lg-inline'>
                                                <img className='mb-1' src='/images/svgexport-25.svg'></img>
                                                <span className='mx-1'>  کارت هدیه
                                                </span>                                  </li>
                                          <li className='pointer mt-1 txt-underline-op mx-2 d-sm-none d-md-none d-lg-inline'>
                                                <img className='mb-1' src='/images/svgexport-26.svg'></img>
                                                <span className='mx-1'>  پرفروش ترین ها
                                                </span>
                                          </li>
                                          <div><span className='line mx-2 mt-2 line-1'></span></div>
                                          <li className='pointer txt-underline-op mt-1 mx-2 d-sm-none d-md-none d-lg-inline'>
                                                <span className='mx-1'>  سوالی دارید؟
                                                </span>
                                          </li>
                                          <li className='pointer txt-underline-op mt-1 mx-2 d-sm-none d-md-none d-lg-inline'>
                                                <span className='mx-1'>   در درجی کالا بفروشید!
                                                </span>
                                          </li>
                                    </ul>
                              </div>

                              <div className='d-none d-md-block mt-2 col-lg-2 d-md-none d-lg-inline me-auto px-5'>
                                    <img src='/images/svgexport-27.svg'></img>
                                    <span className="txt-small">
                                          لطفا شهر خود را انتخاب کنید
                                    </span>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default memo(Header);