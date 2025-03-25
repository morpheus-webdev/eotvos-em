import { useContext } from 'react';
import { StoreContext } from '../contexts/StoreProvider';
import { IStore } from '../util/util';
import { Button } from '@mui/material';

export const Stores = () => {
	const { stores } = useContext(StoreContext);
	return (
		<div className='p-8 flex flex-col flex-wrap gap-8 items-center'>
			{stores.map((s, i) => {
				return <StoreComp key={`store-${i}`} store={s} />;
			})}
		</div>
	);
};

const StoreComp = ({ store }: { store: IStore }) => {
	function handleNewItem() {
		//TODO
	}
	return (
		<div className='w-1/2 h-[500px] flex flex-col flex-nowrap items-center gap-4 bg-lime-200 hover:bg-lime-300 rounded-4xl justify-around'>
			<h1 className='text-5xl text-white text-center'>{store.name}</h1>
			<p className='text-4xl'>
				{store.address.city}, {store.address.zip} - {store.address.street} -{' '}
				{store.address.num}
			</p>
			{store.address.info && <p className='text-3xl'>{store.address.info}</p>}
			{store.inventory.map((it, i) => {
				return (
					<p>
						{it.game.name} - {it.count}
					</p>
				);
			})}
			<Button
				variant='contained'
				sx={{ fontSize: '2rem' }}
				onClick={handleNewItem}>
				Add new item to store
			</Button>
		</div>
	);
};
