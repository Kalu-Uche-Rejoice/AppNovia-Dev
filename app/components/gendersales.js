import { Card2, Card3 } from "./pictureCard";

function GenderSales(){
    return(
        <div>
            <div className="grid grid-cols-2">
             <Card2 source="/images/main-home-category-img-4.jpg.png" gender="Man"/>
                <Card2 source="/images/main-home-category-img-5.jpg.png" gender="woman"/>
            </div>
            
            <div className="grid grid-cols-3 place-content-evenly p-12"
                style={{
                    width: "100%",
                    height:"15vh"
                }}
            >

                <button className="inline h-full items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
                </button>
                <p className="text-center text-wrap inline">
                    Accusantium doloremque laudantium, totam rem aperiam. Sed ut 
                 perspiciatis unde omnis iste natus error sit voluptatem
                </p>
                <button className="inline h-full items-end ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 float-right">
                 <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                </button>
            </div>
            <Card3/>
        </div> )
        
}

export {GenderSales}