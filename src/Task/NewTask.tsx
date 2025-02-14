import { useEffect, useState } from 'react';
import { ITask } from '../util/util';
import { Button, TextField } from '@mui/material';

const NewTask = () => {
	const [newTask, setNewTask] = useState<ITask>({ id: 0, name: '' });
	useEffect(() => {
		console.log(newTask);
	}, [newTask]);
	return (
		<div>
			<TextField
				type='text'
				placeholder='Id...'
				onChange={(e) =>
					setNewTask({ ...newTask, id: parseInt(e.target.value) })
				}></TextField>
			<TextField
				type='text'
				placeholder='Name...'
				onChange={(e) =>
					setNewTask({ ...newTask, name: e.target.value })
				}></TextField>
			<Button onClick={() => console.log(newTask)}>LOG</Button>
		</div>
	);
};

export default NewTask;
