import React, {useState} from 'react';
import links from '../utils/logo.js';
const Main = () => {

const [addClass, UseAddClass] = useState(false);

    return(
        <>
        <div className="w-40 border border-top-0 border-bottom-0">
            <div className="position-fixed z-3 text-white d-flex border-bottom border-opacity-25 w-35 bg-black">
                <div className="py-3 px-5 text-center w-50">For you</div>
                <div className="py-3 px-5 text-center w-50">Following</div>
                <div className="w-10 py-3">{links.otherLogos[1]}</div>
            </div>
            <div className="border-bottom border-opacity-25 mt-6 px-4 ">
            <div className="d-flex fs-4 pb-3">
                <div className="">{links.navbar[8].logo}</div>
                    <div className="ps-3 w-100">
                        <input type="text" className="bg-black btx border-0 text-white ps-1" placeholder="What is happening ?!" 
                        onClick={()=> UseAddClass(!addClass)}  />
                        {addClass ?
                        <>
                            <div className="fs-6 text-primary d-flex ps-2 pt-2 ">
                                <div className="pe-2"> 
                                    {links.otherLogos[2]}
                                </div>
                                <p>Everyone can reply</p>
                            </div>
                            <div>
                                <div className="border-bottom l-5"></div>
                            </div>
                        </> :""
                        }  
                    </div>
                </div>
                <div className="d-flex justify-content-between pb-2 ps-5">
                                <div className="d-flex">
                    {
                        links.section.map((section, index)=>(
                        <div key={index} className="d-flex">
                            <div className="p-2">{section}</div>
                        </div>
                        ))
                    }
                </div>
                <div>
                    <button className="btn btn-primary">post</button>
                </div>
            </div>
            </div>
            <div className='d-flex justify-content-center align-content-center border-bottom py-3'>
                <span className='text-primary'>Show 105 post</span>
            </div>
            <div className='text-white p-3'>
            <div>
               <div className='d-flex justify-content-between '>
                <div className='d-flex'>
                        <div className='fs-4'>{links.navbar[8].logo}</div>
                        <div>
                            <div className='d-flex'>
                                <div className='ps-2'>Name</div>
                                <div className='ps-2'>Id</div>
                                <div className='ps-2'>Time</div>
                            </div>
                            <div>
                                <div className='ps-2'>Caption</div>
                            </div>
                        </div>
                    </div>
                    <div>{links.otherLogos[3]}</div>
                </div>
                <div className='ps-5 pt-2 h-100'>
                    <div className="border rounded-4 px-5 text-center w-100">
                       <div className='W-100'>
                            <img src="https://images.unsplash.com/photo-1555530740-3d67fab132ae?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBvZiUyMHRoZSUyMGRheXxlbnwwfHwwfHx8MA%3D%3D"
                            className='w-100 h-100 d-inline-block' style={{backgroundSize:"cover"}}/>  
                       </div>
                    </div>
                    <div className='pt-3 fs-6'>
                        <p>hello</p>
                    </div>
                </div>
                <div className='d-flex justify-content-around fs-8 border-bottom w-100 mb-5'>
                   {
                    links.postIcon.icons.map((icon,index) =>(
                        <div key={index}>{icon.icon}{icon.title}</div>
                    ))
                   }
                    <div className='d-flex ps-3 justify-content-between'>
                        {
                            links.postIcon.subicon.map((icon,index) =>(
                                <div key={index}className='pe-1'>{icon}</div>
                            ))
                        }
                    </div>
                </div>
                 
               </div>
            </div>
        </div>
        </>
    )
}

export default Main;

