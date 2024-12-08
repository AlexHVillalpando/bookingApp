import React from 'react';
import ReservationCard from './ReservationCard';
import { Link } from 'react-router';

function ReservationsList({ reservations, onDelete, onRate }) {
	return (
		<>
			<div className="bg-background grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
				{reservations.map((reservation) => (
					<ReservationCard
						key={reservation.id}
						reservation={reservation}
						onDelete={onDelete}
						onRate={onRate}
					/>
				))}
			</div>
			{reservations.length === 0 && (
				<div className="text-primary bg-background flex flex-col align-center justify-center h-[100%]">
					<p className="flex text-3xl mx-auto">No reservation found.</p>
					<p className="flex text-2xl mx-auto">
						<Link to="/">Try making a reservation!</Link>
					</p>
				</div>
			)}
		</>
	);
}

export default ReservationsList;
