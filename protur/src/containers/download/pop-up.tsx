import logo from '../../../public/logoblack.svg'
import { IconButtomLeft, IconButtomRight, IconButtomRightDark } from '../../common /buttoms'
import { Download } from './normal'

export const DownloadPopUp = (props: any) => {

  const handleDescarga = () => {
    const descarga = document.createElement('a');
    descarga.href = props.imgsrc;
    descarga.download = 'Paisaje-Argentina.jpg';
    document.body.appendChild(descarga);
    descarga.click();
    document.body.removeChild(descarga);
  }

  function handleClose() {
    props.setShowPopup(false);
  }

    return (
      <div className="popup h-[100vh] grid justify-items-center items-center overflow-hidden fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="container px-12 py-8 rounded-lg flex flex-col z-50 justify-center items-center bg-white max-w-screen-lg">
          <img src={logo} className="pb-6 w-40" />
          <img className="rounded-lg md:max-h-[50vh] w-auto" src={props.imgsrc} />
          <div className="flex flex-col sm:flex-row justify-between w-full mt-6 gap-4 sm:gap-0">
            <div onClick={handleClose}><IconButtomRight name={"Volver"} /></div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a onClick={handleDescarga}><IconButtomLeft name={"Descargar fondo"} /></a>
              <a href={props.linksrc}><IconButtomRightDark name={"Trabajar aquí"} /></a>
            </div>
          </div>
        </div>
      </div>
    )
}