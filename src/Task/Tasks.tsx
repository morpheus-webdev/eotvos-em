import { useContext, useState } from 'react';
import { ITask, preDefTasks } from '../util/util';
import Task from './Task';
import { TaskContext } from '../contexts/TaskContext';

const Tasks = () => {
	const { tasks } = useContext(TaskContext);
	return (
		<div className='task-container'>
			{tasks.map((t, i) => {
				return <Task key={`task-${i}`} task={t} />;
			})}
		</div>
	);
};

export default Tasks;
