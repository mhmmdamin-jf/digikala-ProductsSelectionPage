import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../Cart/cartSlice";
import styles from './ChnageItemQuantity.module.css'
function ChangeItemQuantity({ id, amount }) {
      const dispatcher = useDispatch();
      return (
            <div className={`${styles.ItemCount} mx-auto my-3`}>
                  <button onClick={() => dispatcher(increaseQuantity(id))} className={styles.countButton}><img className={styles.x} src='/images/Cart/svgexport-13.svg' /></button>
                  <p>{amount ? amount : 1}</p>
                  <button onClick={() => dispatcher(decreaseQuantity(id))} className={styles.countButton}><img src={`${amount > 1 ? '/images/Cart/svgexport-144.svg' : '/images/Cart/svgexport-14.svg'}`} /></button>
            </div>
      )
}

export default ChangeItemQuantity