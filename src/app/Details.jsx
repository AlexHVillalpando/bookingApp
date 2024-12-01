import React from 'react';
import { useParams } from 'react-router';

function Details() {
	const params = useParams();
	return (
		<div>
			<h2>Details {params.id}</h2>
			<pre>{JSON.stringify(params, null, 2)}</pre>
		</div>
	);
}

export { Details };
