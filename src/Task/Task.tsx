import { Dispatch, SetStateAction } from 'react';
import { ITask } from '../util/util';

const Task = ({
	task,
	b,
	setMyB,
}: {
	task: ITask;
	b: boolean;
	setMyB: Dispatch<SetStateAction<boolean>>;
}) => {
	//const task = props.task;
	return (
		<>
			<div style={{ backgroundColor: b ? 'yellow' : 'white' }}>
				<h3>{task.name}</h3>
				<p>This is the {task.id} element</p>
			</div>
			<button onClick={() => setMyB(!b)}>Change</button>
		</>
	);
};

export default Task;
