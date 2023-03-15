const getAwardedBooks = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9ef8be9e9cmsh93eb397c12f0dd5p12644bjsn25f3ecf9eb8d',
            'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
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