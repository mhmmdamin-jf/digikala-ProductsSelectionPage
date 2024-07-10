import { useSelector } from "react-redux";
import { Product_add } from "./Product_add";
import { Properties } from "./Properties";
import { useEffect, useState } from "react";
export function Item_selection({ handle_insurance, handle_sellers, handleAddToCart }) {
      const itemData = useSelector(store => store.item.itemData);
      const sellers = (itemData && itemData[0].sellers)
      const { name: itemName, star, suggestionStatic, color: itemColor } = itemData !== null && itemData[0];
      const item = useSelector(store => store.item);
      const { s_color, Insurance } = item;
      const [color, setColor] = useState('w');
      useEffect(
            function () {
                  handle_sellers(color);
            }, [color, sellers])
      return (<>
            <div className='d-flex flex-row mt-3'>
                  <img src='/product-s-images/3960.jpg' className='img-fluid h-50 mx-2' />
                  <h4>
                        {itemName && itemName.nameFa}
                  </h4>
            </div>
            <div className='row '>
                  <div className='col-8 mt-2 border-top'>
                        <div className='device-name'>
                              <h6 className='txt-gray text-smaller'>
                                    {itemName && itemName.nameEn}
                              </h6>
                        </div>
                        <div className='flex ai-center flex-row mt-3'>
                              <img src='/product-s-images/star-yellow.png'></img>
                              <span className='small'>{star && star} </span>
                              <a className='mx-1 d-inline'>
                                    <span className='link-primary small'>۳۱۶۹ دیدگاه</span>
                              </a>

                              <a>
                                    <span className='mx-1 link-primary small'>۱۳۴۸ پرسش</span>
                              </a>
                        </div>
                        <div className='mt-2'>
                              <img className='img-fluid small ' src='/product-s-images/svgexport-32.svg'></img>
                              <span className='text-smaller mx-2'>{suggestionStatic && suggestionStatic}% (۹۹۹ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند</span>
                        </div>
                        <div className='mt-5'>
                              <h5>
                                    <span>رنگ:</span>
                                    {s_color && s_color === 'g' && "زیتونی"}
                                    {s_color && s_color === 'p' && "بنفش"}
                                    {s_color && s_color === 'w' && "سفید"}
                              </h5>
                        </div>
                        <div className='d-flex flex-row gap-2 mt-3 align-items-center'>
                              {itemColor &&
                                    <div onClick={() => { setColor(itemColor.main.abbr); }} className={`${s_color === itemColor.main.abbr ? 'color-section-active' : 'color-section'} bg-${itemColor.main.abbr} pointer `}>
                                          {s_color === itemColor.main.abbr && <img className="p-1" src='/product-s-images/svgexport-32_1.svg'></img>}
                                    </div>
                              }
                              {itemColor &&
                                    itemColor.other.map(elColor =>
                                          <div onClick={() => { setColor(elColor.abbr); console.log(elColor.abbr === s_color) }} className={`${elColor.abbr === s_color ? 'color-section-active' : 'color-section'} bg-${elColor.abbr} pointer `}>
                                                {s_color === elColor.abbr && <img className="p-1" src='/product-s-images/svgexport-32_1.svg'></img>}
                                          </div>
                                    )
                              }
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
                              <Properties />
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
                        <Product_add handleAddToCart={handleAddToCart} />
                  </div>
            </div></>);
}
