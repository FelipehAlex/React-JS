
import Header from "../../components/Header";
import Search from '../../components/Search';
import PokeList from "../PokeList";

function Home() {
    return(
        <div>
            <Header/>
            <Search/>
            <PokeList/>
        </div>
    );
}

export default Home;