import toast from 'react-hot-toast';
import useApiFetch from '../../hooks/useApiFetch';

function ConfirmDeletion({ hotelId, closeModal }) {
	const [reservations, fetchReservations] = useApiFetch();

	const handleDelete = (hotelId) => {
		fetchReservations({
			url: `/bookings/${hotelId}`,
			method: 'DELETE',
		});
		toast.success('Succesfully deleted!');
		closeModal();
	};

	return (
		<div className="text-primary">
			<h2 className="font-bold text-xl mb-8">Confirm Deletion</h2>
			<p className="mb-12">Are you sure you want to DELETE your reservation?</p>
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
