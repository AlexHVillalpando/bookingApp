import { useEffect } from 'react';
import { useHotels } from '../context/hotels';
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
			<HotelsList hotels={hotels} />
		</div>
	);
}

export { Home };
