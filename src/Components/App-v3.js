import { useReducer } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import Footer from './Footer/Footer';
import Header from './Header/Header-v2';
import { Products } from './Products/Product-v3';
import { useKey } from './Custom-Hooks/useKey';
import { exitSearchBox, openSearchBox } from './Header/SearchBox/SeachBoxSlice';
import '../index.css';
import { useDispatch } from 'react-redux';

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
      items1: items_Array, sortby1: 1, items_sorted1: [], loading: false, items_filtered: [], filterOn: false
};
function Reducer(state, action) {
      switch (action.type) {
            case 'loading':
                  return ({ ...state, loading: false });
            case 'filter':
                  return ({ ...state, items_filtered: action.payload });
            default:
                  console.warn('reducer issue');
      }
}

export default function App() {
      const dispatcher = useDispatch();

      const [{ loading, sortby1, filter, items_sorted1, items_filtered }, dispatch] = useReducer(Reducer, initialData);
      useKey('escape', () => dispatcher(exitSearchBox()), false);
      useHotkeys('ctrl+q', (e) => { e.preventDefault(); dispatcher(openSearchBox()); });
      return (
            <div className='w-full' >
                  <Header />
                  <Products items1={items_Array} sortby1={sortby1} items_sorted={items_sorted1} loading={loading} filter={filter} dispatch={dispatch} items_filtered={items_filtered} />
                  <Footer />
            </div>
      );
}

