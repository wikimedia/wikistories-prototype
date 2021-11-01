export const strip = html => {
	const doc = new window.DOMParser().parseFromString( html, 'text/html' )
	for ( const span of doc.querySelectorAll( 'span' ) ) {
		if ( span.style.display === 'none' ) {
			span.remove()
		}
	}
	return doc.body.textContent || ''
}
