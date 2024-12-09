import { useEffect, useState } from 'react';
import useApiFetch from '../hooks/useApiFetch';
import ReservationsList from '../components/reservations/ReservationsList';
import Modal from '../components/Modal';
import Review from '../components/reservations/Review';
import toast from 'react-hot-toast';
import ConfirmDeletion from '../components/reservations/ConfirmDeletion';

function Reservations() {
	const [reservations, fetchReservations] = useApiFetch();
	const [openModal, setOpenModal] = useState(false);
	const [child, setChild] = useState(null);
	const [openSecModal, setOpenSecModal] = useState(false);
	const [secChild, setSecChild] = useState(null);

	useEffect(() => {
		fetchReservations({
			url: '/bookings',
		});
	}, []);

	// const handleDelete = (id) => {
	// 	fetchReservations({
	// 		url: `/bookings/${id}`,
	// 		method: 'DELETE',
	// 	});
	// 	toast.success('Succesfully deleted!');
	// };

	const closeModal = () => {
		setOpenModal(false);
	};

	const closeSecModal = () => {
		setOpenSecModal(false);
	};
	const handleOpenModal = (id) => {
		setOpenModal(true);
		setChild(<Review hotelId={id} closeModal={closeModal} />);
	};

	const handleOpenSecModal = (id) => {
		setOpenSecModal(true);
		setSecChild(<ConfirmDeletion hotelId={id} closeModal={closeSecModal} />);
	};
	return (
		<div className="max-w-5xl mx-auto px-5 py-16 h-[88dvh]">
			<ReservationsList
				reservations={reservations}
				onDelete={handleOpenSecModal} //{handleDelete}
				onRate={handleOpenModal}
			/>

			<Modal openModal={openModal} closeModal={closeModal}>
				{child}
			</Modal>

			<Modal
				openModal={openSecModal}
				closeModal={closeSecModal}
				//				handleDelete={handleDelete}
			>
				{secChild}
			</Modal>
		</div>
	);
}

export { Reservations };
