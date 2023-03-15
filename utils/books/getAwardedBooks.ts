const getAwardedBooks = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_KEY,
            'X-RapidAPI-Host': process.env.RAPID_HOST
        }
    };

   const response = await fetch('https://hapi-books.p.rapidapi.com/top/2021', options)
   
   if(response.status == 200){
    const awardedBooks = response.json()

    return awardedBooks

   } else {
    return []
   }
}

export default getAwardedBooks