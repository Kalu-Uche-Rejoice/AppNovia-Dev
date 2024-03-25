import Image from "next/image"

function Navigation(props){
    return(
        <div
            style={{
                backgroundImage: `url("/images/main-home-rev-5.jpg.png")`,
                height: "100vh",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
            className="relative p-5 h-screen text-xs"
        >
            <div className="flex justify-items-stretch uppercase ">
             <ul className="w-full p-3 border-b-2 border-black " >
                <Image
                    src="/images/corsen-main-logo-x2.png.png"
                    width={120}
                    height={50}
                    className="inline px-3"
                ></Image>
                <li className="inline px-2"><a>HOME</a></li>
                <li className="inline px-2"><a>PAGES</a></li>
                <li className="inline px-2"><a>SHOP</a></li>
                <li className="inline px-2"><a>PORTOFOLIO</a></li>
                <li className="inline px-2"><a>BLOG</a></li>         
                <li className="inline float-right px-3">
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    </a>
                </li>
                <li className="inline float-right px-3">
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                    </svg>
                    0
                    </a>
                </li>
                <li className="inline float-right px-3">
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>

                        0
                    </a>
                </li>
                <li className="inline float-right px-3">
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 inline">
                    <path d="M1.75 1.002a.75.75 0 1 0 0 1.5h1.835l1.24 5.113A3.752 3.752 0 0 0 2 11.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 0-1.5H3.628A2.25 2.25 0 0 1 5.75 9h6.5a.75.75 0 0 0 .73-.578l.846-3.595a.75.75 0 0 0-.578-.906 44.118 44.118 0 0 0-7.996-.91l-.348-1.436a.75.75 0 0 0-.73-.573H1.75ZM5 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                    </svg>
                        Cart
                    </a>
                </li>
                <li className="inline float-right px-3">
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 inline">
                    <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                    </svg>
                        Search
                    </a>
                </li>
            </ul>
            </div>

            <div className="w-full absolute bottom-3 left-0 px-6  ">   
               <div className="w-3/12 m-3 ">
                    <h3 className="text-4xl my-2">Mixed Textiles</h3>
                    <p className="text-wrap">Lorem ipsum dolor sit amet, consectetur adipscising elit, sed dou eiusomod</p>
                    <button className="border-2 border-black inline my-4 p-2 uppercase"> Shop collection</button>
                </div>   
                <hr className="border-b-2 border-black"></hr>         
            </div>
        </div>
        
    )
}



export {Navigation}