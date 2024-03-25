import Image from "next/image";
import { Navigation } from "./components/hero";
import Text from "./components/text";
import { GenderSales } from "./components/gendersales";
import Blog from "./components/blog";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
          
      <Navigation/>

      <Text/>

      <GenderSales/>

      <Blog/>

      <Footer/>

    </div>
  );
}
