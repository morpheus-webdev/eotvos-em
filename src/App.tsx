import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Albums from './components/Albums/Albums';
import NewAlbum from './components/Albums/NewAlbum';
import { Navbar } from './components/Navbar/Navbar';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/albums' element={<Albums />} />
				<Route path='/new-album' element={<NewAlbum />} />
			</Routes>
		</div>
	);
}

export default App;
