import { useState } from 'react'
import './App.css'
import { Download } from './containers/download/normal'
import { Footer } from './containers/footer'
import { Header } from './containers/header'
import { Main } from './containers/main'
import goku from '../public/test.jpeg'

function App() {

  const [mode, setMode] = useState<Boolean>(true);
  const [imgsrc, setImgUrl] = useState<String>('');
  const [imgname, setImgName] = useState<String>('');
  const [linksrc, setLinkUrl] = useState<String>('');

  return (
    <>
      <Header></Header> 
        {mode == false? <Main/> : <Download imgsrc={goku} imgname={"Goku"} linksrc={"#"} setMode={setMode}/>}
      <Footer></Footer>
    </>
  )
}

export default App
