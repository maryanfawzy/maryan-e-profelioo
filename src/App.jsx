import { useState } from 'react'


import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main className='max-w-7xl mx-auto'>
     <Navbar/>
     <Hero/>

     </main>
    </>
  )
}

export default App
