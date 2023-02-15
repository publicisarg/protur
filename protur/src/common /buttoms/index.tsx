import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from "react";
import { GrBriefcase, GrLinkBottom, GrLinkPrevious } from "react-icons/gr";



export const Standarbuttom = (props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return <button className={`rounded-3xl border-solid border-[#CCCCCC] text-[#999999] bg-transparent ${isActive ? 'activo' : null}`} onClick={toggleClass} >{props.name}</button>;
}

export const IconButtomLeft = (props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
<<<<<<< HEAD
  return <button className={`rounded-3xl border-solid border-[#CCCCCC] text-[#999999] bg-transparent`}>{props.name}<GrLinkBottom /></button>;
=======
  return <button className={`flex gap-2 items-center rounded-3xl border-solid border-[#CCCCCC] text-[#999999] bg-transparent`}>{props.name} <GrLinkBottom/></button>;
>>>>>>> e8d44b6e78cf593589e4a8705937330bfd68ad81
}
export const IconButtomRight = (props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
  return <button className={`flex gap-2 items-center rounded-3xl border-solid border-[#CCCCCC] text-[#999999] bg-transparent`}><GrLinkPrevious/> {props.name}</button>;
}
export const IconButtomRightDark = (props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
  return <button className={`flex gap-2 items-center rounded-3xl border-solid border-[#CCCCCC] text-[#999999] bg-transparent activo`}>{props.name} <GrBriefcase/></button>;
}


