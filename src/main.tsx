import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { GameContextProvider } from './contexts/GameContext.tsx';
import { StoreContextProvider } from './contexts/StoreProvider.tsx';

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<GameContextProvider>
			<StoreContextProvider>
				<App />
			</StoreContextProvider>
		</GameContextProvider>
	</BrowserRouter>
);
