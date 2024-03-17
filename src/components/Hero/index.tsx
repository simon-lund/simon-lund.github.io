import * as React from "react"
import "./styles.css"
import {TypeAnimation} from "react-type-animation";

const Hero = () => {
    return <div className="grow">
        <div className="hero">
            <h1 className="absolute text-6xl font-bold">
                <TypeAnimation
                    sequence={["Hello.", 1500, "Bonjour.", 1500, "Hola.", 1500, "Ciao.", 1500]}
                    speed={1}
                    wrapper={"span"}
                    repeat={Infinity}
                />
            </h1>
            <div className="blob-cont">
                <div className="yellow blob"></div>
                <div className="red blob"></div>
                <div className="green blob"></div>
            </div>
        </div>
    </div>
}

export default Hero
