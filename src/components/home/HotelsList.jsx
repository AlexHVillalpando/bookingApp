import React from 'react';
import HotelCard from './HotelCard';

function HotelsList({ hotels }) {
	return (
		<div>
			{hotels.map((hotel) => (
				<HotelCard key={hotel.id} hotel={hotel} />
			))}
		</div>
	);
}

export default HotelsList;
