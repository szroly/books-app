

const top15MostPopular = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_KEY,
            'X-RapidAPI-Host': process.env.RAPID_HOST
        }
    };

   const response = await fetch('https://hapi-books.p.rapidapi.com/month/2022/3', options)
    if(response.status == 200){
        const mostPopular = response.json()
        
        return mostPopular
    } else {
        return []
    }
}

export default top15MostPopular