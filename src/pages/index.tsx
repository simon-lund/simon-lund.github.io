import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import Header from "../components/Header";
import Hero from "../components/Hero";
import {BsMouse} from "react-icons/bs";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import ScrollHint from "../components/ScrollHint/indext";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <main>
            <div className="flex flex-col h-svh">
                <Header/>
                <Hero/>
                <ScrollHint/>
            </div>
            <About />
            <Projects />
        </main>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>$&</title>
