//import { Button } from '@mui/material';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav style={{ backgroundColor: 'lightblue' }}>
			<Button>
				<Link to='all-tasks'>All tasks</Link>
			</Button>
			<Button>
				<Link to='new-task'>New task</Link>
			</Button>
		</nav>
	);
};

export default Navbar;
