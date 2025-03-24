import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<div className='flex flex-row flex-nowrap justify-between'>
			<div className='flex flex-row flex-nowrap justify-start'>
				<Button variant='text'>
					<Link to='/games'>Games</Link>
				</Button>
				<Button variant='text'>
					<Link to='/stores'>Store</Link>
				</Button>
			</div>
			<div className='flex flex-row flex-nowrap justify-end'>
				<Button variant='text'>
					<Link to='/games/new'>New Game</Link>
				</Button>
				<Button variant='text'>
					<Link to='/stores/new'>New Store</Link>
				</Button>
			</div>
		</div>
	);
};
