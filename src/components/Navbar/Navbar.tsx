import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav>
			<Button variant='contained'>
				<Link style={{ textDecoration: 'none' }} to='/albums'>
					Albums
				</Link>
			</Button>
			<Button variant='contained'>
				<Link style={{ textDecoration: 'none' }} to='/new-album'>
					New Album
				</Link>
			</Button>
		</nav>
	);
};
