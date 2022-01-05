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

export const parallelRequests = (urls, callbacks) => {
	abortAllRequest();
	
	for (let i = 0; i < urls.length; i++) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", urls[i]);
		xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
						callbacks[i](data)
        }
    });
		xhr.send();
		abortFunctions.push( xhr );
	}
};
