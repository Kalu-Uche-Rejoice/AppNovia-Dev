import {Card} from "./pictureCard"

function Text(){
    return(
        <div className=" p-5 m-8">
            <div>
                <p className="p-12 m-12 text-center text-wrap">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </p>

                <ul className="uppercase font-bold text-xs my-4">
                    <li className="mr-2 p-1 inline hover:bg-slate-300 cursor-pointer">all products</li>
                    <li className="mx-2 p-1 inline hover:bg-slate-300 cursor-pointer">lifestyle</li>
                    <li className="mx-2 p-1 inline hover:bg-slate-300 cursor-pointer">brand</li>
                    <li className="mx-2 p-1 inline hover:bg-slate-300 cursor-pointer">outwear</li>
                </ul>
             </div>
            <div className="grid grid-cols-4">
                <Card source="/images/Main-product-list-1.jpg.png" title="black jacket" price="$350.00"/>
                <Card source="/images/Main-product-list-2.jpg.png" title="leather jacket" price="$300.00"/>
                <Card source="/images/Main-product-list-3.jpg (1).png" title="black outfit" price="$220.00"/>
                <Card source="/images/Main-product-list-4.jpg.png" title="t-shirt" price="$120.00"/>
                <Card source="/images/product-new-img-1.jpg.png" title="black vest" price="$85.00"/>
                <Card source="/images/Main-product-list-2.jpg.png" title="leather jacket" price="$300.00"/>
                <Card source="/images/Main-product-list-7.jpg.png" title="beige t-shirt" price="$60.00"/>
                <Card source="/images/Main-product-list-8.jpg.png" title="black hat" price="$45.00"/>

            </div>
            
        </div>
        
    )
}

export default Text