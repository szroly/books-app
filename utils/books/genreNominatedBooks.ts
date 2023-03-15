const getNominatedBokks = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_KEY,
            'X-RapidAPI-Host': process.env.RAPID_HOST
        }
    };

   const response = await fetch('https://hapi-books.p.rapidapi.com/nominees/romance/2020', options)
	
	if(response.status == 200){
        const nominatedBooks = response.json()

        return nominatedBooks
    } else {
        return []
    }
	
}

export default getNominatedBokks