export function Footer_dgItems({ children, image }) {
      return (
            <div className='d-flex flex-column text-center mt-3'>
                  <img className='align-self-center footer-img' src={image} />
                  <p className='footer-txt'>{children}</p>
            </div>);
}
