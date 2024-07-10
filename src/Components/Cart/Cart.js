import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import styles from './Cart.module.css'
import { calcCartTotalPrice } from './cartSlice';
import CartItem from './CartItem';
function Cart() {
      const [open, setOpen] = useState('cart');
      const cart = useSelector(store => store.cart.cart);
      const totalPrice = useRef(cart && calcCartTotalPrice(cart));
      useEffect(function () {
            totalPrice.current = calcCartTotalPrice(cart);
            if (!cart.lenght) totalPrice.current = 0;
      }, [cart]);
      return (
            <div className={styles.cartMain}>
                  <ul className={styles.cartNav}>
                        <li onClick={() => setOpen('cart')} className={`pointer ${open === 'cart' && styles.activeCart}`}>سبد خرید</li>
                        <li onClick={() => setOpen('nextCart')} className={`pointer ${open === 'nextCart' && styles.activeCart}`}>خرید بعدی</li>
                  </ul>
                  <div className={styles.cartOverview}>
                        {open === 'nextCart' &&
                              <div className={styles.cartEmpty}>
                                    <img src='images/Cart/empty-sfl.webp' />
                                    <h6>لیست خرید بعدی شما خالی است!</h6>
                                    <p>شما می‌توانید محصولاتی که به سبد خرید خود افزوده‌اید و فعلا قصد خرید آن‌ها را ندارید، در لیست خرید بعدی قرار داده و هر زمان مایل بودید آن‌ها را به سبد خرید اضافه کرده و خرید آن‌ها را تکمیل کنید.</p>
                              </div>
                        }
                        {
                              open === 'cart' ? cart[0] ?
                                    <div className={`${styles.cart} `}>
                                          <div className={styles.cartTitle}>
                                                <h6>سبد خرید شما</h6>
                                                <p>{cart.length} کالا</p>
                                          </div>
                                          {cart.map
                                                (cartItem =>
                                                      <CartItem Item={cartItem} />
                                                )}
                                          <div className={`${styles.cartDetailslg} d-none d-lg-block`}>
                                                <div className={styles.cartStatis}>
                                                      <p>جمع سبد خرید</p>
                                                      <div className={styles.price}>
                                                            <h6>{totalPrice.current}</h6>
                                                            <img src='images/Cart/svgexport-18.svg' />
                                                      </div>
                                                </div>
                                                <button className={`${styles.order} pointer`}>ثبت سفارش</button>
                                                <div className={styles.pointsOverview}>
                                                      <div className={styles.dgclub}>
                                                            <img src='images/Cart/دیجی‌کلاب.svg' />
                                                            <p>دیجی کلاب</p>
                                                            <img src='images/Cart/svgexport-42.svg' />
                                                      </div>
                                                      <div>
                                                            <p>۱۵۰ امتیاز</p>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className={`${styles.cartDetails} d-block d-lg-none`}>
                                                <div className={styles.cartStatis}>
                                                      <p>جمع سبد خرید</p>
                                                      <div className={styles.price}>
                                                            <h6>{totalPrice.current}</h6>
                                                            <img src='images/Cart/svgexport-18.svg' />
                                                      </div>
                                                </div>
                                                <button className={`${styles.order} pointer`}>ثبت سفارش</button>
                                                <div className={styles.pointsOverview}>
                                                      <div className={styles.dgclub}>
                                                            <img src='images/Cart/دیجی‌کلاب.svg' />
                                                            <p>دیجی کلاب</p>
                                                            <img src='images/Cart/svgexport-42.svg' />
                                                      </div>
                                                      <div>
                                                            <p>۱۵۰ امتیاز</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    : <div className={styles.cartEmpty}>
                                          <img src='images/Cart/empty-sfl.webp' />
                                          <h6>لیست خرید شما خالی است!</h6>
                                    </div>
                                    : null}
                  </div>
            </div>
      )
}

export default Cart