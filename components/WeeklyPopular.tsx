import { weeklyPopulars } from "@/pages";


type PropsType = {
    weeklyPopulars: weeklyPopulars[]
}

export const WeeklyPopular = ({weeklyPopulars}: PropsType) => {
    console.log({weeklyPopulars});

    const content = weeklyPopulars.map(wp => {
        return (
           <>   
                
                <div className="md:w-2/6 " key={wp.book_id}>
                <div  className="block max-w-xs rounded bg-white shadow-lg dark:bg-neutral-700 sm:mr-4 ">
                    <a href="#!" >
                        <img
                            className="rounded-t-lg w-full"
                            src={wp.cover}
                            alt=""
                        />
                    </a>
                </div>
                <div className="p-6 text-center">
                <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 xl:w-60 md:w-48 w-64">
                        {wp.name}
                </h5>
              
                </div>
       
                </div>
                    
                  </>
        )
    })
  return <div className="container mx-auto">

  <h1 className="text-3xl md:m-10 text-center md:text-left">Weekly Popular Books</h1>
  <div className="flex rounded-box flex-wrap  mt-10 xl:ml-40 md:ml-2 ml-10 container">
  {content}
  </div>
    
 
  </div>
}
