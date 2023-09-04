import { useEffect, useState } from 'react'
import './App.css'
import { Main } from './containers/main'

function App() {

  const [lang, setLang] = useState("");

  useEffect(() => {
    var auxLang = "es";
    if (window.location.hostname == "workfromyourwallpaper.com") {
      auxLang = "en";
    }
    setLang(auxLang);
    if (auxLang == "en") {
      document.title = "#Work from your wallpaper";
    } else {
      document.title = "#Trabaja desde tu fondo de pantalla"
    }
  }, [])

  return (
    <>
      <Main lang={lang}/>
    </>
  )
}

export default App
