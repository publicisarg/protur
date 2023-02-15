import logo from '../../../public/logoblack.svg'
import { IconButtomLeft, IconButtomRight, IconButtomRightDark } from '../../common /buttoms'
import { Download } from './normal'

export const DownloadPopUp = (props: any) => {
    return (
      <div className="absolute m-auto inset-0 flex justify-center items-center z-40 bg-gray-400/50">
        <Download imgsrc={props.imgsrc} className="absolute drop-shadow-lg md:w-3/4"/>
      </div> 
    )
}