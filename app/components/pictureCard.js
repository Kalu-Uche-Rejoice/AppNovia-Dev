import Image from "next/image"
function Card(props) {
    return(
        <div
        >
            <div className="relative"
        style={{
            backgroundImage: `url("${props.source}")`,
            height: "60vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}
        >
            <button className="absolute top-6 px-1 left-6 border-2 border-black capitalize bg-white">new</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline absolute top-5 right-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 absolute top-12 right-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>

        </div>
        <div className="table w-full">
            <div className="table-row">
                <div className="table-cell border-2 border-black">
                    {props.title}
                    <br></br>
                    {props.price}
                </div>
                <div className="table-cell text-center border-2 border-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                </div>
            </div>
        </div>
        </div>
        
    )
}

function Card2(props) {
return(
    <div className="flex items-center"
        style={{
            backgroundImage: `url("${props.source}")`,
            height: "90vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}
    >
        <p className=" flex flex-col w-1/2 mx-auto items-center justify center uppercase">
            {props.gender}
            <button className="uppercase m-6 block border-2 border-black text-xs font-bold p-3 mx-auto">
                shop collection
            </button>
        </p>
    </div>
)    
}
function Card3() {
    return(
        <div>
            <div className="grid grid-cols-4 place-content-evenly w-100 m-12">
                <img src="/images/Video-clients-img-2.png.png"></img>
                <img src="/images/Video-clients-img-3.png.png"></img>
                <img src="/images/Video-clients-img-5.png.png"></img>
                <img src="/images/video-clients-image-6.png.png"></img>
            </div>
            <div className="p-12">
             <div className=" flex flex-col items-center"
            style={{
            backgroundImage: `url("/images/div.elementor-background-overlay.png                             ")`,
            height: "70vh",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
            }}>
                <p className="uppercase items-center justify-center h-1/4 mx-auto my-auto text-4xl text-white"> 
                Onyx 
                <img src="/images/div.qodef-m-image.png" className="inline"></img>
                the flow
                <button className="uppercase border-b-2 border-white block text-xs mx-auto pt-5">Read more</button>
                </p>
                
            </div>
            
            </div>
           
        </div>
        
    )}
    
    function Card4(props) {
        var height = props.height
        var source = props.source
        return(
            <div className=" relative p-2"
            >
                <div className="w-fit border-b-2 border-black">
                <Image src={source}
                    height={height}
                    width ={300}
                >
                </Image>
                    <button className="absolute top-5 left-5 border-2 border-black p-1 text-xs bg-white">
                        {props.date}
                    </button>
                   
                   <div className="table mt-4 w-1/2 mx-auto mb-2 text-xs">
                    <div className="table-row">
                        <div className="table-cell uppercase text-right border-r-4 border-black p-1">
                            fashion
                        </div>
                        <div className="table-cell uppercase text-left p-1">
                            inspiration
                        </div>
                    </div>
                   </div>
                </div>
                <div className="p-4">
                <p>
                    {props.text}
                    </p>
                    <button className="uppercase border-b-2 border-black block text-xs mx-auto pt-5">Read more</button>
                </div>
            </div>
        )
    }

    function Card5(props) {
        var height = props.height
        var width = props.width
        var source = props.source
        return(
            <div>
                <img src= {source}>
                </img>
            </div>
        )
        
    }
export {Card, Card2, Card3, Card4, Card5}