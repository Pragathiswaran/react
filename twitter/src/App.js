import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faBell, faEnvelope, faSquare, faUser,faCommentDots } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { Button } from "bootstrap";
import './css/custom_padding.css';
import images from './image/index.js';

function App() {

  // const links =['Home', 'Explore', 'Notification', 'Message', 'Grok', 'List', 'Communities', 'Premium', 'Profile', 'More'];
  // const logo = [<FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}} />,
  //               <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />,
  //               <FontAwesomeIcon icon={faBell} style={{color: "#ffffff",}} />,
  //               <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} />,
  //               <FontAwesomeIcon icon={faSquare} style={{color: "#ffffff",}} />,
  //               <span class="material-symbols-outlined">description</span>,
  //               <span class="material-symbols-outlined">group</span>,
  //               <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} />,
  //               <img src={images.Tlogo} alt="Image 3" className="custom-image"/>,
  //               <FontAwesomeIcon icon={faCommentDots} style={{color: "#ffffff",}} />
  //             ] ;

  const links = [
    {
      title: 'Home',
      logo:<FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}} />
    },
    {
      title: 'Explore',
      logo:<FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
    },
    {
      title:'Notification',
      logo:<FontAwesomeIcon icon={faBell} style={{color: "#ffffff",}} />
    },
    {
      title:'Message',
      logo:<FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} />
    },
    {
      title:'Grok',
      logo:<FontAwesomeIcon icon={faSquare} style={{color: "#ffffff",}} />,
    },
    {
      title:'List',
      logo:<span class="material-symbols-outlined">description</span>,
    },
    {
      title:'Communities',
      logo:<span class="material-symbols-outlined">group</span>,
    },
    {
      title:'Premium',
      logo:<img src={images.Tlogo} alt="Image 3" className="custom-image"/>,
    },
    {
      title:'Profile',
      logo:<FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} />,
    },
    {
      title:'More',
      logo:<FontAwesomeIcon icon={faCommentDots} style={{color: "#ffffff",}} />,
    }
  ]
    
  
  return (
   <>
   <div className="d-flex justify-content-between">
   <div className="c-p-l mt-2">
      <div className="pb-2">
        <img src={images.Tlogo} className="custom-image" />
      </div>
      <div className="d-flex pt-2">
        <div className="d-flex flex-column ">
        {
          links.map((links, index)=>(
            <div key={index} className="d-flex text-white pt-2 pr-2 c-t-s">
              <div className="pt-2">{links.logo}</div>
              <div className="pt-2 px-4">{links.title}</div>
            </div>
          ))
        } 
        </div>
      </div>
    <div className='text-white pt-4'>
      <button className='btn btn-primary btn-post'>Post</button>
    </div>
    <div className='text-white pt-4 d-flex'>
      <div className="h2 p-1">{links[8].logo}</div>
      <div>
        <div className="px-5">Pragathiswaran</div>
        <div className="px-5">@pragathiswaran</div>
      </div>
    </div>  
  </div>
  <div className="h-100 border border-secondary w-40">
    <div className="d-flex text-white">
      <div className="w-25 px-90 py-3 h6">foryou</div>
      <div className="w-25 px-90 py-3 h6">follow</div>
      <div className="w-10 end-100">set</div>
    </div>
   </div>
    <div className="w-25"></div>
  </div>
   </>
  );
}



export default App;
