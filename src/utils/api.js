let abortFunctions = [];

export const abortAllRequest = () => {
	abortFunctions.forEach( ( x ) => x && x.abort() );
	abortFunctions = [];
};

export const request = ( url, callback ) => {
	abortAllRequest();

	const xhr = new XMLHttpRequest();
	xhr.open( 'GET', url );
	xhr.send();
	xhr.addEventListener( 'load', () => {
		callback( JSON.parse( xhr.responseText ) );
	} );
	xhr.addEventListener( 'error', () => {
		callback( null, xhr.status );
	} );

	abortFunctions.push( xhr );
};