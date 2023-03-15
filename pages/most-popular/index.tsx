import Info from "@/components/Info";
import top15MostPopular from "@/utils/books/top15MostPopular"


export async function getServerSideProps(){
    const mostPopular = await top15MostPopular()

    console.log({mostPopular});

    return {
        props: {
            mostPopular
        }
    }
}

type mostPopular = {
    book_id: string,
    position: string,
    name: string,
    cover: string,
    rating: number,
    url: string
}

type PropsType = {
    mostPopular: mostPopular[]
}

const MostPopular = ({ mostPopular }: PropsType) => {
    
    const content = mostPopular.map(mp => {
        return (
           <>   
                
                <div className="md:w-2/6 " key={mp.book_id}>
                <div  className="block max-w-xs rounded bg-white shadow-lg dark:bg-neutral-700 sm:mr-4 ">
                    <a href="#!" >
                        <img
                            className="rounded-t-lg w-full"
                            src={mp.cover}
                            alt=""
                        />
                    </a>
                </div>
                <div className="p-6 text-center">
                <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 xl:w-60 md:w-48 w-64">
                        {mp.name}
                </h5>
              
                </div>
       
                </div>
                    
                  </>
        )
    })
  return (
    <div className="container mx-auto">
    <h1 className="text-3xl md:m-10 text-center md:text-left">Top 15 Most Popular books</h1>
    <div className="flex flex-wrap items-center mt-10 xl:ml-40 ml-10">
        {mostPopular.length > 0 ? content : <Info />}
    </div>
</div>
  )
}

export default MostPopular