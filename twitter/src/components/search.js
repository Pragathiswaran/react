import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGear,faEarthAsia,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    return(
        <div className="w-25">
            <div className='me-4'>
                <div className="mt-2 border-0 p-2 searchInput rounded-5 ps-3 ms-1">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-secondary'/>
                    <input type='text' placeholder='Search' className='searchInput border-0 text-white border-0 btx ps-2'/>
                </div>
            </div>
        </div>
    )
}

export default Search;