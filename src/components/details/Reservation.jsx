import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useApiFetch from '../../hooks/useApiFetch';
import { cn } from '../../utils';
import toast from 'react-hot-toast';
import { useEffect, useRef, useState } from 'react';

const schema = z.object({
	checkIn: z.string().min(1, { message: 'Check-In is required' }),
	checkOut: z.string().min(1, { message: 'Check-Out is required' }),
});

const today = new Date().toISOString().split('T')[0];

function Reservation({ hotelId }) {
	const [data, createReservation] = useApiFetch();
	const [CheckIn, setCheckIn] = useState(today);
	const [minCheckOut, setMinCheckOut] = useState(today);

	useEffect(() => setMinCheckOut(today), []);

	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(schema),
	});

	const onSubmit = (dataForm) => {
		//Validaciones opcionales
		dataForm.hotelId = hotelId;
		createReservation({
			url: '/bookings',
			method: 'POST',
			body: dataForm,
		});
		toast.success('Reservation succesfully booked!');
		reset();
	};

	const handleMinCheckOut = (e) => {
		let minCheckIn = e.target.value;
		minCheckIn = minCheckIn.split('-');
		let ultimodia = parseInt(minCheckIn[2], 10) + 1;
		minCheckIn[2] = ultimodia.toString().padStart(2, '0');
		minCheckIn = minCheckIn.join('-');
		setCheckIn(minCheckIn);
	};

	useEffect(() => setMinCheckOut(CheckIn), [CheckIn]);

	console.log(minCheckOut);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col md:flex-row md:items-center justify-center gap-2 mb-4">
				<div className="flex items-center justify-center gap-2 mb-4">
					<div className="flex flex-col items-center">
						<label className="font-semibold text-sm">Check-In</label>
						<input
							type="date"
							className="border px-3 py-1 rounded-sm"
							{...register('checkIn')}
							min={today}
							onChange={(e) => handleMinCheckOut(e)}
						/>
					</div>
					<div className="flex flex-col items-center">
						<label className="font-semibold text-sm">Check-Out</label>
						<input
							type="date"
							className="border px-3 py-1 rounded-sm"
							{...register('checkOut')}
							min={minCheckOut}
						/>
					</div>
				</div>

				<button className="btn bg-emerald-400">Reserve</button>
			</div>
			{/*Errors */}

			<p
				className={cn(
					'error-validation hidden text-center',
					(errors.checkIn || errors.checkOut) && 'block',
				)}
			>
				{errors.checkIn && errors.checkIn.message}{' '}
				{errors.checkOut && errors.checkOut.message}
			</p>
		</form>
	);
}

export default Reservation;
