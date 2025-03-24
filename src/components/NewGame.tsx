import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../contexts/GameContext';
import { defaultGame, GenreType, IGame } from '../util/util';
import { Button, MenuItem, Select, TextField } from '@mui/material';
import { v4 } from 'uuid';

export const NewGame = () => {
	const { addGame } = useContext(GameContext);
	const [newGame, setNewGame] = useState<IGame>(defaultGame);
	function handleAddGame() {
		if (
			newGame.name &&
			newGame.lowestPrice &&
			newGame.releaseDate &&
			newGame.score
		) {
			setNewGame({ ...newGame, id: v4() });
		}
	}
	useEffect(() => {
		if (newGame.id) {
			addGame(newGame);
		}
	}, [newGame.id]);
	return (
		<div className='flex flex-row flex-nowrap justify-center'>
			<div className='flex flex-col flex-nowrap items-center w-1/2 gap-8'>
				<TextField
					placeholder='Game name...'
					onChange={(e) => setNewGame({ ...newGame, name: e.target.value })}
				/>
				<Select
					value={newGame.genre}
					label='Game genre...'
					onChange={(e) =>
						setNewGame({ ...newGame, genre: e.target.value as GenreType })
					}>
					<MenuItem value={'Action'}>Action</MenuItem>
					<MenuItem value={'Adventure'}>Adventure</MenuItem>
					<MenuItem value={'Role-Playing'}>Role-Playing</MenuItem>
					<MenuItem value={'Shooter'}>Shooter</MenuItem>
					<MenuItem value={'Fighting'}>Fighting</MenuItem>
					<MenuItem value={'Strategy'}>Strategy</MenuItem>
					<MenuItem value={'Sports'}>Sports</MenuItem>
					<MenuItem value={'Racing'}>Racing</MenuItem>
					<MenuItem value={'Survival'}>Survival</MenuItem>
					<MenuItem value={'Simulation'}>Simulation</MenuItem>
				</Select>
				<input
					type='date'
					onChange={(e) =>
						setNewGame({
							...newGame,
							releaseDate: new Date(e.target.value),
						})
					}
				/>
				<TextField
					type='number'
					placeholder='Score...'
					onChange={(e) =>
						setNewGame({ ...newGame, score: parseFloat(e.target.value) })
					}
				/>
				<TextField
					type='number'
					placeholder='Lowest price...'
					onChange={(e) =>
						setNewGame({ ...newGame, lowestPrice: parseFloat(e.target.value) })
					}
				/>
				<TextField
					placeholder='Image url...'
					onChange={(e) => setNewGame({ ...newGame, img: e.target.value })}
				/>
				<Button onClick={handleAddGame}>Add new game</Button>
			</div>
		</div>
	);
};
