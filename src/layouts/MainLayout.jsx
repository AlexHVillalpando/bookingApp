import { Outlet } from 'react-router';
import Header from '../components/Header';

function MainLayout() {
	return (
		<div className="bg-background">
			<Header />
			<Outlet />
		</div>
	);
}

export default MainLayout;
