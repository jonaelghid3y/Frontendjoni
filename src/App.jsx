

import Header from './Header'
import Hemcontainer from './Hemcontainer'
import Footer from './Footer'
import LanguageProvider from './LanguageProvider'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './Projects';


function App() {
    return (
        <LanguageProvider>
            <div className="Maincontainer">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Hemcontainer />} />
                        <Route path="/Projects" element={<Projects />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>



            </div>
        </LanguageProvider>
    )
}

export default App
