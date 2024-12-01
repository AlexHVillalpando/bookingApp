import React from 'react';

function HotelCard({ hotel }) {
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden m-5">
			<div className="aspect-{1.8}">
				<img src={hotel.images[0].url} alt={hotel.name} />
			</div>
			<div>
				<h2>{hotel.name}</h2>
				<div>
					<span>rating</span>
					<span>
						{hotel.city.name}, {hotel.city.country}
					</span>
					<span>{hotel.price}</span>
					<span>More info</span>
				</div>
			</div>
		</div>
	);
}

export default HotelCard;
