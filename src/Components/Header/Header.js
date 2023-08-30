export function Header() {
      return (<>
            <div className=' d-flex'>
                  <a target='_blank' href='#'>
                        <img className='img-fluid' src="images/promo.webp" alt='a' />
                  </a>
            </div>
            <div className='container-fluid mt-2 mx-3'>
                  <div className='row'>
                        <div className='col-md-10 col-lg-1 '>
                              <a href='#'>
                                    <img src='images/لوگوی دیجیکالا.svg' className='img-fluid mt-2'></img>
                              </a>
                        </div>
                        <div className='col-sm-6  col-md-6 col-lg-6'>
                              <div className='px-2 px-4-lg py-2 bg-search pointer position'>
                                    <a>
                                          <img src='images/svgexport-3.svg' />
                                          <span className='search-text'>جستجو</span>
                                    </a>
                              </div>
                        </div>
                        <div className='col-sm-5 col-md-4 col-lg-3 col-xl-2 me-md-auto '>
                              <div className="row align-items-center">
                                    <div className="col-8 ">
                                          <button className='signin w-full btn btn-outline-secondary d-flex flex-row justify-content-evenly border border-outline border-2'>
                                                <div className="col-1">
                                                      <img src='images/svgexport-6.svg' className=""></img>
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
                                          <a>
                                                <img src='images/svgexport-7.svg'>
                                                </img>
                                          </a>

                                    </div>
                              </div>
                        </div>
                  </div >

                  <div className='row nav-font mt-2 border-bottom py-2'>
                        <div className='col-lg-9 d-md-none d-sm-none d-lg-inline '>
                              <ul className="list-group list-group-horizontal align-items-center nav-ul" >
                                    <li className="pointer mx-2 d-sm-none d-md-none d-lg-inline">
                                          <img src='images/svgexport-9.svg'></img>
                                          <span className='mx-1'>دسته بندی کالاها</span>
                                    </li>
                                    <div><span className='line mx-2 mt-2 line-1'></span></div>
                                    <li className="pointer mt-1 mx-2 d-sm-none d-md-none d-lg-inline d-flex flex-row align-items-center">
                                          <img className='mb-1' src='images/svgexport-23.svg'></img>
                                          <span className='mx-1 '>شگفت انگیزها </span>
                                    </li>
                                    <li className='pointer mt-1 mx-2 d-sm-none d-md-none d-lg-inline'>
                                          <img className='mb-1' src='images/svgexport-24.svg'></img>
                                          <span className='mx-1'>   سوپرمارکت
                                          </span>                                   </li>
                                    <li className='pointer mt-1 mx-2 d-sm-none d-md-none d-lg-inline'>
                                          <img className='mb-1' src='images/svgexport-25.svg'></img>
                                          <span className='mx-1'>  کارت هدیه
                                          </span>                                  </li>
                                    <li className='pointer mt-1 mx-2 d-sm-none d-md-none d-lg-inline'>
                                          <img className='mb-1' src='images/svgexport-26.svg'></img>
                                          <span className='mx-1'>  پرفروش ترین ها
                                          </span>
                                    </li>
                                    <div><span className='line mx-2 mt-2 line-1'></span></div>
                                    <li className='pointer mt-1 mx-2 d-sm-none d-md-none d-lg-inline'>
                                          <span className='mx-1'>  سوالی دارید؟
                                          </span>
                                    </li>
                                    <li className='pointer mt-1 mx-2 d-sm-none d-md-none d-lg-inline'>
                                          <span className='mx-1'>   در درجی کالا بفروشید!
                                          </span>
                                    </li>
                              </ul>
                        </div>

                        <div className='mt-2 col-lg-2 d-md-none d-lg-inline me-auto px-5'>
                              <img src='images/svgexport-27.svg'></img>
                              <span>
                                    لطفا شهر خود را انتخاب کنید
                              </span>
                        </div>
                  </div>
                  <p className='p-page'>
                        <a>
                              فروشگاه اینترنتی دیجیکالا
                        </a>
                        /
                        <a>
                              موبایل
                        </a>
                  </p>
                  <p>
                        گوشی موبایل
                  </p>
            </div >
      </>
      );
}
