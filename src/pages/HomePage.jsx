import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Dowload from '../components/Dowload'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Dowload />
            <AboutUs />
            <Footer />
        </div>
    )
}

export default HomePage;