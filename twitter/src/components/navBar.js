import images from '../image/index.js';
import links from '../utils/logo.js';
const navbar= () =>{
    return(
        <>
        <div className="c-p-l mt-2 w-20">
           <div className='position-fixed'>
           <div className="pb-2 mt-2">
                <img src={images.Tlogo} className="custom-image" />
            </div>
            <div className="d-flex pt-2">
                <div className="d-flex flex-column ">
                {
                    links.navbar.map((links, index)=>(
                    <div key={index} className="d-flex fs-45 text-white pt-2 c-t-s">
                        <div className="pt-2">{links.logo}</div>
                        <div className="pt-2 px-4">{links.title}</div>
                    </div>
                    ))
                } 
                </div>
            </div>
            <div className='text-white pt-4'>
                <button className='btn btn-post'>Post</button>
            </div>
            <div className='text-white pt-5 d-flex'>
                <div className="h2 p-1">{links.navbar[8].logo}</div>
                <div>
                    <div className="px-5">Pragathiswaran</div>
                    <div className="px-5">@pragathiswaran</div>
                </div>
            </div>  
           </div>
        </div>
        </>
    )
}

export default navbar;
