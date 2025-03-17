import { createContext, ReactNode, useState } from 'react';
import { IAlbum } from '../utils/util';

//interface
interface IAlbumContext {
	//összegyűjtöm az alkalmazás funkcionalitásait
	albums: IAlbum[];
	addAlbum: (album: IAlbum) => void;
	deleteAlbum: (id: string) => void;
	changeHeart: (id: string) => void;
}

//defaultObj
const defaultAlbumContext: IAlbumContext = {
	albums: [],
	addAlbum: (album: IAlbum) => {},
	deleteAlbum: (id: string) => {},
	changeHeart: (id: string) => {},
};

//context
export const AlbumContext = createContext<IAlbumContext>(defaultAlbumContext);

//contextProvider (ReactNode, children, values)

export const AlbumContextProvider = ({ children }: { children: ReactNode }) => {
	const [albums, setAlbums] = useState<IAlbum[]>([]);
	function addAlbum(album: IAlbum) {
		setAlbums([...albums, album]);
	}
	function deleteAlbum(id: string) {
		//TODO
	}
	function changeHeart(id: string) {
		//TODO
	}
	return (
		<AlbumContext.Provider
			value={{ albums, addAlbum, deleteAlbum, changeHeart }}>
			{children}
		</AlbumContext.Provider>
	);
};
