import logo from '../../../public/logoblack.svg'
import { IconButtomLeft, IconButtomRight, IconButtomRightDark } from '../../common /buttoms'

export const Download = (props: any) => {
    return (
      <div className="absolute m-auto inset-0 flex justify-center items-center z-50 bg-gray-400/50">
        <div className="absolute drop-shadow-lg px-12 py-8 rounded-lg flex flex-col justify-center items-center bg-white">
          <img src={logo} className="pb-6 w-40"/>
          <img className="rounded-lg" src={props.imgsrc} />
          <div className="flex flex-col sm:flex-row justify-between w-full mt-6 gap-4 sm:gap-0">
            <IconButtomRight name={"Volver"}/>
            <div className="flex flex-col sm:flex-row gap-4">
              <IconButtomLeft name={"Descargar fondo"}/>
              <IconButtomRightDark name={"Trabajar aquí"}/>
            </div>
          </div>
        </div>
      </div> 
    )
}