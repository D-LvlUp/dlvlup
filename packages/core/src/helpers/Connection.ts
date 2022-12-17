export function checkInternetConnection(): boolean {
	return require('dns').resolve('www.google.com', (err: any) => {
		if (err) {
			throw new Error(err);
		}
		console.log('Connected to the internet.');
		return true;
	});
}
