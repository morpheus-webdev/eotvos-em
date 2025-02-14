import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Comp1 from './Comp1/Comp1';
import { Comp2 } from './Comp2/Comp2';
import { tasks } from './util/util';
import Task from './Task/Task';
import Navbar from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Tasks from './Task/Tasks';
import NewTask from './Task/NewTask';

function App() {
	/* const [myBoolean, setMyBoolean] = useState<boolean>(false);
	useEffect(() => {
		console.log(myBoolean);
	}, [myBoolean]);
	let localArr = tasks; */
	return (
		<div>
			<div>
				{/* {localArr.map((t) => {
				return (
					<Task
						key={`task-${t.id}`}
						task={t}
						b={myBoolean}
						setMyB={setMyBoolean}
					/>
				);
			})} */}
				{/* Én az app vagyok
			<div
				style={{
					width: 200,
					height: 200,
					borderRadius: '50%',
					backgroundColor: myBoolean ? 'yellow' : 'grey',
				}}></div>
			{myBoolean ? <Comp1 /> : <Comp2 />}*/}
			</div>
			<Navbar />
			<div id='page-content'>
				<Routes>
					<Route path='all-tasks' element={<Tasks />} />
					<Route path='new-task' element={<NewTask />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
