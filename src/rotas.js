import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login'; // Certifique-se de que o caminho do componente está correto
import Home from './Home'; // Certifique-se de que o caminho do componente está correto

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path='/' exact />
                <Route element={<Home />} path='/home' />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
