import { useState } from 'react'
import './App.css'
import { Footer } from './containers/footer'
import { Header } from './containers/header'
import { Main } from './containers/main'
<<<<<<< HEAD
import { Loading } from './pages/loading'
=======
import goku from '../public/test.jpeg'
>>>>>>> 7442b304167fe56810d952b868a3a269251577b2

function App() {

  const [mode, setMode] = useState<Boolean>(true);
  const [imgsrc, setImgUrl] = useState<String>('');
  const [imgname, setImgName] = useState<String>('');
  const [linksrc, setLinkUrl] = useState<String>('');

  return (
    <>
      <Loading></Loading>
      <Header></Header> 
<<<<<<< HEAD
      <Main></Main>
=======
        {mode == false? <Main/> : <Download imgsrc={goku} imgname={"Goku"} linksrc={"#"} setMode={setMode}/>}
>>>>>>> 7442b304167fe56810d952b868a3a269251577b2
      <Footer></Footer>
     
    </>
  )
}

export default App
