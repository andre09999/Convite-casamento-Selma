import { Route, BrowserRouter, Routes } from 'react-router-dom';
import login from './login';
import home from './home';

const rotas = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route component={ login } path='/' exact/>
        <Route component={ home } path='/home' />
        </Routes>
        </BrowserRouter>
    )
}
export default rotas;