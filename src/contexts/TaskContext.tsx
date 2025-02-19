import { createContext, ReactNode, useEffect, useState } from 'react';
import { ITask, preDefTasks } from '../util/util';
import { v4 } from 'uuid';

//interface
interface ITaskContext {
	tasks: ITask[];
	addTask: (task: ITask) => void;
	deleteTaskByName: (id: number) => void;
	changeStatus: (id: number) => void;
}

//defaultObj
const defaultTaskContext: ITaskContext = {
	tasks: preDefTasks,
	addTask: (task: ITask) => {},
	deleteTaskByName: (id: number) => {},
	changeStatus: (id: number) => {},
};
//Context
export const TaskContext = createContext<ITaskContext>(defaultTaskContext);

//context provider
export const TaskContextProvider = ({ children }: { children: ReactNode }) => {
	const [tasks, setTasks] = useState<ITask[]>(preDefTasks);
	useEffect(() => {
		console.log(tasks);
	}, [tasks]);
	function addTask(task: ITask) {
		setTasks([...tasks, { ...task, id: v4() }]);
	}
	function deleteTaskByName(id: number) {
		//TODO
	}
	function changeStatus(id: number) {
		//TODO
	}
	return (
		<TaskContext.Provider
			value={{ tasks, addTask, deleteTaskByName, changeStatus }}>
			{children}
		</TaskContext.Provider>
	);
};
