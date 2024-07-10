import ChangeItemQuantity from '../changeItemQuantity/ChangeItemQuantity';
import { ColorConverter } from '../../helpers/convertSelectedColor';
import styles from './Cart.module.css';

function CartItem({ Item }) {
      console.log(Item)
      const { quantity: amount, id } = Item;
      return (
            <div className={`${styles.cartItem} `}>
                  <div className={styles.cartFirstRow}>
                        <img src={Item.image} className={styles.ItemImg} />
                        <ChangeItemQuantity id={id} amount={amount} />
                  </div>
                  <div className={styles.cartSecondRow}>
                        <h6>{Item.name}</h6>
                        {Item.color &&
                              <div className={styles.ItemColor} >
                                    <div className={styles.color} style={{ backgroundColor: ColorConverter(Item.color) }}></div>
                                    <p>{Item.color}</p>
                              </div>}
                        {Item.garanty && <div className={styles.garanty}>
                              <img src='images/Cart/svgexport-36.svg' />
                              <p>{Item.garanty}</p>
                        </div>}
                        <div className={styles.seller}>
                              <img src='images/Cart/svgexport-37.svg' />
                              <p>{Item.sellerName}</p>
                        </div>
                        <div className={styles.price}>
                              <h5>{Item.price}</h5>
                              <img src='images/Cart/svgexport-18.svg' />
                        </div>
                  </div>
            </div>
      )
}

export default CartItem