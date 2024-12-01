import { Routes, Route, Outlet } from 'react-router';

function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<h2>Home</h2>} />
			<Route path="/hotel/:id" element={<h2>Details</h2>} />
			<Route path="/reservations" element={<h2>Reservations</h2>} />
			<Route path="/reservations" element={<h2>Reservations</h2>} />
			<Route path="/reservations" element={<h2>Reservations</h2>} />

			<Route
				element={
					<div>
						<h2>AuthLayout</h2>
						<Outlet />
					</div>
				}
			>
				<Route path="login" element={<h2>Login</h2>} />
				<Route path="register" element={<h2>Register</h2>} />
			</Route>
		</Routes>
	);
}

export default AppRouter;
