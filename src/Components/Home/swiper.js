import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Scrollbar, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/less/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import styles from './Swiper.module.css';
import { Link } from 'react-router-dom';
//i prefer to use useState instead , because i think the states and actions of this page doesnt update repeatedly.
export function HomeSlider({ slides }) {
      const handleSlideImages = () => {
            slides.map((elImage, i) => {
                  const el = document.querySelector(`#slide${i + 1}`).firstElementChild;
                  if (el) el.setAttribute('src', elImage);
            })
      }
      useEffect(function () {
            slides && handleSlideImages();
      }, [slides])
      return (
            <div className={styles.slideContainer}>
                  <Swiper
                        className={styles.slider}
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        slidesPerView={1}
                        navigation={{ nextEl: '#btnNext', prevEl: '#btnPrev' }}
                        loop={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: true, pauseOnMouseEnter: true }}
                  >
                        <SwiperSlide id='slide1' className={styles.slideSlide}><img alt='22' src="https://ltgxycogvlycfencuqdj.supabase.co/storage/v1/object/public/homeSlides/1.png" /></SwiperSlide>
                        <SwiperSlide id='slide2' className={styles.slideSlide}> <img src="https://ltgxycogvlycfencuqdj.supabase.co/storage/v1/object/public/homeSlides/2.png?t=2023-10-31T14%3A34%3A14.004Z" /></SwiperSlide>
                        <SwiperSlide id='slide3' className={styles.slideSlide}> <img src="https://ltgxycogvlycfencuqdj.supabase.co/storage/v1/object/public/homeSlides/3.png?t=2023-10-31T14%3A34%3A25.183Z" /></SwiperSlide>
                        <SwiperSlide id='slide4' className={styles.slideSlide}> <img src="https://ltgxycogvlycfencuqdj.supabase.co/storage/v1/object/public/homeSlides/4.png?t=2023-10-31T14%3A34%3A35.833Z" /></SwiperSlide>
                        <div className={styles.navBtnContainer}>
                              <button id='btnPrev' className={styles.btn}><img src='images/slideBefore.svg' /></button>
                              <button id='btnNext' className={styles.btn}><img src='images/slideNext.svg' /></button>
                        </div>
                  </Swiper >

            </div >
      );
}
export function HomeSwiper({ swipers }) {
      const handleSwiperImages = () => {
            swipers.map((elObj, i) => {
                  const elSwiper = document.querySelector(`#swiper${i + 1}`).firstElementChild.childNodes;
                  if (elSwiper) {
                        elSwiper[0].setAttribute('src', elObj.img);
                        const elPrice = elSwiper[1].childNodes;
                        elPrice[1].firstChild.data = elObj.offer;
                        elSwiper[2].textContent = elObj.base;
                        elPrice[0].textContent = `${Math.ceil(((elObj.base - elObj.offer) / elObj.offer) * 100)}%`;
                  };
            }
            )
      }
      useEffect(function () {
            swipers && handleSwiperImages();
      }, [swipers])
      return (
            <div
                  className={`${styles.homeSwiper} swiperContainer`}
            >
                  <Swiper className='swiper'
                        autoplay={{ delay: 2500, stopOnLastSlide: false, pauseOnMouseEnter: true, disableOnInteraction: true }}
                        modules={[Pagination, A11y, Scrollbar, Autoplay]}
                        scrollbar={{ draggable: true, hide: true }}
                        breakpoints={{
                              576: {
                                    width: 576,
                                    slidesPerView: 3
                              },
                              768: {
                                    width: 768,
                                    slidesPerView: 4
                              },
                              992: {
                                    width: 992,
                                    slidesPerView: 6
                              },
                        }}
                        spaceBetween={15}
                        watchOverflow={false}
                  >
                        <SwiperSlide id='swiper0'>
                              <div className={styles.swiperSlideFirst}>
                                    <h2>پیشنهاد شگفت انگیز</h2>
                                    <img src='images/homeSwiper/box.webp' />
                                    <a className='pointer'>مشاهده همه <img src='product-s-images/svgexport-18.svg' /></a>
                              </div>
                        </SwiperSlide>

                        <SwiperSlide id='swiper1'>
                              <Link to={'/mobiles/1'} className={styles.swiperSlide}>
                                    <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                    <div className={styles.itemDesc}>
                                          <span className={styles.itemsDisc}>20%</span>
                                          <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                    </div>
                                    <p className={`${styles.price} me-5`}>200,000</p>
                              </Link>
                        </SwiperSlide>


                        <SwiperSlide id='swiper2'>
                              <Link to={'/mobiles/1'} className={styles.swiperSlide}>
                                    <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                    <div className={styles.itemDesc}>
                                          <span className={styles.itemsDisc}>20%</span>
                                          <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                    </div>
                                    <p className={`${styles.price} me-5`}>200,000</p>
                              </Link>
                        </SwiperSlide>

                        <SwiperSlide id='swiper3'>
                              <Link to={'/mobiles/1'} className={styles.swiperSlide}>
                                    <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                    <div className={styles.itemDesc}>
                                          <span className={styles.itemsDisc}>20%</span>
                                          <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                    </div>
                                    <p className={`${styles.price} me-5`}>200,000</p>
                              </Link>
                        </SwiperSlide>

                        <SwiperSlide id='swiper4'>
                              <Link to={'/mobiles/1'} className={styles.swiperSlide}>
                                    <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                    <div className={styles.itemDesc}>
                                          <span className={styles.itemsDisc}>20%</span>
                                          <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                    </div>
                                    <p className={`${styles.price} me-5`}>200,000</p>
                              </Link>
                        </SwiperSlide>

                        <SwiperSlide id='swiper5'>
                              <Link to={'/mobiles/1'} className={styles.swiperSlide}>
                                    <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                    <div className={styles.itemDesc}>
                                          <span className={styles.itemsDisc}>20%</span>
                                          <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                    </div>
                                    <p className={`${styles.price} me-5`}>200,000</p>
                              </Link>
                        </SwiperSlide>

                        <SwiperSlide id='swiper6'>
                              <Link to={'/mobiles/1'} className={styles.swiperSlide}>
                                    <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                    <div className={styles.itemDesc}>
                                          <span className={styles.itemsDisc}>20%</span>
                                          <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                    </div>
                                    <p className={`${styles.price} me-5`}>200,000</p>
                              </Link>
                        </SwiperSlide>

                        <SwiperSlide id='swiper7'>
                              <Link to={'/mobiles/1'} className={styles.swiperSlide}>
                                    <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                    <div className={styles.itemDesc}>
                                          <span className={styles.itemsDisc}>20%</span>
                                          <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                    </div>
                                    <p className={`${styles.price} me-5`}>200,000</p>
                              </Link>
                        </SwiperSlide>

                        <SwiperSlide id='swiper8'>
                              <Link to={'/mobiles/1'} className={styles.swiperSlide}>
                                    <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                    <div className={styles.itemDesc}>
                                          <span className={styles.itemsDisc}>20%</span>
                                          <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                    </div>
                                    <p className={`${styles.price} me-5`}>200,000</p>
                              </Link>
                        </SwiperSlide>

                        <SwiperSlide id='swiper9'>
                              <Link to={'/mobiles/1'} className={styles.swiperSlide}>
                                    <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                    <div className={styles.itemDesc}>
                                          <span className={styles.itemsDisc}>20%</span>
                                          <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                    </div>
                                    <p className={`${styles.price} me-5`}>200,000</p>
                              </Link>
                        </SwiperSlide>


                        <SwiperSlide id='swiper10'>
                              <Link to={'/mobiles/1'} className={styles.swiperSlide}>
                                    <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                    <div className={styles.itemDesc}>
                                          <span className={styles.itemsDisc}>20%</span>
                                          <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                    </div>
                                    <p className={`${styles.price} me-5`}>200,000</p>
                              </Link>
                        </SwiperSlide>
                        <SwiperSlide id='swiper10'>
                              <Link to={'/mobiles/1'} className={styles.swiperSlide}>
                                    <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                    <div className={styles.itemDesc}>
                                          <span className={styles.itemsDisc}>20%</span>
                                          <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                    </div>
                                    <p className={`${styles.price} me-5`}>200,000</p>
                              </Link>
                        </SwiperSlide><SwiperSlide id='swiper10'>
                              <Link to={'/mobiles/1'} className={styles.swiperSlide}>
                                    <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                    <div className={styles.itemDesc}>
                                          <span className={styles.itemsDisc}>20%</span>
                                          <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                    </div>
                                    <p className={`${styles.price} me-5`}>200,000</p>
                              </Link>
                        </SwiperSlide><SwiperSlide id='swiper10'>
                              <Link to={'/mobiles/1'} className={styles.swiperSlide}>
                                    <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                    <div className={styles.itemDesc}>
                                          <span className={styles.itemsDisc}>20%</span>
                                          <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                    </div>
                                    <p className={`${styles.price} me-5`}>200,000</p>
                              </Link>
                        </SwiperSlide>

                        {/* 


                        
                              <SwiperSlide id='swiper2'>
                                    <div className={styles.swiperSlide}>
                                          <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                          <div className={styles.itemDesc}>
                                                <span className={styles.itemsDisc}>20%</span>
                                                <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                          </div>
                                          <p className={`${styles.price} me-5`}>200,000</p>
                                    </div>
                              </SwiperSlide>
                        <Link to={'/mobiles/1.1'}>
                              <SwiperSlide id='swiper3'>
                                    <div className={styles.swiperSlide}>
                                          <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                          <div className={styles.itemDesc}>
                                                <span className={styles.itemsDisc}>20%</span>
                                                <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                          </div>
                                          <p className={`${styles.price} me-5`}>200,000</p>
                                    </div>
                              </SwiperSlide>
                        
                        
                              <SwiperSlide id='swiper4'>
                                    <div className={styles.swiperSlide}>
                                          <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                          <div className={styles.itemDesc}>
                                                <span className={styles.itemsDisc}>20%</span>
                                                <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                          </div>
                                          <p className={`${styles.price} me-5`}>200,000</p>
                                    </div>
                              </SwiperSlide >                   
                              <SwiperSlide id='swiper5'>
                                    <div className={styles.swiperSlide}>
                                          <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                          <div className={styles.itemDesc}>
                                                <span className={styles.itemsDisc}>20%</span>
                                                <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                          </div>
                                          <p className={`${styles.price} me-5`}>200,000</p>
                                    </div>
                              </SwiperSlide>                   
                              <SwiperSlide id='swiper6'>
                                    <div className={styles.swiperSlide}>
                                          <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                          <div className={styles.itemDesc}>
                                                <span className={styles.itemsDisc}>20%</span>
                                                <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                          </div>
                                          <p className={`${styles.price} me-5`}>200,000</p>
                                    </div>
                              </SwiperSlide> <SwiperSlide id='swiper7'>
                                    <div className={styles.swiperSlide}>
                                          <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                          <div className={styles.itemDesc}>
                                                <span className={styles.itemsDisc}>20%</span>
                                                <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                          </div>
                                          <p className={`${styles.price} me-5`}>200,000</p>
                                    </div>
                              </SwiperSlide>   
                        
                              <SwiperSlide id='swiper8'>
                                    <div className={styles.swiperSlide}>
                                          <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                          <div className={styles.itemDesc}>
                                                <span className={styles.itemsDisc}>20%</span>
                                                <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                          </div>
                                          <p className={`${styles.price} me-5`}>200,000</p>
                                    </div>
                              </SwiperSlide>  
                        
                              <SwiperSlide id='swiper9'>
                                    <div className={styles.swiperSlide}>
                                          <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                          <div className={styles.itemDesc}>
                                                <span className={styles.itemsDisc}>20%</span>
                                                <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                          </div>
                                          <p className={`${styles.price} me-5`}>200,000</p>
                                    </div>
                              </SwiperSlide>
                        
                              <SwiperSlide id='swiper10'>
                                    <div className={styles.swiperSlide}>
                                          <img className={styles.itemImg} src='images/homeSwiper/3caa26c560a9d0c01ae998a51db435e18b8f03b6_1674557873.webp' />
                                          <div className={styles.itemDesc}>
                                                <span className={styles.itemsDisc}>20%</span>
                                                <p className={styles.offer}>169,000<img src='images/svgexport-34.svg'></img></p>
                                          </div>
                                          <p className={`${styles.price} me-5`}>200,000</p>
                                    </div>
                              </SwiperSlide> */}
                  </Swiper >
            </div >
      );
}