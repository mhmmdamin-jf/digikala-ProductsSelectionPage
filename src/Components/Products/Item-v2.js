import { Link } from 'react-router-dom'
export function Item({ item }) {
      return (
            <div className='col-lg-3 item '>
                  <div className='d-flex flex-column product '>
                        <div>
                              <img className='img-fluid' src={item.image} />
                        </div>
                        <div className='d-flex flex-column'>

                              {item.post_type === 'free' ? <div className="m-1"><img src='/images/free-post.png' className="img-fluid h-15 m-1"></img><span>ارسال رایگان</span></div> :
                                    <div className="m-1"><p></p></div>}

                              <div>
                                    <h3 className='product'>{item.desc}</h3>
                              </div>
                              <div className='d-flex flex-row justify-content-between'>
                                    <div >
                                          <img className="m-1" src='/images/svgexport-32.svg' />
                                          <span>ارسال امروز</span>
                                    </div>
                                    <div>
                                          <span>{item.star}</span>
                                          <img src='/images/svgexport-33.svg' />

                                    </div>
                              </div>
                              <div className='d-flex d-row justify-content-end '>
                                    <span className=''>{item.value}</span>
                                    {item.value === null ? <p>ناموجود</p> : <img src='/images/svgexport-34.svg'></img>}

                              </div>
                        </div>
                  </div>
            </div>);
}
