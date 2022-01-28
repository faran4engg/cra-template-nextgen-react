import { FC } from 'react';
import { SvgIcon } from 'app/domains/Common/components/svg-icon';

const HomePage: FC = () => (
    <>
        <p className="w-3/4 mx-auto mb-4 text-center md:w-5/6 md:text-base text-light-mode-text dark:text-dark-mode-text text-word-spacing">
            This is the summary of our roadmap activities. You just need a laptop and an internet
            connection to get started. <br />
            Join our
            <span className="text-2xl font-bold text-green-700">&nbsp;Discord&nbsp;</span>
            server !
        </p>

        <a
            href="https://discord.gg/SMsZ9Hx4d5"
            target="_blank"
            className="flex items-center px-4 mx-auto text-black bg-yellow-300 rounded cursor-pointer hover:bg-lime-300 animate-zoomInOut"
            aria-label="Join Discord"
            rel="noreferrer"
        >
            Join our community
        </a>
    </>
);

export default HomePage;
