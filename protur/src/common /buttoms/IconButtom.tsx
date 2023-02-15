import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from "react";
import { GrBriefcase, GrLinkBottom, GrLinkPrevious } from "react-icons/gr";

export const IconButtomLeft = (props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };


    return <button className={`rounded-3xl border-solid border-[#CCCCCC] text-[#999999] bg-transparent ${isActive ? 'activo' : null}`} onClick={toggleClass} >{props.name}</button>;
}






function IconButtoRight(props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) {

    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };


    return <button className={`rounded-3xl border-solid border-[#CCCCCC] text-[#999999] bg-transparent ${isActive ? 'activo' : null}`} onClick={toggleClass} >{props.name}</button>;
}
