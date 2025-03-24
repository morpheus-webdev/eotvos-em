//4 dolog minden context-nél

import { createContext, ReactNode, useState } from 'react';
import { defaultGames, IGame } from '../util/util';

//interface
interface IGameContext {
	games: IGame[];
	addGame: (newGame: IGame) => void;
	deleteGame: (id: string) => void;
}

//defaultObj
const defaultGameContext: IGameContext = {
	games: [],
	addGame: (newGame: IGame) => {},
	deleteGame: (id: string) => {},
};

//context
export const GameContext = createContext<IGameContext>(defaultGameContext);

//Provider
export const GameContextProvider = ({ children }: { children: ReactNode }) => {
	const [games, setGames] = useState<IGame[]>(defaultGames);
	function addGame(newGame: IGame) {
		setGames([...games, newGame]);
	}
	function deleteGame(id: string) {
		let newGameArr = games.filter((g, i) => {
			return g.id !== id;
		});
		setGames(newGameArr);
	}
	return (
		<GameContext.Provider value={{ games, addGame, deleteGame }}>
			{children}
		</GameContext.Provider>
	);
};
