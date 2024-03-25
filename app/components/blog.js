import { Card4, Card5 } from "./pictureCard";
import Image from "next/image";

function Blog(props){
    return(
        <div>
            <div className=" pb-4   text-center">
          <h3 className="font-semibold text-3xl">
             Read Our Blog Posts
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing ectetur elit, sed do eiusmod.
            </p>
            </div>
            
             <div className="grid grid-cols-3 p-5">
             <Card4 height="300"
                source = "/images/Blog-list-img-1.jpg.png"
                date = "September 29 2022"
                text = "Top 10 Winter Essentials For 2022 You Should Try"
            />
             <Card4 height="400"
                source = "/images/Blog-list-img-2.jpg.png"
                date = "September 29 2022"
                text = "The Complete Communication Skills Master Class For Worky"
            />
             <Card4 height="300"
                source = "/images/Blog-list-img-3.jpg.png"
                date = "September 29 2022"
                text = "Premium Consultant Course For You"
            />
        </div>
        <div className="grid grid-cols-3 p-12">
                <Card5 height="500" source = "/images/main-home-image-4-1.jpg.png" width="333"/>
                <Card5 height="500" source = "/images/main-home-image-3-1.jpg.png" width="333"/>
                <div className="p-5 text-center text-wrap h-1/2 my-auto">
                    <p className="font-semibold text-2xl m-2">
                    Meet The Artists Behind The Corsen Maria & Sophia
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </p>
                    <button className="uppercase border-2 border-black block text-xs mx-auto p-3 m-3">shop collection</button>
                </div>
            </div>
            <div className="text-center">
                <h3>Instagram</h3>
                <p>
                    Follow us on @qodeinteractive
                </p>
                <div>
                    <marquee>
                        <div className="grid grid-cols-6 gap-5 ">
                        <Card5
                            source="/images/instagram-img-3.jpg.png"
                            height = "20"
                            width ="20"
                        />
                        <Card5
                            source="/images/instagram-img-3.jpg.png"
                            height = "20"
                            width ="20"
                        />
                        <Card5
                            source="/images/instagram-img-4.jpg.png"
                            height = "20"
                            width ="20"
                        />
                        <Card5
                            source="/images/instagram-img-5.jpg.png"
                            height = "20"
                            width ="20"
                        />
                        <Card5
                            source="/images/instagram-img-6.jpg.png"
                            height = "20"
                            width ="20"
                        />
                        <Card5
                            source="/images/instagram-img-7.jpg.png"
                            height = "20"
                            width ="20"
                        />
                        </div>
                        
                    </marquee>
                </div>
            </div>
        </div>
       
    )
}
export default Blog;