import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import Header from "../components/Header";
import Hero from "../components/Hero";
import {BsMouse} from "react-icons/bs";
import About from "../components/About";
import Projects from "../components/Projects";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <main className="relative">
            <div className="flex flex-col h-svh">
                {/*TODO: now make sure that the header + hero + mouse indicator = full screen on all devices*/}
                <Header/>
                <Hero/>
                <div className="flex h-24 justify-center items-center"
                     style={{background: "white", boxShadow: "0 0 5px 2px white"}}
                >
                    <BsMouse size={24} className={"animate-bounce"}/>
                </div>
            </div>
            <About />
            <Projects />
        </main>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>$&</title>
