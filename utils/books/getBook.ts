

const getBook = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_KEY,
            'X-RapidAPI-Host': process.env.RAPID_HOST
        }
    };

    fetch('https://hapi-books.p.rapidapi.com/book/56597885', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

export default getBook