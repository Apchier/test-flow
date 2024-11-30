console.log('test');
console.log('ini coba update');

const fetchApi = (url, callback) =>
	fetch(url)
		.then(response => response.json())
		.then(data => callback(data));

fetchApi('https://fakestoreapi.com/products', data => console.log(data));
