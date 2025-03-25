//interface, defObj, context, provider

import { createContext, ReactNode, useState } from 'react';
import { IStore } from '../util/util';

interface IStoreContext {
	stores: IStore[];
	addStore: (store: IStore) => void;
	deleteStore: (id: string) => void;
}

const defaultStoreContext: IStoreContext = {
	stores: [],
	addStore: (store: IStore) => {},
	deleteStore: (id: string) => {},
};

export const StoreContext = createContext<IStoreContext>(defaultStoreContext);

export const StoreContextProvider = ({ children }: { children: ReactNode }) => {
	const [stores, setStores] = useState<IStore[]>([]);
	function addStore(store: IStore) {
		setStores([...stores, store]);
	}
	function deleteStore(id: string) {
		let newStoreArr = stores.filter((s, i) => {
			return s.id !== id;
		});
		setStores(newStoreArr);
	}
	return (
		<StoreContext.Provider value={{ stores, addStore, deleteStore }}>
			{children}
		</StoreContext.Provider>
	);
};
