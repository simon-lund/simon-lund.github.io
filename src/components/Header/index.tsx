import * as React from "react"
import {Link} from "gatsby";

const Header = () => {
    return (
        <header className="fixed z-[100] w-screen h-12 backdrop-blur-md bg-black/90">
            <div className="flex h-full items-center mx-8">
                <Link
                    to="/"
                    className="text-white text-xl font-bold hover:cursor-pointer hover:rotate-12 transition-transform"
                    style={{letterSpacing: "-0.22em"}}
                >
                    $&
                </Link>
            </div>
        </header>
    );
}

export default Header;