import './index.css';
import Header from './components/Header/Header';
import WelcomeBlock from './components/WelcomeBlock/WelcomeBlock';
import ServiceBlock from './components/ServiceBlock/ServiceBlock';
import PortfolioBlock from './components/Portfolio/PortfolioBlock';
import AllImports from './components/Portfolio/AllGallery/AllImports';

function App() {
    return (
        <>
            <Header />
            <WelcomeBlock />
            <ServiceBlock />
            <PortfolioBlock />
            <AllImports />
        </>
    );
}

export default App;
