import { Outlet } from 'react-router';
import Brand from '../components/Brand';
import Contact from './Contact';

function AuthLayouts() {
	return (
		<div className="grid place-content-center min-h-[100dvh] py-12">
			<div className="mb-6">
				<Brand />
			</div>
			<Outlet />
			<Contact />
		</div>
	);
}

export default AuthLayouts;
