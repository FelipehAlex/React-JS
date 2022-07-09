
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;