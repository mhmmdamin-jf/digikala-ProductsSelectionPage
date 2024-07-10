import { getItemData } from '../../services/apiItem'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const inititalItemData = { s_color: 'w', insurance: false, item_sellers: [], seller: {}, status: false, itemData: null, error: '' };
const itemSlice = createSlice({
      name: 'itemReducer',
      initialState: inititalItemData,
      reducers: {
            s_colorSetter(state, action) {
                  state.s_color = action.payload;
            },
            item_sellersSetter(state, action) {
                  state.item_sellers = action.payload;
                  state.seller = action.payload;
            },
            sellerSetter(state, action) {
                  state.seller = action.payload;
            },
            insuranceToggle(state, action) {
                  state.insurance = !state.insurance;
            }
      }
      ,
      extraReducers: (builder) => {
            builder
                  .addCase(fetchItem.pending, (state, action) => {
                        state.status = 'loading';
                  })
                  .addCase(fetchItem.fulfilled, (state, action) => {
                        state.itemData = action.payload;
                        state.seller = action.payload[0];
                        state.item_sellers = action.payload.sellers;
                        state.status = 'idle';
                  })
                  .addCase(fetchItem.rejected, (state, action) => {
                        state.status = 'error';
                        state.error = 'addressing failed.'
                  })
            // .addCase(handelSeller.pending, (state, action) => {
            //       state.status = 'loading';
            //       console.log(state.status)
            // })
            // .addCase(handelSeller.fulfilled, (state, action) => {
            //       state.itemData = action.payload;
            //       state.seller = action.payload[0];
            //       state.item_sellers = action.payload.sellers;
            //       state.status = 'idle';
            // })
            // .addCase(handelSeller.rejected, (state, action) => {
            //       state.status = 'error';
            //       state.error = 'addressing failed.'
            // })
      }
})

// export const handelSeller = createAsyncThunk('itemReducer/handleSeller',
//       async function ({ state, color }) {
//             const filtered = item_sellersFilter(state);

//       }
// )

export const fetchItem = createAsyncThunk('itemReducer/fetchItem',
      async function (id) {
            const res = await getItemData(id);
            return res;
      }
)

export const item_sellersFilter = ({ state, selectedColor }) => state.itemData && state.itemData[0].sellers.filter(sellerEl => sellerEl.color.includes(selectedColor));

export function insuranceCalc(state) {
      state.sellers.map(item => ({ ...item, price: item.price + 275000 }));
}
export default itemSlice.reducer;
export const { s_colorSetter, sellerSetter, item_sellersSetter, insuranceToggle } = itemSlice.actions;