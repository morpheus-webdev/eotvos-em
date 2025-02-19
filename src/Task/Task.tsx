import { Dispatch, SetStateAction } from 'react';
import { getRandomColor, ITask } from '../util/util';
import { Checkbox } from '@mui/material';

const Task = (props: { task: ITask }) => {
	const task = props.task;
	return (
		<div className='task' style={{ backgroundColor: getRandomColor() }}>
			<h3>{task.name}</h3>
			<p>{task.duration} minutes</p>
			{/* TODO convert to other times */}
			<Checkbox checked={task.isCompleted} />
		</div>
	);
};

export default Task;
