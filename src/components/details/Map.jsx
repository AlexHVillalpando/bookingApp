function Map({ lat, lon }) {
	console.log(lat, lon);

	if (!lat || !lon) return null;

	return (
		<div>
			{/* src="//maps.google.com/maps?q=latitude,longitude&z=zoom&output=embed" */}

			<iframe
				className="border-none"
				src={`//maps.google.com/maps?q=${lat},${lon}&z=zoom&output=embed`}
			></iframe>
		</div>
	);
}

export default Map;
