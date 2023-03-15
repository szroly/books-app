

const genreWeeklyPopular = async () => {

    console.log("process.env",process.env.NEXT_PUBLIC_RAPID_HOST);
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_KEY,
            'X-RapidAPI-Host': process.env.RAPID_HOST
        }
    };

    const response = await fetch('https://hapi-books.p.rapidapi.com/week/horror/10', options)
	

    if(response.status == 200) {
        const weeklyPopular = response.json()

        return weeklyPopular
    } else {
        return {}
    }
}

export default genreWeeklyPopular