import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { useAuth } from '../app/context/auth';

import { FaUserLarge } from 'react-icons/fa6';
import { FiSun } from 'react-icons/fi';
import { FaRegMoon } from 'react-icons/fa';

import toast from 'react-hot-toast';
import Toggle from 'react-toggle';

const ls = window.localStorage;
const initialTheme = ls.getItem('theme');
console.log(initialTheme === 'light');

function Nav({ closeMenu }) {
	const [darkMode, setDarkMode] = useState(false);
	const [mode, setMode] = useState(initialTheme || 'light');

	const { isAuth, logout } = useAuth();

	const wrapperFun = () => {
		closeMenu();
		logout();
		toast.success('You are now logged out!');
	};

	const handleTheme = () => {
		setDarkMode(!darkMode);
	};

	useEffect(() => {
		//const currentTheme = () => ls.getItem('theme') || 'light';
	}, []);

	useEffect(() => {
		if (!darkMode) {
			ls.setItem('theme', 'light');
			document.body.classList.remove('dark');
			document.body.classList.add(ls.getItem('theme'));
		} else if (darkMode) {
			ls.setItem('theme', 'dark');
			document.body.classList.remove('light');
			document.body.classList.add(ls.getItem('theme'));
		}
		//console.log(ls.getItem('theme'));
	}, [darkMode]);

	return (
		<div className="bg-card text-primary grid, place-content-center py-5">
			<div className="flex flex-col md:flex-row items-center gap-6">
				{isAuth ? (
					<>
						<label>
							<Toggle
								defaultChecked={true}
								icons={{
									checked: <FiSun className="text-xs text-white" />,
									unchecked: <FaRegMoon className="text-xs" />,
								}}
								onChange={handleTheme}
							/>
						</label>
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
