import { useState, useEffect, useReducer } from 'react';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Products } from './Products/Products-v2';
import '../index.css';
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
const initialData = {
  items1: items_Array, sortby1: 'relavent', filter: {
    dgplusexpress: false, sellerexpress1: false, limitvalue: { min: 0, max: 99999999 }
    , available1: false, availableInDgkala: false
  }, items_sorted1: [], loading: false, items_filtered: [], filterOn: false
};

function Reducer(state, action) {
  switch (action.type) {
    case 'resetFilters':
      return ({ ...state, filter: initialData.filter })
    case "setavailableInDgkala":
      return ({ ...state, filter: { ...state.filter, availableInDgkala: !state.filter.availableInDgkala } })
    case 'setDgPlusExpress':
      return ({ ...state, filter: { ...state.filter, dgplusexpress: !state.filter.dgplusexpress } });
    case 'setSetSellerExpress':
      return ({ ...state, filter: { ...state.filter, sellerexpress1: !state.filter.sellerexpress1 } });
    case 'setLimitValue':
      return ({ ...state, filter: { ...state.filter, limitvalue: action.payload } });
    case 'setAvailable':
      console.log(state.filter.available1)
      return ({ ...state, filter: { ...state.filter, available1: !state.filter.available1 } });
    case 'loading':
      return ({ ...state, loading: false });
    case 'topViews':
      return ({ ...state, items_sorted1: state.items1.slice().sort((a, b) => b.views - a.views) });
    case 'relevant':
      return ({ ...state, items_sorted1: state.items1.slice() });
    case 'newest':
      return ({ ...state, items_sorted1: state.items1.slice().sort((a, b) => b.date - a.date) })
    case 'setValuemin':
      return ({ ...state, filter: { ...state.filter, limitvalue: { ...state.filter.limitvalue, min: action.payload } } })
    case 'setValuemax':
      return ({ ...state, filter: { ...state.filter, limitvalue: { ...state.filter.limitvalue, max: action.payload } } })
    case 'topSellers':
      return ({ ...state, items_sorted1: state.items1.slice().sort((a, b) => b.sells - a.sells) })
    case 'cheapest':
      return ({ ...state, items_sorted1: state.items1.slice().sort((a, b) => a.value - b.value) })
    case 'mostExpense':
      return ({ ...state, items_sorted1: state.items1.slice().sort((a, b) => b.value - a.value) })
    case 'shortestTime':
      return ({ ...state, items_sorted: state.items1.slice().sort((a, b) => a.post_long - b.post_long) })
    case 'mostStar':
      return ({ ...state, items_sorted1: state.items1.slice().sort((a, b) => b.star - a.star) })
    case 'filter':
      return ({ ...state, items_filtered: action.payload });
    default:
      console.warn('reducer issue');
  }
}
export default function App() {
  const [{ loading, sortby1, items1, filter, items_sorted1, items_filtered }, dispatch] = useReducer(Reducer, initialData);
  return (
    <div className=' w-full ' >
      <Header />
      <Products sortby1={sortby1} items_sorted={items_sorted1} loading={loading} filter={filter} dispatch={dispatch} items_filtered={items_filtered} />
      <Footer />
    </div>
  );
}

