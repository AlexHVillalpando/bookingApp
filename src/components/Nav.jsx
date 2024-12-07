import { Link } from 'react-router';
import { useAuth } from '../app/context/auth';
import { FaUserLarge } from 'react-icons/fa6';

import toast from 'react-hot-toast';

function Nav({ closeMenu }) {
	const { isAuth, logout } = useAuth();

	const wrapperFun = () => {
		closeMenu();
		logout();
		toast.success('You are now logged out!');
	};

	return (
		<div className="grid, place-content-center py-5">
			<div className="flex flex-col md:flex-row items-center gap-6">
				{isAuth ? (
					<>
						<span className="text-sm font-bold flex gap-2">
							<FaUserLarge />
							{`${JSON.parse(window.localStorage.getItem('user')).firstName} ${
								JSON.parse(window.localStorage.getItem('user')).lastName
							}`}
						</span>

						<Link to="/reservations" className="nav-link" onClick={closeMenu}>
							Reservations
						</Link>

						<button className="btn bg-red-500" onClick={wrapperFun}>
							Logout
						</button>
					</>
				) : (
					<>
						<Link to="/login " className="nav-link" onClick={closeMenu}>
							Login
						</Link>

						<Link to="/register " className="nav-link" onClick={closeMenu}>
							Sign up
						</Link>
					</>
				)}
			</div>
		</div>
	);
}

export default Nav;
