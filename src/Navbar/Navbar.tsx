//import { Button } from '@mui/material';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<Button>
				<Link className='navbar-btn' to='all-tasks'>
					All tasks
				</Link>
			</Button>
			<Button>
				<Link className='navbar-btn' to='new-task'>
					New task
				</Link>
			</Button>
		</nav>
	);
};

export default Navbar;
