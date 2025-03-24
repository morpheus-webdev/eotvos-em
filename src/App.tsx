import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Games } from './components/Games';
import { Stores } from './components/Stores';
import { NewGame } from './components/NewGame';
import { NewStore } from './components/NewStore';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/games' element={<Games />} />
				<Route path='/stores' element={<Stores />} />
				<Route path='/games/new' element={<NewGame />} />
				<Route path='/stores/new' element={<NewStore />} />
			</Routes>
		</div>
	);
}

export default App;
