export function Sort({ sort_type, sort_name, dispatch }) {
      return (
            <div className='pointer text-no-wrap nav-font txt-sort-op '>
                  <button onClick={() => { dispatch({ type: sort_type }) }}>
                        <span>{sort_name}</span>
                  </button>
            </div>
      );
}
