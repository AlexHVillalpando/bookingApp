import { Outlet } from 'react-router';
import Header from '../components/Header';
import Contact from './Contact';

function MainLayout() {
	return (
		<div className="bg-background">
			<Header />
			<Outlet />
			<Contact />
		</div>
	);
}

export default MainLayout;
