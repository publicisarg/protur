import { useState } from 'react'
import './App.css'
import { Footer } from './containers/footer'
import { Header } from './containers/header'
import { Main } from './containers/main'
import goku from '../public/test.jpeg'
import { Loading } from './pages/loading'
import { Download } from './containers/download/normal'


function App() {

  const [mode, setMode] = useState<Boolean>(true);
  const [imgsrc, setImgUrl] = useState<String>('');
  const [imgname, setImgName] = useState<String>('');
  const [linksrc, setLinkUrl] = useState<String>('');

  return (
    <>
      <Loading></Loading>
      <Header></Header> 
        {mode == true? <Main/> : <Download imgsrc={goku} imgname={"Goku"} linksrc={"#"} setMode={setMode}/>}
      <Footer></Footer>
     
    </>
  )
}

export default App
