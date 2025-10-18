import Main from "../ui/Main";

function AboutPage() {
    return (
        <section className="bg-black py-12 text-center">
            <Main>
                <h2 className="text-4xl mb-6 text-red-500 font-bold text-center tracking-wide uppercase">
                    Who I Am?
                </h2>
                <p className="text-lg text-slate-300">
                    Hey there 👋 I'm Moomen Eltelbany, a self-taught front-end
                    developer with a love for clean interfaces, logical
                    structures, and everything React.
                </p>
                <p className="text-lg text-slate-300">
                    I started learning web development because I've always
                    enjoyed the mix of creativity and problem-solving — it's
                    that sweet spot where design meets logic. What began as
                    curiosity quickly turned into a full passion for building
                    smooth, accessible, and well-structured web apps.
                </p>
                <p className="text-lg text-slate-300">
                    I'm making a career shift into tech, bringing with me a lot
                    of persistence, adaptability, and a genuine drive to keep
                    improving every single day.
                </p>
            </Main>

            <Main>
                <h2 className="text-4xl mb-6 text-red-500 font-bold text-center tracking-wide uppercase">
                    About This Project (Formula 1 Web App)
                </h2>
                <p className="text-lg text-slate-300">
                    This project is one I'm really proud of — a Formula 1 stats
                    and standings web app built with React, Vite, Tailwind, and
                    React Router v7.
                </p>
                <p className="text-lg text-slate-300">
                    I wanted to go beyond simple “tutorial apps” and challenge
                    myself with something complex and data-driven. The app lets
                    users explore teams, drivers, and standings with dynamically
                    fetched data, smooth navigation, and clean UI transitions.
                </p>
                <p className="text-lg text-slate-300">
                    Working on this helped me strengthen my understanding of
                    React Router's loaders, async data fetching, and state
                    management, while also learning how to keep a large file
                    structure organized and scalable. It's been the project
                    where I've grown the most — both technically and mentally.
                </p>
            </Main>

            <Main>
                <h2 className="text-4xl mb-6 text-red-500 font-bold text-center tracking-wide uppercase">
                    What I've Learned & What's Next
                </h2>
                <p className="text-lg text-slate-300">
                    This project is one I'm really proud of — a Formula 1 stats
                    and standings web app built with React, Vite, Tailwind, and
                    React Router v7.
                </p>
                <p className="text-lg text-slate-300">
                    Through this project, I got more comfortable handling:
                </p>
                <ul className="text-slate-400">
                    <li>
                        API calls and AbortController for cleaner async logic
                    </li>
                    <li>Reusable helpers and modular component design</li>
                    <li>
                        Conditional styling and responsiveness with Tailwind
                    </li>
                    <li>
                        And of course, debugging and refactoring when things got
                        tricky 😄
                    </li>
                </ul>
            </Main>

            <Main>
                <p className="text-slate-400 italic mt-4 text-2xl">
                    When I'm not coding, I'm probably following Formula 1,
                    organizing my codebase for the third time 😅, or exploring
                    new UI ideas for my next project.
                </p>
            </Main>
        </section>
    );
}

export default AboutPage;
