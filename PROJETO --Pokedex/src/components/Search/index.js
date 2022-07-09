
import './search.css';
import search from '../../assets/icons/search.svg';

function Search() {
    return(
        <div className='main'>
            <form>
                <input type="text" placeholder="Bucar Pokemon..." />
                <img src={search} alt="Bucar Pokemon..." />
            </form>
        </div>    
    );
}

export default Search;