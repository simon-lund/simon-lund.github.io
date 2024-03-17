import * as React from 'react';

const START_YEAR = 2017;

const About = () => {
    const years = React.useMemo(() => {
        const currentYear = new Date().getFullYear();
        return (currentYear - START_YEAR).toString();
    }, []);

    return (
        <div className="flex flex-col items-center pt-6">
            <h2 className={"mb-6 text-center text-4xl font-bold"}>
                About
            </h2>
            <div className="max-w-screen-lg mx-6 md:mx-24 text-lg text-justify space-y-4 font-bold text-[#86868B] [&>*>strong]:text-black">
                <p>
                    In a world where <strong>technology and creativity intersect</strong>, I thrive at the heart of
                    innovation. With a mindset that blends the analytical with the artistic, my journey is a testament
                    to
                    the belief that <strong>every detail matters</strong>, and perfection is not a goal but a starting
                    point.
                </p>
                <p>
                    My passion for <strong>pushing boundaries</strong> mirrors the ethos of those who believe in
                    challenging
                    the status quo, making the impossible possible. As I navigate through the complexities of our
                    digital
                    era, my aim remains unwavering: to leave a mark that is not only visible in my achievements but also
                    felt in the hearts of those I inspire.
                </p>
                <p>
                    In essence, I am not just a part of the conversation; I am <strong>redefining it, one breakthrough
                    at a
                    time</strong>. This encapsulates a sense of innovation, dedication, and the desire to inspire,
                    reflecting the core values associated with a relentless pursuit of excellence.
                </p>
            </div>
        </div>
    );
}

export default About;