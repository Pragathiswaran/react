import images from '../image/index.js';
import links from '../utils/logo.js';
import React, {useState} from 'react';
import { faGear,faEarthAsia,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Main = () => {

const [addClass, UseAddClass] = useState(false);

  const handler = () => {
    console.log("clicked");
    UseAddClass(!addClass)
  }
    return(
        <>
        <div className="w-40 border border-top-0 border-bottom-0">
            <div className="text-white d-flex border-bottom border-opacity-25 w-100">
                <div className="py-3 px-90 text-center w-50">For you</div>
                    <div className="py-3 px-90 w-50">Following</div>
                    <div className="w-10 py-3"><FontAwesomeIcon icon={faGear} style={{color: "#ffffff",}} /></div>
                </div>
             <div className="border-bottom border-opacity-25 mt-3 px-4">
                <div className="d-flex fs-4 pb-3">
                    <div className="">{links.navbar[links.navbar.length - 1].logo}</div>
                        <div className="ps-3 w-100">
                            <input type="text" className="bg-black btx border-0 text-white ps-1" placeholder="What is happening ?!" 
                            onClick={handler}  />
                            {addClass ?
                            <>
                            <div className="fs-6 text-primary d-flex ps-2 pt-2 ">
                                <div className="pe-2"> 
                                    <FontAwesomeIcon icon={faEarthAsia}/>
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
        </div>
        </>
    )
}

export default Main;

