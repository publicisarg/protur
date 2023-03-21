import { useState } from 'react'
import './App.css'
import { Main } from './containers/main'

function App() {

  const [mode, setMode] = useState<Boolean>(true);
  const [imgsrc, setImgUrl] = useState<String>('');
  const [imgname, setImgName] = useState<String>('');
  const [linksrc, setLinkUrl] = useState<String>('');

  return (
    <>
      {/*<Loading></Loading>*/}
      {/*<Header></Header> */}
      <Main/>
      {/*<Footer></Footer>*/}
     
    </>
  )
}

export default App
