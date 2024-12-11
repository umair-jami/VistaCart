import React from "react";
import hero from "../../assets/About/abouthero.png";
import person1 from "../../assets/About/person1.png";
import person2 from "../../assets/About/person2.png";
import person3 from "../../assets/About/person3.png";
import info1 from "../../assets/About/info1.png";
import info2 from "../../assets/About/info2.png";
import info3 from "../../assets/About/info3.png";
import info4 from "../../assets/About/ifno4.png";
import links from "../../assets/About/quicklinks.png";
import service1 from "../../assets/Services/Services.png";
import service2 from "../../assets/Services/Services2.png";
import service3 from "../../assets/Services/Services3.png";
import Image from "next/image";
import Footer from "../footer/page";
import Offer from "../offer/page";
import Navbar from "../navbar/page";

export default function About() {
  return (
    <>
    <Offer/>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 container">
      {/* Header */}
      <header className="py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <nav>
            <ul className="flex space-x-4 text-sm text-gray-600">
              <li>Home</li>
              <li>/</li>
              <li>My Account</li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="flex flex-wrap justify-between items-center px-4 sm:px-8">
        {/* Text Section */}
        <div className="w-full md:basis-[35%] md:ml-20">
          <h1 className="text-black text-3xl md:text-5xl my-8 font-extrabold">
            Our Story
          </h1>
          <p className="text-sm text-gray-700">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <br />
          <p className="text-sm text-gray-700">
            Exclusive has more than 1 million products to offer, growing very
            fast. Exclusive offers a diverse assortment in categories ranging
            from consumer.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-auto flex justify-center mt-6 md:mt-0">
          <Image
            src={hero}
            alt="hero"
            className="h-[250px] w-[300px] md:h-[400px] md:w-[500px] object-cover"
          />
        </div>
      </div>

      <section className="container h-[calc(60vh-5rem)] flex md:flex-row justify-around items-center gap-8">
        {/* Service 1 */}
        <div className="text-center">
          <Image src={info1} alt="Free and Fast Delivery" className="mx-auto" />
          <h3 className="text-md font-semibold mt-4">10.5K</h3>
          <p className="text-gray-600 text-sm">Sallers active our site</p>
        </div>

        {/* Service 2 */}
        <div className="text-center">
          <Image src={info2} alt="24/7 Customer Service" className="mx-auto" />
          <h3 className="text-md font-semibold mt-4">33K</h3>
          <p className="text-gray-600 text-sm">Mopnthly Produduct Sale</p>
        </div>

        {/* Service 3 */}
        <div className="text-center bg-Secondary2 p-4 rounded-md">
          <Image src={info3} alt="Money Back Guarantee" className="mx-auto" />
          <h3 className="text-md font-semibold mt-4">45.5K</h3>
          <p className="text-gray-600 text-sm">Customer active in our site</p>
        </div>
        <div className="text-center">
          <Image src={info4} alt="Money Back Guarantee" className="mx-auto" />
          <h3 className="text-md font-semibold mt-4">25K</h3>
          <p className="text-gray-600 text-sm">Anual gross sale in our site</p>
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div>
          <div className="w-full bg-gray-200 h-auto rounded-lg shadow-lg relative p-4">
            {/* Product Image */}
            <div className="flex items-center justify-center h-60">
              <Image
                src={person1}
                alt="Product"
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Product Details */}
          </div>

          <div>
            <p style={{ fontWeight: 700 }} className="text-2xl">
              Tom Cruise
            </p>
            <p className="text-Secondary2 text-sm">Founder & Chairman</p>
            <Image src={links} alt="links" className="mb-10" />
          </div>
        </div>
        <div>
          <div className="w-full bg-gray-200 h-auto rounded-lg shadow-lg relative p-4">
            {/* Product Image */}
            <div className="flex items-center justify-center h-60">
              <Image
                src={person2}
                alt="Product"
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Product Details */}
          </div>

          <div>
            <p style={{ fontWeight: 700 }} className="text-2xl">
              Emma Watson
            </p>
            <p className="text-Secondary2 text-sm">Managing Director</p>
            <Image src={links} alt="links" className="mb-10" />
          </div>
        </div>
        <div>
          <div className="w-full bg-gray-200 h-auto rounded-lg shadow-lg relative p-4">
            {/* Product Image */}
            <div className="flex items-center justify-center h-60">
              <Image
                src={person3}
                alt="Product"
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Product Details */}
          </div>

          <div>
            <p style={{ fontWeight: 700 }} className="text-2xl">
              Will Smith
            </p>
            <p className="text-Secondary2 text-sm">Product Designer</p>
            <Image src={links} alt="links" className="mb-10" />
          </div>
        </div>
      </div>
      <section className="container h-[calc(60vh-5rem)] flex md:flex-row justify-around items-center gap-8">
        {/* Service 1 */}
        <div className="text-center">
          <Image
            src={service1}
            alt="Free and Fast Delivery"
            className="mx-auto"
          />
          <h3 className="text-md font-semibold mt-4">FREE AND FAST DELIVERY</h3>
          <p className="text-gray-600 text-sm">
            Free delivery for all orders over $140
          </p>
        </div>

        {/* Service 2 */}
        <div className="text-center">
          <Image
            src={service2}
            alt="24/7 Customer Service"
            className="mx-auto"
          />
          <h3 className="text-md font-semibold mt-4">24/7 CUSTOMER SERVICE</h3>
          <p className="text-gray-600 text-sm">
            Friendly 24/7 customer support
          </p>
        </div>

        {/* Service 3 */}
        <div className="text-center">
          <Image
            src={service3}
            alt="Money Back Guarantee"
            className="mx-auto"
          />
          <h3 className="text-md font-semibold mt-4">MONEY BACK GUARANTEE</h3>
          <p className="text-gray-600 text-sm">
            We return money within 30 days
          </p>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}
