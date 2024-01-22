import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Timing from './components/satsangTiming/Timing';
import AddressSection from './components/address/AddressSection';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <Banner/>
   <Timing/>
   <AddressSection/>
   </>
  )
}

export default App
