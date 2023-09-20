export function Sort({ sort_type, sort_name, dispatch }) {
      return (
            <div className='pointer text-no-wrap nav-font txt-sort-op txt-underline-op '>
                  <button onClick={() => { dispatcher({ type: sort_type }) }}>
                        <span>{sort_name}</span>
                  </button>
            </div>
      );
}
