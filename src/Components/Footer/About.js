export function About({ About_txt }) {

      return (
            <div className='col-3'>
                  <div>
                        {About_txt.header}
                  </div>
                  <div className='footer2-txt'>
                        <ul className="py-3">
                              {(About_txt.links).map(link => <li>
                                    <a>{link}</a>
                              </li>)}
                        </ul>
                  </div>
            </div>
      );
}
