import { configureStore } from "@reduxjs/toolkit";
import SearchBoxSlice from "./Components/Header/SearchBox/SeachBoxSlice";
import FilterSlice from "./Components/Products/Filter/FilterSlice";
import SortSlice from "./Components/Products/Sort/SortSlice";
import MenuSlice from "./Components/Menu/MenuSlice";
import ProductSlice from "./Components/Products/ProductSlice";
import ItemSlice from "./Components/Item/ItemSlice";
import cartSlise from './Components/Cart/cartSlice'

const store = configureStore({
      reducer: {
            searchBox: SearchBoxSlice,
            filter: FilterSlice,
            sort: SortSlice,
            menu: MenuSlice,
            product: ProductSlice,
            item: ItemSlice,
            cart: cartSlise
      },
});
export default store;