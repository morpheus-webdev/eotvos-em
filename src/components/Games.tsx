import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import { IGame } from '../util/util';

export const Games = () => {
	const { games } = useContext(GameContext);
	return (
		<div className='p-8 flex flex-row flex-wrap gap-8'>
			{games.map((g, i) => {
				return <GameComp key={`game-${i}`} game={g} />;
			})}
		</div>
	);
};

const GameComp = ({ game }: { game: IGame }) => {
	return (
		<div className='w-1/6 h-[750px] flex flex-col flex-nowrap items-center gap-4 bg-blue-400 hover:bg-blue-600'>
			<img src={game.img} className='w-full' />
			<h1 className='text-2xl text-white text-center'>{game.title}</h1>
			<h1 className='text-xl text-white'>$ {game.lowestPrice}</h1>
			<p>{game.genre}</p>
			<p>{game.releaseDate}</p>
			<p>{game.score} / 10</p>
		</div>
	);
};
