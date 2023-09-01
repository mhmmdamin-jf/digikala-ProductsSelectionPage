import { useState } from "react";

export function Filter({ setFilterState, filter, dispatch }) {
      const [showdgp, setShowdgp] = useState(false);
      const [showlimit, setShowlimit] = useState(false);
      return (
            <>
                  <div className='d-flex flex-row justify-content-between py-2 '>
                        <span>فیلتر ها</span>
                        <div className='text-blue-small pointer' onClick={() => { setFilterState(0); dispatch({ type: 'resetFilters' }) }}>حذف فیلتر</div>
                  </div >
                  <div className=''>
                        <a className='d-flex flex-row justify-content-between py-2 span pointer' onClick={() => setShowdgp(!showdgp)} >
                              <span className='span'>خدمات دیجی پلاس</span>
                              <img src="images/svgexport-37.svg"></img>
                        </a>
                  </div>
                  {
                        <div className={`dgplusexpress ${showdgp ? 'active' : 'deactive'}`}>
                              <input type='checkbox' id='fast-express' onChange={() => { setFilterState(0); dispatch({ type: 'setDgPlusExpress' }) }} />
                              <lable className='span' for='fast-express'>ارسال فوری</lable>
                        </div>
                  }
                  <div className='border-top mt-3'>
                        <div className='d-flex flex-row justify-content-between py-2 '>

                              <span className='span'>ارسال فروشنده</span>
                              <div className="">
                                    <div class="form-check form-switch form-switch-md ">
                                          <input class="form-check-input border-1-1" type="checkbox" id="flexSwitchCheckDefault" checked={filter.sellerexpress1} onClick={() => { setFilterState('0'); dispatch({ type: 'setSetSellerExpress' }) }} />
                                    </div>
                              </div>

                        </div>
                        <p className='filter-about-text'>ارسال مستقیم و سریع تر</p>
                  </div>
                  <div className='border-top'>
                        <a className='d-flex flex-row justify-content-between py-2 span pointer' onClick={() => { setFilterState(0); setShowlimit(!showlimit); }}>
                              <span className='span'>محدوده قیمت</span>
                              <img src="images/svgexport-37.svg"></img>
                        </a>
                  </div>
                  {
                        <div className={`limit-value ${showlimit ? 'active' : 'deactive '}`}>
                              <div className={`d-flex flex-row justify-content-between py-2 span `}   >
                                    <div className='mx-1'>
                                          <span className='span'>از</span>
                                    </div>
                                    <div className='d-flex border-bottom mx-1'>
                                          <input type='text' value={filter.limitvalue.min === 0 ? "" : filter.limitvalue.min} onChange={(e) => { setFilterState(0); dispatch({ type: 'setValuemin', payload: e.target.value }) }} className='border-0 w-100' />
                                    </div>
                                    <div className='mx-1'>
                                          <img src="images/svgexport-34.svg" className=''></img>
                                    </div>
                              </div>
                              <div className='d-flex flex-row justify-content-between py-2 span' href="#">
                                    <div className='mx-1'>
                                          <span className='span'>تا</span>
                                    </div>
                                    <div className='d-flex border-bottom mx-1'>
                                          <input type='text' value={filter.limitvalue.max === 99999999 ? "" : filter.limitvalue.max} onChange={(e) => { setFilterState(0); dispatch({ type: 'setValuemax', payload: e.target.value }) }} className='border-0 w-100' />
                                    </div>
                                    <div className='mx-1'>
                                          <img src="images/svgexport-34.svg" className=''></img>
                                    </div>
                              </div>
                        </div>
                  }
                  <div className='border-top'>
                        <div className='d-flex flex-row justify-content-between py-2 '>
                              <span className='span'>فقط کالاهای موجود</span>
                              <div class="form-check form-switch form-switch-md">
                                    <input class="form-check-input border-1-1" type="checkbox" id="flexSwitchCheckDefault" checked={filter.available1} onClick={(e) => { setFilterState(0); dispatch({ type: 'setAvailable' }); }} />
                              </div>
                        </div>
                  </div>
                  <div className='border-top '>
                        <div className='d-flex flex-row justify-content-between py-2 '>
                              <span className='span'>فقط کالاهای موجود در انبار دیجی کالا</span>
                              <div class="form-check form-switch form-switch-md">
                                    <input class="form-check-input border-1-1" type="checkbox" id="flexSwitchCheckDefault" checked={filter.availableInDgkala} onClick={() => { setFilterState(0); dispatch({ type: 'setavailableInDgkala' }) }} />
                              </div>
                        </div>
                  </div>
            </>
      );
}
