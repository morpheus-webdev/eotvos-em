import { useContext, useEffect, useState } from 'react';
import { defaultTask, ITask } from '../util/util';
import { Button, TextField } from '@mui/material';
import { TaskContext } from '../contexts/TaskContext';

const NewTask = () => {
	const { addTask } = useContext(TaskContext);
	const [newTask, setNewTask] = useState<ITask>(defaultTask);

	useEffect(() => {
		console.log(newTask);
	}, [newTask]);

	function handleNewTask() {
		if (newTask.name !== '' && newTask.duration !== 0) {
			addTask(newTask);
		}
	}

	return (
		<div className='flex flex-col flex-nowrap items-center gap-8 my-20'>
			<TextField
				placeholder='Name...'
				type='text'
				onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
			/>
			<TextField
				placeholder='Duration...'
				type='number'
				onChange={(e) =>
					setNewTask({ ...newTask, duration: parseInt(e.target.value) })
				}
			/>
			<Button onClick={handleNewTask}>Add new task</Button>
		</div>
	);
};

export default NewTask;
