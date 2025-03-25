import { useContext, useEffect, useState } from 'react';
import { defaultStore, IStore } from '../util/util';
import { v4 } from 'uuid';
import { StoreContext } from '../contexts/StoreProvider';
import { Button, TextField } from '@mui/material';

export const NewStore = () => {
	const { addStore } = useContext(StoreContext);
	const [newStore, setNewStore] = useState<IStore>(defaultStore);
	function handleAddStore() {
		if (
			newStore.name &&
			newStore.address.zip >= 1000 &&
			newStore.address.zip <= 9999 &&
			newStore.address.city &&
			newStore.address.street &&
			newStore.address.num >= 1 &&
			newStore.address.num <= 500
		) {
			setNewStore({ ...newStore, id: v4() });
		}
	}
	useEffect(() => {
		if (newStore.id) {
			addStore(newStore);
		}
	}, [newStore.id]);
	return (
		<div className='flex flex-row flex-nowrap justify-center'>
			<div className='flex flex-col flex-nowrap items-center w-1/2 gap-8'>
				<TextField
					placeholder='Game name...'
					onChange={(e) => setNewStore({ ...newStore, name: e.target.value })}
				/>
				<TextField
					type='number'
					placeholder='Zip code...'
					onChange={(e) =>
						setNewStore({
							...newStore,
							address: { ...newStore.address, zip: parseInt(e.target.value) },
						})
					}
				/>
				<TextField
					placeholder='City name...'
					onChange={(e) =>
						setNewStore({
							...newStore,
							address: { ...newStore.address, city: e.target.value },
						})
					}
				/>
				<TextField
					placeholder='Street name...'
					onChange={(e) =>
						setNewStore({
							...newStore,
							address: { ...newStore.address, street: e.target.value },
						})
					}
				/>
				<TextField
					type='number'
					placeholder='House number...'
					onChange={(e) =>
						setNewStore({
							...newStore,
							address: { ...newStore.address, num: parseInt(e.target.value) },
						})
					}
				/>
				<TextField
					placeholder='Optional info...'
					onChange={(e) =>
						setNewStore({
							...newStore,
							address: { ...newStore.address, info: e.target.value },
						})
					}
				/>
				<Button onClick={handleAddStore}>Add new game</Button>
			</div>
		</div>
	);
};
