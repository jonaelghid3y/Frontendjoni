
import LanguageProvider from './Components/LanguageProvider'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';


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
