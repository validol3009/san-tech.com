import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from './pages/MainContent/MainContent';
import Services from './pages/Services/Services';
import About from './pages/About/About';

const App = () => {
    return (
        <div className='wrapper'>
            <Header />
            <Routes>
                <Route path='/' element={<MainContent />} />
                <Route path='/services' element={<Services />} />
                <Route path='/aboutus' element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
