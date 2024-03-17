import * as React from "react"
import {Link} from "gatsby";
import GithubMarkWhite from "../../images/github-mark-white.png";

const Header = () => {
    return (
        <header className="fixed z-[100] w-screen h-12 backdrop-blur-md bg-black/90">
            <div className="flex h-full justify-between items-center mx-8">
                <Link
                    to="/"
                    className="text-white text-xl font-bold hover:cursor-pointer hover:rotate-12 transition-transform"
                    style={{letterSpacing: "-0.22em"}}
                >
                    $&
                </Link>

                <a href="https://github.com/simon-lund">
                    <img src={GithubMarkWhite as string} alt="Github" className="h-8 w-8"/>
                </a>
            </div>
        </header>
    )
        ;
}

export default Header;