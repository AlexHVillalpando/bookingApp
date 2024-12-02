import { useEffect } from 'react';
import { useHotels } from './context/hotels';
import HotelsList from '../components/home/HotelsList';

function Home() {
	const { hotels, getAll } = useHotels();
	useEffect(() => {
		if (hotels.length === 0) {
			getAll();
		}
	}, []);

	console.log(hotels);

	return (
		<div>
			<main className="max-w-[1280px] mx-auto px-5 py-10">
				<HotelsList hotels={hotels} />
			</main>
		</div>
	);
}

export { Home };
