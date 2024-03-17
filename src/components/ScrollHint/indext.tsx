import {BsMouse} from "react-icons/bs";
import * as React from "react";

const ScrollHint = () => {
    return (
        <div className="flex h-24 justify-center items-center"
             style={{background: "white", boxShadow: "0 0 5px 2px white"}}
        >
            <BsMouse size={24} className={"animate-bounce"}/>
        </div>
    )
}

export default ScrollHint;
