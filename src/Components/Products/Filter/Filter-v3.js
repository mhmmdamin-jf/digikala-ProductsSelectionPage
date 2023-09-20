import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset, setavailableInDgkala, setAvailable, setDgPlusExpress, setSetSellerExpress, setValuemin, setValuemax } from './FilterSlice';

export function Filter() {
      const dispatcher = useDispatch();
      const { sellerexpress1, limitvalue, available1, availableInDgkala } = useSelector(store => store.filter);
      const [showdgp, setShowdgp] = useState(false);
      const [showlimit, setShowlimit] = useState(false);
      return (
            <>
                  <div className='d-flex flex-row justify-content-between py-2 '>
                        <span>فیلتر ها</span>
                        <div className='text-blue-small pointer' onClick={() => { dispatcher(reset()); }}>حذف فیلتر</div>
                  </div >
                  <div className=''>
                        <a className='d-flex flex-row justify-content-between py-2 span pointer' onClick={() => setShowdgp(!showdgp)} >
                              <span className='span'>خدمات دیجی پلاس</span>
                              <img src="images/svgexport-37.svg"></img>
                        </a>
                  </div>
                  {
                        <div className={`dgplusexpress ${showdgp ? 'active' : 'deactive'}`}>
                              <input type='checkbox' id='fast-express' onChange={() => { dispatcher(setDgPlusExpress()) }} />
                              <lable className='span' for='fast-express'>ارسال فوری</lable>
                        </div>
                  }
                  <div className='border-top mt-3'>
                        <div className='d-flex flex-row justify-content-between py-2 '>

                              <span className='span'>ارسال فروشنده</span>
                              <div className="">
                                    <div class="form-check form-switch form-switch-md ">
                                          <input class="form-check-input border-1-1" type="checkbox" id="flexSwitchCheckDefault" checked={sellerexpress1} onClick={() => { dispatcher(setSetSellerExpress()) }} />
                                    </div>
                              </div>

                        </div>
                        <p className='filter-about-text'>ارسال مستقیم و سریع تر</p>
                  </div>
                  <div className='border-top'>
                        <a className='d-flex flex-row justify-content-between py-2 span pointer' onClick={() => { setShowlimit(!showlimit); }}>
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
                                          <input type='text' value={limitvalue.min === 0 ? "" : limitvalue.min} onChange={(e) => { dispatcher(setValuemin(e.target.value)) }} className='border-0 w-100' />
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
                                          <input type='text' value={limitvalue.max === 99999999 ? "" : limitvalue.max} onChange={(e) => { dispatcher(setValuemax(e.target.value)) }} className='border-0 w-100' />
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
                                    <input class="form-check-input border-1-1" type="checkbox" id="flexSwitchCheckDefault" checked={available1} onClick={(e) => { dispatcher(setAvailable()); }} />
                              </div>
                        </div>
                  </div>
                  <div className='border-top '>
                        <div className='d-flex flex-row justify-content-between py-2 '>
                              <span className='span'>فقط کالاهای موجود در انبار دیجی کالا</span>
                              <div class="form-check form-switch form-switch-md">
                                    <input class="form-check-input border-1-1" type="checkbox" id="flexSwitchCheckDefault" checked={availableInDgkala} onClick={() => { dispatcher(setavailableInDgkala()) }} />
                              </div>
                        </div>
                  </div>
            </>
      );
}
