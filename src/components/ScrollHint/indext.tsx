import {BsMouse} from "react-icons/bs";
import * as React from "react";
import clsx from "clsx";

const ScrollHint = () => {
    const [showScrollHint, setShowScrollHint] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setShowScrollHint(window.scrollY < 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex h-24 justify-center items-center"
             style={{background: "white", boxShadow: "0 0 5px 2px white"}}
        >
            <BsMouse size={24}
                className={clsx("animate-bounce transition-opacity duration-1000", showScrollHint ? "opacity-100" : "opacity-0")}
            />
        </div>
    )
}

export default ScrollHint;
