import {
	TiStarFullOutline,
	TiStarHalfOutline,
	TiStarOutline,
} from 'react-icons/ti';

function RatingStars({ rating }) {
	const renderStar = (index) => {
		if (index < Math.floor(rating)) {
			return <TiStarFullOutline />;
		} else if (index < rating) {
			return <TiStarHalfOutline />;
		} else {
			return <TiStarOutline />;
		}
	};

	return (
		<div className="flex items-center gap-2">
			<span className="flex items-center">
				{[...Array(5)].map((_, index) => {
					return (
						<span key={index} className="text-amber-400 text-lg">
							{renderStar(index)}
						</span>
					);
				})}
			</span>
			<span>{rating}</span>
		</div>
	);
}

export default RatingStars;
