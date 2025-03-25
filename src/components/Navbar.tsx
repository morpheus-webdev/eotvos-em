import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<div className='flex flex-row flex-nowrap justify-between'>
			<div className='flex flex-row flex-nowrap justify-start gap-10'>
				<Button variant='text'>
					<Link className='text-5xl' to='/games'>
						Games
					</Link>
				</Button>
				<Button variant='text'>
					<Link className='text-5xl' to='/stores'>
						Store
					</Link>
				</Button>
			</div>
			<div className='flex flex-row flex-nowrap justify-end gap-10'>
				<Button variant='text'>
					<Link className='text-5xl' to='/games/new'>
						New Game
					</Link>
				</Button>
				<Button variant='text'>
					<Link className='text-5xl' to='/stores/new'>
						New Store
					</Link>
				</Button>
			</div>
		</div>
	);
};
