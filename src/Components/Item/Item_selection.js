import { useSelector } from "react-redux";
import { Product_add } from "./Product_add";
import { Properties } from "./Properties";
export function Item_selection({ handle_insurance, handle_sellers, item_sellers, s_color, Insurance, seller }) {
      const itemData = useSelector(store => store.item.itemData);
      const { properties } = itemData !== null ? itemData[0] : [];
      return (<>
            <div className='d-flex flex-row mt-3'>
                  <img src='/product-s-images/3960.jpg' className='img-fluid h-50 mx-2' />
                  <h4>گوشی موبایل سامسونگ مدل Galaxy S21 FE 5G دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت</h4>
            </div>
            <div className='row '>
                  <div className='col-8 mt-2 border-top'>
                        <div className='device-name'>
                              <h6 className='txt-gray text-smaller'>Samsung Galaxy S21 FE 5G Dual SIM 256GB And 8GB RAM Mobile Phone</h6>
                        </div>
                        <div className='flex ai-center flex-row mt-3'>
                              <img src='/product-s-images/star-yellow.png'></img>
                              <span className='small'>۴.۲ </span>
                              <a className='mx-1 d-inline'>
                                    <span className='link-primary small'>۳۱۶۹ دیدگاه</span>
                              </a>

                              <a className='mx-1 d-inline'>
                                    <span className='mx-1 link-primary small'>۱۳۴۸ پرسش</span>
                              </a>
                        </div>
                        <div className='mt-2'>
                              <img className='img-fluid small ' src='/product-s-images/svgexport-32.svg'></img>
                              <span className='text-smaller mx-2'>۸۷% (۹۹۹ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند</span>
                        </div>
                        <div className='mt-5'>
                              <h5>
                                    <span>رنگ:</span>
                                    {s_color === 'g' && "زیتونی"}
                                    {s_color === 'p' && "بنفش"}
                                    {s_color === 'w' && "سفید"}
                              </h5>
                        </div>
                        <div className='d-flex flex-row gap-2 mt-3 align-items-center'>
                              <a>
                                    <div onClick={() => handle_sellers('g')} className={`${s_color === 'g' ? 'color-section-active' : 'color-section'} bg-1 pointer `}>
                                          {s_color === 'g' && <img className="p-1" src='/product-s-images/svgexport-32_1.svg'></img>}
                                    </div>
                              </a>
                              <a>
                                    <div onClick={() => handle_sellers('p')} className={`${s_color === 'p' ? 'color-section-active' : 'color-section'} bg-2 pointer `}>
                                          {s_color === 'p' && <img className="p-1" src='/product-s-images/svgexport-32_1.svg'></img>}
                                    </div>
                              </a>
                              <a>
                                    <div onClick={() => handle_sellers('w')} className={`${s_color === 'w' ? 'color-section-active' : 'color-section'} bg-3 pointer  `}>
                                          {s_color === 'w' && <img className="p-1" src='/product-s-images/svgexport-32_1.svg'></img>}
                                    </div>
                              </a>
                        </div>
                        <div className='mt-5'>
                              <h5>بیمه</h5>
                              <div className='border-1-1 d-flex flex-row p-1'>
                                    <div className='d-flex border-start border-left '>
                                          <input value={Insurance} onChange={(e) => { handle_insurance(e.target.value) }} type='checkbox' className='mx-2' />
                                    </div>
                                    <div className='d-flex flex-column m-2 w-100'>
                                          <p className="text-smaller">بیمه تجهیزات دیجیتال - بیمه پارسیان</p>
                                          <div className='row'>
                                                <div className='col-10'>
                                                      <span>۲۷۵,۷۷۰</span>
                                                      <img src='/images/svgexport-34.svg' className='img-fluid '></img>
                                                </div>
                                                <div className='col-2 me-auto'>
                                                      <span className='text-blue-small '>جزییات</span>
                                                      <img className='img-detail' src='/product-s-images/svgexport-8.svg' />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className='mt-4 p-3 border-bottom d-sm-none d-md-none d-lg-inline'>
                              <h5>ویژگی ها</h5>
                              <Properties properties={properties} />
                        </div>
                        <div className='m-3 '>
                              <img src='/product-s-images/svgexport-30.svg'></img>
                              <span className='small m-2'>
                                    امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد. تمام گوشی‌های دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری، می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع کنید.
                              </span>
                        </div>
                        <div className='border-1-1 d-flex flex-row justify-content-between align-items-center px-3 m-2 '>
                              <div>
                                    <h5 className='mt-2'>ارسال رایگان برای این کالا </h5>
                              </div>
                              <div>
                                    <img src='/product-s-images/normalFreeShippingTouchPointImage.svg' />
                              </div>
                        </div>
                        <div className='border-1-1 d-flex flex-column px-3 m-2 '>
                              <div className='d-flex flex-row justify-content-between '>
                                    <div className="d-flex flex-row w-75 align-items-center">
                                          <img className="h-40" src='/product-s-images/svgexport-37_1.svg' />
                                          <h5 className='mt-2 mx-2'>ویژه اعضای دیجی‌پلاس</h5>
                                    </div>
                                    <div className='mt-2 mb-4'>
                                          <span className='text-blue-small '>جزییات</span>
                                          <img className='img-detail' src='/product-s-images/svgexport-8.svg' />
                                    </div>
                              </div>
                              <div>
                                    <ul>
                                          <li>

                                                <span className="txt-gray text-smaller"> ارسال فوری برای شهر تهران (رایگان)</span>
                                          </li>
                                    </ul>
                              </div>
                        </div>

                  </div>
                  <div className='col-4 border-1-3 h-25 '>
                        <Product_add seller={seller} item_sellers={item_sellers} />
                  </div>
            </div></>);
}
