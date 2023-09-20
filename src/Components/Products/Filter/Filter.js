import { useState } from "react";

export function Filter({ dgplusexpress, setDigiplusexpress, sellerexpress, setsellerexpress, limitvalue, setLimitvalue, available, setAvailable, availabledgkala, setAvailabledgkala }) {
      function handle_reset() {
            setAvailable(false); setAvailabledgkala(false); setDigiplusexpress(false);
            setsellerexpress(false); setLimitvalue({ ...limitvalue, min: 0, max: 99999999 });
      }
      const [showdgp, setShowdgp] = useState(false);
      const [showlimit, setShowlimit] = useState(false);

      return (<>
            <div className='d-flex flex-row justify-content-between py-2 '>
                  <span>فیلتر ها</span>
                  <div className='text-blue-small pointer' onClick={() => handle_reset()}>حذف فیلتر</div>
            </div>


            <div className=' py-3'>
                  <a className='d-flex flex-row justify-content-between py-2 span pointer' onClick={() => setShowdgp(!showdgp)} >
                        <span className='span'>خدمات دیجی پلاس</span>
                        <img src="images/svgexport-37.svg"></img>
                  </a>
            </div>
            {showdgp && <div className=' '>
                  <input type='checkbox' id='fast-express' value={dgplusexpress} onChange={() => { setDigiplusexpress(!dgplusexpress) }} />
                  <lable className='span' for='fast-express'>ارسال فوری</lable>
                  <img src=""></img>
            </div>}

            <div className='border-top mt-3'>
                  <div className='d-flex flex-row justify-content-between py-2 '>

                        <span className='span'>ارسال فروشنده</span>
                        <div className="">
                              <div class="form-check form-switch form-switch-md ">
                                    <input class="form-check-input border-1-1" type="checkbox" id="flexSwitchCheckDefault" checked={sellerexpress} onClick={() => setsellerexpress(!sellerexpress)} />
                              </div>
                        </div>

                  </div>
                  <p className='filter-about-text'>ارسال مستقیم و سریع تر</p>
            </div>
            <div className='border-top'>
                  <a className='d-flex flex-row justify-content-between py-2 span pointer' onClick={() => setShowlimit(!showlimit)}>
                        <span className='span'>محدوده قیمت</span>
                        <img src="images/svgexport-37.svg"></img>
                  </a>
            </div>
            {showlimit && <>
                  <div className='d-flex flex-row justify-content-between py-2 span'  >

                        <div className='mx-1'>
                              <span className='span'>از</span>
                        </div>
                        <div className='d-flex border-bottom mx-1'>
                              <input type='text' value={limitvalue.min === 0 ? "" : limitvalue.min} onChange={(e) => { setLimitvalue({ ...limitvalue, min: e.target.value }); }} className='border-0 w-100' />
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
                              <input type='text' value={limitvalue.max === 99999999 ? "" : limitvalue.max} onChange={(e) => { setLimitvalue({ ...limitvalue, max: e.target.value }); }} className='border-0 w-100' />
                        </div>
                        <div className='mx-1'>
                              <img src="images/svgexport-34.svg" className=''></img>
                        </div>

                  </div></>}

            <div className='border-top'>
                  <div className='d-flex flex-row justify-content-between py-2 '>

                        <span className='span'>فقط کالاهای موجود</span>

                        <div class="form-check form-switch form-switch-md">
                              <input class="form-check-input border-1-1" type="checkbox" id="flexSwitchCheckDefault" checked={available} onClick={(e) => setAvailable(!available)} />
                        </div>

                  </div>

            </div>
            <div className='border-top '>
                  <div className='d-flex flex-row justify-content-between py-2 '>

                        <span className='span'>فقط کالاهای موجود در انبار دیجی کالا</span>

                        <div class="form-check form-switch form-switch-md">
                              <input class="form-check-input border-1-1" type="checkbox" id="flexSwitchCheckDefault" checked={availabledgkala} onClick={() => setAvailabledgkala(!availabledgkala)} />
                        </div>

                  </div>

            </div>

      </>
      );
}
