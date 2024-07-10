import Slider, { HomeSlider, HomeSwiper, Swiper } from "./swiper"
import styles from './Home.module.css'
import { useEffect, useState } from "react";
import { getHomeItemsData } from "../../services/apiHomeItems";
import { Link, useLocation } from 'react-router-dom'
const data = [
      {
            image: 'images/homeFeatures/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png',
            text: 'دیجیکالا جت',
            link: ''
      },
      {
            image: 'images/homeFeatures/ac127167132653d14c758748b07824a6a7643a31_1663444619.png',
            text: 'دیجی پی',
            link: ''
      }, {
            image: 'images/homeFeatures/afb3c938fd3149d7587b59919bfc500a461693a6_1695628244.png',
            text: 'سوپر مارکت',
            link: ''
      }, {
            image: 'images/homeFeatures/53189ead935d8d5492799988577646d159c13d17_1695888594.png',
            text: 'خرید برنده',
            link: ''
      }, {
            image: 'images/homeFeatures/e8c1c372a304dc7c6ed600a6d4eb017f2aaea8cd_1697297561.png',
            text: 'گیم نت',
            link: ''
      }, {
            image: 'images/homeFeatures/d3ef1e7e6dd2189d4c1468c8998b24b4ec5bcc45_1683402274.png',
            text: 'لاکی باکس',
            link: ''
      },
      {
            image: 'images/homeFeatures/bfcafaf7f0afffbfd326adc48e29e3449dd69910_1688462197.png',
            text: 'ارسال امروز',
            link: ''
      }
];

function Home() {
      const { pathname } = useLocation();
      useEffect(function () {
            window.scrollTo(0, 0)
      }, [pathname])
      //i prefer to use useState instead , because i think the states and actions of this page doesnt update repeatedly.
      const [homeData, setHomeData] = useState({});
      useEffect(function () {
            const fetchHomeData = async () => {
                  const res = await getHomeItemsData();
                  return new Promise(() => {
                        try { setHomeData(res[0]); }
                        catch (err) { console.log(err) }
                  });
            }
            fetchHomeData();
      }, [setHomeData, getHomeItemsData]);
      return (
            <>
                  <Link to={'/mobiles'}>
                        <HomeSlider slides={homeData.homeSlides} swipers={homeData.homeSwiper} />
                  </Link>
                  <div className={`${styles.featureBox} row justify-content-around gap-1 `}>
                        {data.map(el => (
                              <div className={`${styles.feature} col-2 col-lg-1 my-3 pointer`}>
                                    <img src={el.image} />
                                    <p>{el.text}</p>
                              </div>))}
                  </div>
                  <HomeSwiper swipers={homeData.homeSwiper} />
                  <div className={`${styles.MoreLinksConteainer} row justify-content-evenly flex-wrap`}>
                        <img className={`${styles.homeLink} col-5 col-lg-2 `} src="images/homeMoreLinks/64bdd81d1bacfdc317c7d0419231aa00de630c06_1697535980.webp" />
                        <img className={`${styles.homeLink} col-5 col-lg-2 `} src="images/homeMoreLinks/3e2bef5e06b9e2f37cb101bd6b57f226bfb54bf4_1697443635.webp" />
                        <img className={`${styles.homeLink} col-5 col-lg-2 `} src="images/homeMoreLinks/9ee9d49fb91c875ca390d29d45decd25d7d1097b_1697293242.webp" />
                        <img className={`${styles.homeLink} col-5 col-lg-2 `} src="images/homeMoreLinks/d3225e9e3cb05d2eb7fc0d4eb88aac1548182086_1697293379.webp" />
                  </div>
                  <div className={styles.byCategory}>
                        <h4>خرید بر اساس دسته بندی</h4>
                        <div className='row justify-content-around w-75 gap-4 mx-md-auto'>
                              {homeData.homeCategory && homeData.homeCategory.map(el =>
                                    <div className={`${styles.CategoryItem} col-1 my-4`}>
                                          <Link to={el.link}>
                                                <img src={el.image} />
                                                <p className="text-dark">{el.title}</p>
                                          </Link>
                                    </div>
                              )}
                        </div>
                  </div >
                  <Link to={'/mobiles'} className={`${styles.MoreLinksConteiner} row justify-content-evenly mb-4`}>
                        <img className={`${styles.homeLink} col-10 col-lg-5`} src="images/homeMoreLinks/e84e3de36baa1cb04e98abb3cb3cac270617de78_1697891520.webp"></img>
                        <img className={`${styles.homeLink} col-10 col-lg-5`} src="images/homeMoreLinks/e84e3de36baa1cb04e98abb3cb3cac270617de78_1697891520.webp"></img>
                  </Link>
                  <div className={`${styles.recommendedProducts} mx-auto row justify-content-evenly mb-4 gap-4 `}>
                        {
                              homeData.recommendedProducts && homeData.recommendedProducts.map((recommendedEl) =>
                                    <div className={`${styles.recommendedItem} col-8 border border-1 rounded-3 p-1 col-lg-3 row`}>
                                          <h5 className="col-12">{recommendedEl.title}</h5>
                                          <p className="col-12">بر اساس بازدید های شما</p>
                                          <div className={`${styles.productsContainer} mx-auto`}>
                                                {
                                                      recommendedEl.images.map(img =>
                                                            <Link to={'/mobiles/1'} className="col-6">
                                                                  <img className={styles.recommendedImg} src={img} />
                                                            </Link>
                                                      )
                                                }
                                          </div>
                                          <Link to={'/mobiles'} className="pointer text-info txt-small text-center">مشاهده<img style={{ width: '7%' }} src="product-s-images/svgexport-18.svg" /></Link>
                                    </div>
                              )
                        }
                  </div >
                  <div className={`${styles.MoreLinksConteainer} text-center mb-5`}>
                        <img className={`${styles.homeLink} w-95`} src="images/homeMoreLinks/5e1d138abe300a5c6b9b35e18872c8b1a864d591_1697553085.webp" />
                  </div>
                  <div className={`${styles.cardContainer} row justify-content-evenly my-5 `}>
                        {homeData.homeSuggestedPages && homeData.homeSuggestedPages.map(el =>
                              <div key={el.text} className={`${styles.card} col-8 col-lg-2 `}>
                                    <img src={el.img} />
                                    <p>{el.text}</p>
                              </div>
                        )}
                  </div >
            </>
      )
}

export default Home