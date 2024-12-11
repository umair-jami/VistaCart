import Offer from "./components/offer/page";
import Navbar from "./components/navbar/page";
import Main from "./components/main/page";
import Sales from "./components/sales/page";
import Category from "./components/categery/page";
import Bestproducts from "./components/bestProducts/page";
import Speaker from "./components/speaker/page";
import OurProducts from "./components/ourProducts/page";
import NewArrival from "./components/NewArrival/page";
import Services from "./components/services/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <>
    <Offer/>
    <Navbar/>
    <Main/>
    <Sales/>
    <Category/>
    <Bestproducts/>
    <Speaker/>
    <OurProducts/>
    <NewArrival/>
    <Services/>
    <Footer/>
    </>
  );
}
