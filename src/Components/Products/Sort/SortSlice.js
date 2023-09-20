import { createSlice } from "@reduxjs/toolkit";


const items_Array = [
      {
            desc: 'گوشی موبایل سامسونگ مدل Galaxy A14 دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت',
            name: 'Galaxy-A14',
            star: 4.2,
            post_type: 'free',
            value: 5019000,
            post_by_seller: true,
            views: 200,
            date: Date('23 june 2020'),
            sells: 100,
            post_long: 1, image: 'images/a14.webp',
            availeabledgkala: true,

      },
      {
            desc: 'گوشی موبایل سامسونگ مدل Galaxy S21 FE 5G دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت',
            name: 'Galaxy-S21',
            star: 4.1,
            post_type: 'free',
            value: 19010000,
            post_by_seller: true,
            views: 100,
            date: Date('23 june 2021'),
            sells: 10,
            post_long: 1, image: 'images/s21.webp',
            availeabledgkala: true
      },
      {
            desc: 'گوشی موبایل سامسونگ مدل  Galaxy A73 5G SM-A736B/DS دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت',
            name: 'Galaxy-A73',
            star: 4.4,
            post_type: 'non-free',
            value: 15010000,
            post_by_seller: false,
            views: 300,
            date: Date('02 june 2021'),
            sells: 120,
            post_long: 2, image: 'images/a73.webp',
            availeabledgkala: false
      }, {
            desc: 'گوشی موبایل سامسونگ مدل Galaxy A13 دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت به همراه شارژر',
            name: 'Galaxy-A13',
            star: 3.5,
            post_type: 'free',
            value: 6013000,
            post_by_seller: true,
            views: 300,
            date: Date('23 june 2022'),
            sells: 200,
            post_long: 3, image: 'images/a13.webp',
            availeabledgkala: true
      }, {
            desc: 'گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت',
            name: 'Galaxy-A32',
            star: 4.5,
            post_type: 'non-free',
            value: 8013000,
            post_by_seller: false,
            views: 500,
            date: Date('13 june 2021'),
            sells: 220,
            post_long: 3, image: 'images/a32.webp',
            availeabledgkala: true
      }, {
            desc: 'گوشی موبایل سامسونگ مدل Galaxy A33 5G دو سیم کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت - ویتنام',
            name: 'Galaxy-A33 5G',
            star: 3.9,
            post_type: 'free',
            value: 10013000,
            post_by_seller: false,
            views: 100,
            date: Date('23 june 2021'),
            sells: 10,
            post_long: 3, image: 'images/a33.webp',
            availeabledgkala: true
      },
      {
            desc: 'گوشی موبایل سامسونگ مدل Galaxy A14 دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت',
            name: 'Galaxy-A14',
            star: 4.2,
            post_type: 'free',
            value: null,
            post_by_seller: true,
            views: 200,
            date: Date('23 june 2020'),
            sells: 100,
            post_long: 1, image: 'images/a14.webp',
            availeabledgkala: true
      },

];

const sortInitialData = { items_sorted1: [], items1: items_Array };
const SortReducer = createSlice({
      name: 'sort',
      initialState: sortInitialData,
      reducers: {
            setTopViews(state) {
                  state.items_sorted1 = state.items1.slice().sort((a, b) => b.views - a.views);
            },
            setRelevant(state) {
                  state.items_sorted1 = state.items1.slice();
            },
            setNewest(state) {
                  state.items_sorted1 = state.items1.slice().sort((a, b) => b.date - a.date);
            },
            setTopSellers(state) {
                  state.items_sorted1 = state.items1.slice().sort((a, b) => b.sells - a.sells);
            },
            setCheapest(state) {
                  state.items_sorted1 = state.items1.slice().sort((a, b) => a.value - b.value)
            },
            setMostExpense(state) {
                  state.items_sorted1 = state.items1.slice().sort((a, b) => b.value - a.value);
            },
            setShortestTime(state) {
                  state.items_sorted1 = state.items1.slice().sort((a, b) => a.post_long - b.post_long)
            },
            setMostStar(state) {
                  state.items_sorted1 = state.items1.slice().sort((a, b) => b.star - a.star);

            },
      }
})

export default SortReducer.reducer;
export const { setRelevant, setTopViews, setNewest, setTopSellers, setCheapest, setMostExpense, setShortestTime, setMostStar } = SortReducer.actions;