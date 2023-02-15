import { Standarbuttom, IconButtomRightDark, IconButtomRight, IconButtomLeft } from "../../../common /buttoms"



export const ListFilter = () => {
  return (
    <div className='grid grid-cols-4 gap-4 max-w-xl'>
      <Standarbuttom name="Ciudades" />
      <Standarbuttom name="Rutas" />
      <Standarbuttom name="Pueblos" />
      <Standarbuttom name="Naturaleza" />
    </div>
  )
}
