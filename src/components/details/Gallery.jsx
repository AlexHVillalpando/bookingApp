import { useEffect, useState } from 'react';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

function Gallery({ hotel }) {
	const [images, setImages] = useState([]);

	useEffect(() => {
		if (hotel) {
			const fotos = hotel?.images?.map((item) => ({
				original: item.url,
				thumbnail: item.url,
			}));
			setImages(fotos);
		}
	}, [hotel]);

	return (
		<div className="w-full">
			<ImageGallery items={images} showPlayButton={false} autoPlay={true} />
		</div>
	);
}

export default Gallery;
