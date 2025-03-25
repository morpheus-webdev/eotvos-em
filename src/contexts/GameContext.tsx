//4 dolog minden context-nél

import { createContext, ReactNode, useEffect, useState } from 'react';
import { IGame } from '../util/util';

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
	const [games, setGames] = useState<IGame[]>([]);
	async function updateGames() {
		let res = await fetch('/api/games').then((data) => data.json());
		console.log(res);

		setGames(res);
	}
	useEffect(() => {
		updateGames();
	}, []);
	async function addGame(newGame: IGame) {
		//setGames([...games, newGame]);
		let res = await fetch('/api/games', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newGame),
		}).then((data) => data.json());
		updateGames();
		console.log(res);
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
