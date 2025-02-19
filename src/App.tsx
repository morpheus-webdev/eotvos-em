import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
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
