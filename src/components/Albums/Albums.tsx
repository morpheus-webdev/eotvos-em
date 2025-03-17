import { useContext } from 'react';
import { AlbumContext } from '../../contexts/AlbumsContext';

const Albums = () => {
	const { albums } = useContext(AlbumContext);
	return (
		<div style={{ display: 'flex', flexFlow: 'row wrap' }}>
			{albums.map((a, i) => {
				return (
					<div
						key={`album-${i}`}
						style={{ display: 'flex', flexFlow: 'column nowrap' }}>
						<h1>{a.name}</h1>
						<h3>{a.performer}</h3>
						<p>{a.releaseDate.toISOString()}</p>
						<img style={{ width: '50%' }} src={a.img} />
					</div>
				);
			})}
		</div>
	);
};

export default Albums;
