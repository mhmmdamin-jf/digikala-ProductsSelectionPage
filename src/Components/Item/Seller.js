import ChangeItemQuantity from "../changeItemQuantity/ChangeItemQuantity";
import { useSelector } from "react-redux";
import { getItemData } from "../Cart/cartSlice";
import { useParams } from "react-router-dom";
export function Seller({ seller }) {
      const cart = useSelector(store => store.cart.cart);
      const { id: itemId } = useParams();
      const foundItem = getItemData(cart, itemId);
      const itemAmount = foundItem ?
            foundItem.quantity ? foundItem.quantity : 1
            : null;
      return (
            <div className='d-flex flex-row p-3 justify-content-between align-items-baseline '>
                  <div className='d-flex flex-row'>
                        <div>
                              <img src='/product-s-images/svgexport-21.svg'></img>
                        </div>
                        <div className='d-flex flex-column px-3 mx-3'>
                              <div>
                                    <span>{seller.name}</span>
                                    <span className='mx-4 d-flex d-sm-none d-md-none d-lg-inline txt-green text-smaller'>
                                          {seller.chosen === true && 'منتخب'}</span>
                              </div>
                              <div className='d-flex flex-row align-items-center mt-2'>
                                    <div className=' d-flex d-sm-none d-md-none d-lg-inline'>
                                          {seller.proceed === 'best' && <> <span className='ms-1 text-smaller'>عملکرد</span><span className='txt-green mx-3 text-smaller'>عالی</span></>}
                                          {seller.proceed === 'good' && <> <span className='ms-1 text-smaller'>عملکرد</span><span className='txt-yellow mx-3 text-smaller'>خوب</span></>}
                                    </div>

                                    <div className=' d-flex d-sm-none d-md-none d-lg-inline'>
                                          {seller.satis !== 0 ? <div className='d-flex flex-row mx-2 '><div className='line-1'></div><span className=' mx-2  text-smaller'>{seller.satis}% رضایت از کالا </span> </div> : <></>}
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className='d-flex flex-column'>
                        <div className='d-flex d-sm-none d-md-none d-lg-inline'>
                              <img src='/product-s-images/svgexport-47.svg'></img>
                              {seller.postby === 'dgkala' && <span className="text-smaller">ارسال دیجی‌کالا</span>}
                              {seller.postby === 'seller' && <span className="text-smaller">ارسال توسط فروشنده</span>}
                        </div>
                        <div className='d-flex d-sm-none d-md-none d-lg-inline '>
                              {seller.postfast === 0 ? <span className="text-smaller">ارسال فوری</span> : <span className="text-smaller">ارسال از {seller.postfast} روز کاری آینده</span>}
                        </div>
                  </div>
                  <div>
                        <img src='/product-s-images/svgexport-48.svg' />
                        <span>{seller.garanty}</span>
                  </div>
                  <div className='d-flex align-items-center '>
                        <span>{seller.price}</span>
                        <img src='/images/svgexport-34.svg' className='img-fluid '></img>
                        <button className={`${foundItem && seller.name === foundItem.sellerName ? '' : 'add-to-card'} px-3 mx-2 d-flex align-items-center`}>
                              {
                                    foundItem ?
                                          seller.name === foundItem.sellerName ?
                                                < ChangeItemQuantity amount={itemAmount} id={itemId} />
                                                :
                                                <span className='text-white p-2'>
                                                      افزودن به سبد
                                                </span>
                                          :
                                          <span className='text-white p-2'>
                                                افزودن به سبد
                                          </span>
                              }
                        </button>
                  </div>
            </div>
      );
}
