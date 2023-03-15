import Info from "@/components/Info"
import getNominatedBokks from "@/utils/books/genreNominatedBooks"

export async function getServerSideProps() {
   const nominatedBooks =  await getNominatedBokks()

  //  console.log({nominatedBooks});

   return {
    props: {
        nominatedBooks
    }
   }
}

type nominatedBooks = {
  book_id: number,
  name: string,
  author: string,
  votes: string,
  cover: string,
  url: string
}

type PropsType = {
  nominatedBooks: nominatedBooks[]
}

const GenreNominated = ({ nominatedBooks }: PropsType) => {
  const content = nominatedBooks && nominatedBooks.map(book => {
    return(
      <div className="md:w-2/6 " key={book.book_id}>
          <div className="block max-w-xs bg-white shadow-lg dark:bg-neutral-700 sm:mr-4">
            <a href="#!" >
                <img
                  className="rounded-t-lg w-full"
                  src={book.cover}
                  alt=""
                />
              </a>
          </div>
          <div className="p-6 text-center">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 xl:w-60 md:w-48 ">
              {book.name}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 break-normal xl:w-60 lg:w-52 ">
            {book.author}
          </p>
          </div>
      </div>
    )
  })
  return (
    <div className="container mx-auto">
    <h1 className="text-3xl md:m-10 text-center md:text-left">Genre nominated books</h1>
    <div className="flex flex-wrap items-center mt-10 xl:ml-40 ml-10">
      { nominatedBooks.length > 0 ? content : <Info /> }
    </div>
    </div>
  )
}

export default GenreNominated