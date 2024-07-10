import { useSelector } from "react-redux";
import ChangeItemQuantity from "../changeItemQuantity/ChangeItemQuantity";
import { getItemData } from "../Cart/cartSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export function Product_add({ handleAddToCart }) {
      const item = useSelector(store => store.item)
      const seller = item.seller ? item.seller : {};
      const itemData = item.itemData;
      let sellers_num = itemData ? itemData.length - 1 : '';
      const chosenSeller = itemData ? itemData[0].sellers.filter(seller => seller.chosen === true)[0] : {};
      const { id: itemId } = useParams();
      const cart = useSelector(store => store.cart.cart);
      const foundItem = getItemData(cart, itemId);
      const itemAmount = foundItem ?
            foundItem.quantity ? foundItem.quantity : 1
            : null;

      // .filter(seller => seller.chosen === true);
      // useEffect(function () {
      //       seller = item.seller;
      //       itemData = item.itemData;
      //       sellers_num = itemData ? itemData.length - 1 : '';
      // }, [])
      return (

            <>
                  <div className='d-flex flex-row justify-content-between py-2 '>
                        <span>فروشنده</span>
                        {sellers_num > 0 && <a className='text-blue-small' href="#">{sellers_num} فروشنده دیگر</a>}
                  </div>
                  <div className='border-bottom py-3'>
                        <div className='d-flex gap-3 flex-column'>
                              <div>
                                    <span className="mx-2 fs-5 ">
                                          {chosenSeller.name && chosenSeller.name}
                                    </span>
                              </div>
                              <div className='d-flex flex-row p-2 align-items-center'>
                                    {seller && (seller.suggestionStatic !== 0 ?
                                          <div className="d-flex flex-row">
                                                <div>
                                                      <span className='txt-green text-smaller mx-1'>{chosenSeller.satis}%</span>
                                                </div>
                                                <div>
                                                      <span className=' text-smaller mx-1'>رضایت از کالا</span>
                                                </div>
                                          </div>
                                          :
                                          null)}
                                    {(chosenSeller.proceed !== 'good') && <div className="line-1"></div>}
                                    {(chosenSeller && chosenSeller.proceed === 'best') &&
                                          <div>
                                                <span className=' text-smaller mx-1'>عملکرد</span>
                                                <span className='txt-green text-smaller txt-green'>عالی</span>
                                          </div>
                                    }
                                    {(chosenSeller && chosenSeller.proceed === 'good') &&
                                          <div>
                                                <span className=' text-smaller mx-1'>عملکرد</span>
                                                <span className='txt-green text-smaller txt-yellow'>خوب</span>
                                          </div>
                                    }

                              </div>
                        </div>
                  </div>
                  <div className='border-bottom py-3'>
                        <div className='d-flex flex-row align-items-center'>
                              <img className='m-1' src='/product-s-images/svgexport-48.svg' />
                              <span className='m-1'>{chosenSeller && chosenSeller.garanty}</span>
                        </div>
                  </div>
                  <div className='border-bottom py-3'>
                        <div className='d-flex flex-row justify-content-between'>
                              <div className='d-flex flex-row w-75 gap-1'>
                                    <img src='/product-s-images/svgexport-49.svg' />
                                    <span className="">موجود در انبار دیجی‌کالا</span>
                              </div>
                              <div>
                                    <img src='/product-s-images/svgexport-54.svg' />
                              </div>
                        </div>
                  </div>
                  <div className='border-bottom py-3'>
                        <div className='d-flex flex-row'>
                              <img src='/product-s-images/club-point.svg' />
                              <span>۱۵۰ امتیاز دیجی‌کلاب</span>
                        </div>
                  </div>
                  <div className='py-3 d-flex flex-column'>
                        <div className='d-flex flex-row justify-content-center'>
                              <span className="mx-1">{chosenSeller && chosenSeller.price}</span>
                              <img src='/product-s-images/svgexport-36.svg' />
                        </div>
                        <div>{foundItem ?
                              <ChangeItemQuantity id={itemId} amount={itemAmount} />
                              :
                              <button onClick={() => handleAddToCart({ sellerName: chosenSeller.name, garanty: chosenSeller.garanty, price: chosenSeller.price })}
                                    className='add-to-card p-2 m-3 w-95'><span className='text-white'>افزودن به سبد</span></button>}
                        </div>
                  </div>

            </>
      );

}
