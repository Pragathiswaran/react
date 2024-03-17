import Links from '../utils/logo.js';

const Search = () => {
    return(
        <div className="w-25 d-flex flex-column">
           <div className='position-relative '>
           <div className='position-fixed bg-black w-25'>
           <div className='me-4 mb-3'>
                <div className="mt-2 border-0 p-2 searchInput rounded-5 ps-3 ms-1">
                    {Links.otherLogos[0]}
                    <input type='text' placeholder='Search' className='searchInput border-0 text-white border-0 btx ps-2'/>
                </div>
            </div>
           </div>
           </div>
           <div className='mt-5'>
                <div className='bg-dark text-white mt-3 ps-2 py-2 w-80 rounded-4 mb-3'>
                    <div className='ps-2 py-2 pe-4'>
                        <p className='fs-5 text-bold lh-sm'>Subscribe to premium</p>
                        <p className='lh-sm'>Subscribe to unlock new features and if eligible, receive a share and add revenue </p>
                        <button className='btn btn-primary'>Subscribe</button>
                    </div>
                </div>
                <div className='text-white w-75 bg-dark p-2 rounded-4'>
                    <div>
                        <h5>What's happening</h5>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <p className='lh-1'>hello</p>
                            <p>hello</p>
                            <p>hello</p>
                        </div>
                        <div>menu</div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Search;