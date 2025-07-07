//import { useState } from 'react'

import './App.css'
import Footer from './components/footer/Footer'
import Button from './components/button/Button'
import Rectangle from './components/rectangle/Rectangle'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <Rectangle/>
        <Rectangle/>
      </div>
      <hr/>
      <div className="gallery_button">
        <Button name="Full stack development" text_url="assets/UI_UX_Designe.png"/>
        <Button name="GitHub" text_url="assets/github-500.png"/>
      </div>
      <hr/>
      <Footer text_footer="2025 Сайт визитка"/>
    </>
  )
}

export default App
