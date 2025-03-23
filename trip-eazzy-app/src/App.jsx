import "./App.css"
import HeroSection from './components/HeroSection'
import Navbar from './components/NavBar'
import {Home} from './pages/Home'


function App() {
 

  return (
    <>
      <HeroSection />
      <Navbar />
      <Routes>
      <Route path='/' element={Home} />
    </Routes>
      
    </>
  )
}

export default App
