

const getAuthor = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9ef8be9e9cmsh93eb397c12f0dd5p12644bjsn25f3ecf9eb8d',
            'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
    };

    fetch('https://hapi-books.p.rapidapi.com/author/239579', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

export default getAuthor