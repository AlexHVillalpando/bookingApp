import toast from 'react-hot-toast';
import useApiFetch from '../../hooks/useApiFetch';

import { LuCalendarDays } from 'react-icons/lu';

function ConfirmDeletion({ hotelId, closeModal, reservation }) {
	const [reservations, fetchReservations] = useApiFetch();

	const handleDelete = (hotelId) => {
		fetchReservations({
			url: `/bookings/${hotelId}`,
			method: 'DELETE',
		});
		toast.success('Succesfully deleted!', { duration: 4000 });
		closeModal();
	};

	return (
		<div className="text-primary">
			<h2 className="font-bold text-xl mb-8">Confirm Deletion</h2>
			<p className="mb-6">
				Are you sure you want to DELETE the following reservation?
			</p>
			<div className="mb-12">
				<h2 className="text-xl font-semibold p-4 bg-blue-500 text-white rounded-lg">
					{reservation?.hotel.name}
				</h2>
				<div className="flex justify-between items-center mt-4">
					<div className="flex items-center gap-2">
						<LuCalendarDays className="size-7" />
						<div>
							<p className="font-semibold">Check-in</p>
							<p className="text-xs">{reservation.checkIn}</p>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<LuCalendarDays className="size-7" />
						<div>
							<p className="font-semibold">Check-out</p>
							<p className="text-xs">{reservation.checkOut}</p>
						</div>
					</div>
				</div>
			</div>
			<span className="flex justify-between">
				<button className="flex btn" onClick={closeModal}>
					No
				</button>
				<button
					className="btn bg-red-500"
					onClick={() => {
						handleDelete(hotelId);
					}}
				>
					Delete
				</button>
			</span>
		</div>
	);
}

export default ConfirmDeletion;
