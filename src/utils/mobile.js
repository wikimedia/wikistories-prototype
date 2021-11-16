export const convertUrlToMobile = url => {
	return url.replace( /https:\/\/(.*?)\./, ( subDomain ) => subDomain + 'm.' )
}
