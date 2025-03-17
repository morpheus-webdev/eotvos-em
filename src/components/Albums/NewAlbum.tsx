import { useContext, useEffect, useState } from 'react';
import { AlbumContext } from '../../contexts/AlbumsContext';
import { defaultAlbum, IAlbum } from '../../utils/util';
import { Button, TextField } from '@mui/material';

const NewAlbum = () => {
	const { addAlbum } = useContext(AlbumContext);
	const [newAlbum, setNewAlbum] = useState<IAlbum>(defaultAlbum);

	useEffect(() => {
		console.log(newAlbum);
	}, [newAlbum]);

	function handleAdd() {
		if (newAlbum.name !== '' && newAlbum.performer !== '' && newAlbum.img) {
			addAlbum(newAlbum);
		}
	}

	return (
		<div>
			<TextField
				placeholder='Album name...'
				onChange={(e) => setNewAlbum({ ...newAlbum, name: e.target.value })}
			/>
			<TextField
				placeholder='Performer name...'
				onChange={(e) =>
					setNewAlbum({ ...newAlbum, performer: e.target.value })
				}
			/>
			<TextField
				placeholder='Image link...'
				onChange={(e) => setNewAlbum({ ...newAlbum, img: e.target.value })}
			/>
			<input
				type='date'
				onChange={(e) =>
					setNewAlbum({ ...newAlbum, releaseDate: new Date(e.target.value) })
				}
			/>
			<Button onClick={handleAdd}>Add new album</Button>
		</div>
	);
};
export default NewAlbum;
