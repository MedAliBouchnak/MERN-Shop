import React from 'react'
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomeScreens from './screens/HomeScreens'
import ProductScreen from './screens/ProductScreen'


const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container> <Routes>
          <Route path='/' Component={HomeScreens} exact/>
          <Route path='/product/:id' Component={ProductScreen} /></Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
