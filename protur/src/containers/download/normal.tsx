import logo from '../../../public/logoblack.svg'
import { IconButtomLeft, IconButtomRight, IconButtomRightDark } from '../../common /buttoms'
import { Close } from 'grommet-icons';

export const Download = (props: any) => {
    return (
      <div className="px-12 py-8 rounded-lg flex flex-col z-50 justify-center items-center bg-white">
        <img src={logo} className="pb-6 w-40"/>
        <img className="rounded-lg md:max-w-[70%]" src={props.imgsrc} />
        <div className="flex flex-col sm:flex-row justify-between w-full mt-6 gap-4 sm:gap-0">
          <IconButtomRight name={"Volver"}/>
          <div className="flex flex-col sm:flex-row gap-4">
            <IconButtomLeft name={"Descargar fondo"}/>
            <IconButtomRightDark name={"Trabajar aquí"}/>
          </div>
        </div>
      </div>
    )
}