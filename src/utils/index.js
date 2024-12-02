import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const priceFormat = new Intl.NumberFormat('es-MX', {
	style: 'currency',
	currency: 'MXN',
	minimumFractionDigits: 2,
});

export const cn = (...styles) => {
	return twMerge(clsx(styles));
};
