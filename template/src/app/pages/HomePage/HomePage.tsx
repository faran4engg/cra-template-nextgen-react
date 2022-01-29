import { FC } from 'react';

const techStack = ['React v17', 'React Query v3', 'Tailwind v3', 'React Router v6'];
const HomePage: FC = () => (
    <div className="text-xl text-light-mode-text dark:text-dark-mode-text ">
        <h1 className="mb-4 text-2xl text-word-spacing">
            This is the fully responsive starter template with Dark / Light Mode !
        </h1>

        <h1 className="mb-4 text-2xl text-word-spacing">Websites built with this template:</h1>
        <div className="mb-12">
            <a
                href="https://nextgendev.tech/"
                target="_blank"
                className="w-1/4 p-2 mr-2 text-center rounded cursor-pointer hover:bg-yellow-300 bg-lime-300 text-slate-800"
                aria-label="Join Discord"
                rel="noreferrer"
            >
                NextGenDev.Tech
            </a>
            <a
                href="https://islaamify360.web.app/home"
                target="_blank"
                className="w-1/4 p-2 mr-2 text-center rounded cursor-pointer hover:bg-yellow-300 bg-lime-300 text-slate-800"
                aria-label="Join Discord"
                rel="noreferrer"
            >
                Islaamify 360
            </a>
        </div>

        <p className="underline">It uses the following tech-stack:</p>

        <ul className="mb-12">
            {techStack.map((tech) => (
                <li key={tech}>{tech}</li>
            ))}
        </ul>

        <a
            href="https://discord.gg/SMsZ9Hx4d5"
            target="_blank"
            className="w-1/4 p-3 mr-2 text-center bg-yellow-300 rounded cursor-pointer hover:bg-lime-300 text-slate-800"
            aria-label="Join Discord"
            rel="noreferrer"
        >
            Join Discord
        </a>
        <a
            href="https://github.com/faran4engg/cra-template-nextgen-react"
            target="_blank"
            className="w-1/4 p-3 mr-2 text-center bg-yellow-300 rounded cursor-pointer hover:bg-lime-300 text-slate-800"
            aria-label="Join Discord"
            rel="noreferrer"
        >
            Star on GitHub
        </a>
        <a
            href="https://www.npmjs.com/package/cra-template-nextgen-react"
            target="_blank"
            className="w-1/4 p-3 text-center bg-yellow-300 rounded cursor-pointer hover:bg-lime-300 text-slate-800"
            aria-label="Join Discord"
            rel="noreferrer"
        >
            Check out npm
        </a>
    </div>
);

export default HomePage;
