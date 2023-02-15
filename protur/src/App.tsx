import './App.css'
import { Footer } from './containers/footer'
import { Header } from './containers/header'
import { Main } from './containers/main'
import { Loading } from './pages/loading'

function App() {

  return (
    <>
      <Loading></Loading>
      <Header></Header> 
      <Main></Main>
      <Footer></Footer>
     
    </>
  )
}

export default App
