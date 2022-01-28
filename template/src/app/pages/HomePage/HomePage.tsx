import { FC } from 'react';
import { SvgIcon } from 'app/domains/Common/components/svg-icon';

const HomePage: FC = () => (
	<>
	 <span className="text-2xl font-bold text-green-700">
          &nbsp;Discord&nbsp;
        </span>
        server !
      </p>

      <a
        href="https://discord.gg/SMsZ9Hx4d5"
        target="_blank"
        className="flex items-center px-4 mx-auto bg-orange-300 rounded cursor-pointer hover:bg-lime-300 animate-zoomInOut"
        aria-label="Join Discord"
        rel="noreferrer"
      >
        <SvgIcon className="w-24 h-8" icon="DiscordIcon" />
      </a>
	</>
);

export default HomePage;