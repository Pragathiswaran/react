import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faBell, faEnvelope, faSquare, faUser,faCommentDots,faGear,faImage,faGift,faList ,faFaceSmile, faCalendar,faLocationDot, faEarthAsia} from '@fortawesome/free-solid-svg-icons';
import images from '../image/index.js';

    const links = {
        navbar:[
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
       ],
       
       section: [
                <FontAwesomeIcon icon={faImage} className="text-primary"/>,
                <FontAwesomeIcon icon={faGift} className="text-primary"/>,
                <FontAwesomeIcon icon={faList} className="text-primary"/>,
                <FontAwesomeIcon icon={faFaceSmile} className="text-primary"/>,
                <FontAwesomeIcon icon={faCalendar} className="text-primary"/>,
                <FontAwesomeIcon icon={faLocationDot} className="text-primary"/>,
      ]
      }


export default links;