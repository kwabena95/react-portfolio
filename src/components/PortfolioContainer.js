import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './Footer';
import { projects } from '../data';

const PortfolioContainer = () => {
    const [currentPage, pageChangeHandler] = useState("Home");

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />
            case 'Contact':
                return <Contact />;
            case 'Portfolio':
                return <Portfolio projects={projects} />;
            case 'Resume':
                return <Resume />
            default:
                return <Home />
        }
    }
    document.title = currentPage;
    return (
        <div>
            <NavTabs currentPage={currentPage} pageChangeHandler={pageChangeHandler} />
            <div>{renderPage()}</div>
            <Footer />
        </div>
    )
}

export default PortfolioContainer

