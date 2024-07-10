import { createSlice } from "@reduxjs/toolkit";
const menuInitialData = { show: false, selectedCategory: '' };
const MenuReducer = createSlice({
      name: 'menu',
      initialState: menuInitialData,
      reducers: {
            Show(state) {
                  console.log('showing')
                  state.show = true;
                  state.selectedCategory = '';
            },
            Hide(state) {
                  state.show = false;
            },
            setCategory(state, action) {
                  state.selectedCategory = action.payload;
            }
      }
})

export const { Show, Hide, setCategory } = MenuReducer.actions;
export default MenuReducer.reducer;