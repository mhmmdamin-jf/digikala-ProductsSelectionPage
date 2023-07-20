export function Download() {
      return (
            <div className="row app-download justify-content-end align-items-center p-2">
                  <div className="col-sm-12 col-xl-6">
                        <div className=' row   justify-content-center '>
                              <div className='col-sm-12 col-md-12 ms-xl-auto  w-30 mb-sm-2'>
                                    <img src='images/footerlogo2.png' className='w-30'></img>
                                    <span className='text-white mx-1'>دانلود اپلیکیشن دیجیکالا</span>
                              </div>
                        </div>
                  </div>
                  <div className="col-sm-12 col-xl-5 ">
                        <div className="row justify-content-center">
                              <App_links image={'images/coffe-bazzar.svg'} />
                              <App_links image={'images/myket.svg'} />
                              <App_links image={'images/sib-app.svg'} />
                        </div>
                  </div>
                  <div className="col-sm-12 col-xl-1 text-center">
                        <div className="row justify-content-center">
                              <App_links image={'images/More.svg'} />
                        </div>
                  </div>
            </div >

      );
}
function App_links({ image }) {
      return (
            <div className='col-sm-3 col-lg-3 mx-lg-3 '>
                  <a>
                        <img src={image}></img>
                  </a>
            </div>
      );
}
