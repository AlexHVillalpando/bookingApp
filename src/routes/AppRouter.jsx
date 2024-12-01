import { Routes, Route } from 'react-router';

function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<h2>Home</h2>} />
		</Routes>
	);
}

export default AppRouter;
