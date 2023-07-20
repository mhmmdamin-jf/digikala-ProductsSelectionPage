
export function Sort({ setSortby, sortby, sort_type, sort_name }) {

      return (
            <div className='pointer text-no-wrap nav-font txt-sort-op '>
                  <button onClick={() => { setSortby(sort_type); }}>
                        <span className={`${sortby === sort_type ? 'txt-red' : ''}`}> {sort_name}</span>
                  </button>
            </div>
      );
}
