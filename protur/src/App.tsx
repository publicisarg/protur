import './App.css'
import { Download } from './containers/download'
import { Footer } from './containers/footer'
import { Header } from './containers/header'
import { Main } from './containers/main'


function App() {

  return (
    <>
      <Header></Header> 
      <Main></Main>
      <Footer></Footer>
      {<Download imgsrc="https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/55QHEOQRQBEPTF5LRJK57MDEP4.jpg"/>}
    </>
  )
}

export default App
