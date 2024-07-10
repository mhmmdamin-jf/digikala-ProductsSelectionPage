import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { registerOrder } from '../../services/apiCart';
const initialState = { error: '', status: '', cart: [] };
const initialData = [{
      delivered: false,
      id: 10,
      name: 'گوشی موبایل موتورولا مدل Moto G73 دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت',
      color: 'بنفش',
      garanty: 'گارانتی 18 ماهه هما تلکام',
      sellerName: 'دیجی کالا',
      price: '10010000',
      image: '/images/Cart/73c20064ca8b6ef041a3eb70074e8d41b158a89d_1695217674.webp',
      quantity: '2'
}]
const cartReducer = createSlice({
      name: 'cart',
      initialState: { ...initialState, cart: initialData },
      reducers: {
            increaseQuantity(state, action) {
                  const foundItem = state.cart.find(item => item.id == action.payload);
                  if (!foundItem.quantity) { foundItem.quantity = 1 }
                  foundItem.quantity++;
            },
            decreaseQuantity(state, action) {
                  const findId = action.payload;
                  const foundItem = state.cart.find(item => item.id === findId);
                  if (foundItem.quantity === 1) { state.cart = state.cart.filter(item => item.id !== findId); }
                  foundItem.quantity--;
            },
            addToCart(state, action) {
                  state.cart = [action.payload, ...state.cart];
            },
            clearCart(state) {
                  state.cart = [];
            },
            delItem(state, action) {
                  state.cart = state.cart.filter(item => item.id !== action.payload);
            }
      },
      extraReducers: builder =>
            builder
                  .addCase(postOrder.fulfilled, (state) => {
                        state.error = '';
                        state.cart = [];
                        state.status = 'idle';
                  })
                  .addCase(postOrder.pending, (state) => {
                        state.error = '';
                        state.status = 'loading'
                  })
                  .addCase(postOrder.rejected, (state, action) => {
                        state.error = action.error.message;
                        state.status = 'error';
                  })
});
export const getItemData = (state, id) =>
      state.filter(item => item.id === id)[0]

export const calcCartTotalPrice = (state) => state.reduce((acc, cur) => {
      return cur.quantity * cur.price;
}, 0)
export const postOrder = createAsyncThunk('cartReducer/postOrder',
      async (data) => {
            const register = async () => {
                  const isregistered = await (registerOrder(data));
                  return isregistered;
            }
            const x = await register();
            console.log(x)
            return x;
      })

export const { increaseQuantity, decreaseQuantity, addToCart, clearCart, delItem } = cartReducer.actions;
export default cartReducer.reducer;