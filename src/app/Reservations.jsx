import { useEffect, useState } from 'react';
import useApiFetch from '../hooks/useApiFetch';
import ReservationsList from '../components/reservations/ReservationsList';
import Modal from '../components/Modal';
import Review from '../components/reservations/Review';
import ConfirmDeletion from '../components/reservations/ConfirmDeletion';

function Reservations() {
	const [reservations, fetchReservations] = useApiFetch();
	const [openModal, setOpenModal] = useState(false);
	const [child, setChild] = useState(null);

	useEffect(() => {
		fetchReservations({
			url: '/bookings',
		});
	}, []);

	const closeModal = () => {
		setOpenModal(false);
	};

	const handleRateModal = (id) => {
		setOpenModal(true);
		setChild(<Review hotelId={id} closeModal={closeModal} />);
	};

	const handleDeleteModal = (reservation) => {
		setOpenModal(true);
		setChild(
			<ConfirmDeletion
				hotelId={reservation?.id}
				closeModal={closeModal}
				reservation={reservation}
			/>,
		);
	};
	return (
		<div className="max-w-5xl mx-auto px-5 py-16 h-[88dvh]">
			<ReservationsList
				reservations={reservations}
				onDelete={handleDeleteModal}
				onRate={handleRateModal}
			/>

			<Modal openModal={openModal} closeModal={closeModal}>
				{child}
			</Modal>
		</div>
	);
}

export { Reservations };
